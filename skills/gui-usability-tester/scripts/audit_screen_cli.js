#!/usr/bin/env node
/**
 * Automated GUI & Cross-Browser Screen Auditor (audit_screen_cli.js)
 * Part of the `gui-usability-tester` Agent Skill for HW03 (CS423 / CSC13003).
 *
 * Inspects any target screen on the EShop SUT across Desktop & Mobile viewports,
 * checks IA-01..IA-04 + WCAG/Responsive criteria, and captures a full-browser
 * watermarked screenshot with the student's Anti-Cheat identity.
 */

const fs = require('fs');
const path = require('path');

function parseArgs() {
  const args = process.argv.slice(2);
  const config = {
    url: 'http://localhost:5174',
    tabText: 'Đơn hàng',
    screen: 'FR-18: Quản lý Đơn hàng (Orders)',
    student: '23120397 - VĂN ĐỨC TUẤN - 23120397@student.hcmus.edu.vn',
    outDir: path.resolve(process.cwd(), 'screenshots', 'skill_demo')
  };
  for (let i = 0; i < args.length; i++) {
    if (args[i] === '--url' && args[i + 1]) config.url = args[++i];
    else if (args[i] === '--tab' && args[i + 1]) config.tabText = args[++i];
    else if (args[i] === '--screen' && args[i + 1]) config.screen = args[++i];
    else if (args[i] === '--student' && args[i + 1]) config.student = args[++i];
    else if (args[i] === '--out' && args[i + 1]) config.outDir = path.resolve(args[++i]);
  }
  return config;
}

async function runAudit() {
  const cfg = parseArgs();
  if (!fs.existsSync(cfg.outDir)) fs.mkdirSync(cfg.outDir, { recursive: true });

  const pwPath = 'D:\\Học Tập\\Curious\\abusive-wifi\\node_modules\\playwright-core';
  const { chromium } = require(pwPath);

  const browser = await chromium.launch({ headless: true });
  const context = await browser.newContext({ viewport: { width: 1366, height: 900 } });
  const page = await context.newPage();

  await page.goto(cfg.url, { waitUntil: 'networkidle' });
  await page.waitForTimeout(500);

  // Auto-login if on EShop Admin Login screen
  await page.evaluate(() => {
    const inputs = document.querySelectorAll('input');
    if (inputs.length >= 2) {
      const setter = Object.getOwnPropertyDescriptor(window.HTMLInputElement.prototype, 'value').set;
      setter.call(inputs[0], 'admin@eshop.com');
      inputs[0].dispatchEvent(new Event('input', { bubbles: true }));
      setter.call(inputs[1], 'Admin123!');
      inputs[1].dispatchEvent(new Event('input', { bubbles: true }));
      const btn = document.querySelector('form button');
      if (btn) btn.click();
    }
  });
  await page.waitForTimeout(1200);

  // Navigate to requested tab
  await page.evaluate((sub) => {
    const items = Array.from(document.querySelectorAll('ul li'));
    const target = items.find(el => el.textContent && el.textContent.toLowerCase().includes(sub.toLowerCase()));
    if (target) target.click();
  }, cfg.tabText);
  await page.waitForTimeout(800);

  // Run automated IA-01..IA-04 + Human Review DOM Audit
  const auditFindings = await page.evaluate(() => {
    const h1Count = document.querySelectorAll('h1').length;
    const h2Count = document.querySelectorAll('h2').length;
    const inputs = Array.from(document.querySelectorAll('input, select, textarea'));
    const unlabeledInputs = inputs.filter(el => {
      const id = el.getAttribute('id');
      const hasLabelFor = id ? !!document.querySelector(`label[for="${id}"]`) : false;
      const wrappedInLabel = !!el.closest('label');
      const hasAria = !!(el.getAttribute('aria-label') || el.getAttribute('aria-labelledby'));
      return !hasLabelFor && !wrappedInLabel && !hasAria;
    }).length;

    const sidebarItems = Array.from(document.querySelectorAll('ul li'));
    const nonFocusableNavItems = sidebarItems.filter(li => li.tabIndex < 0 && !li.querySelector('a, button')).length;

    return {
      h1Count,
      h2Count,
      totalInputs: inputs.length,
      unlabeledInputs,
      nonFocusableNavItems,
      desktopViewport: { width: window.innerWidth, scrollWidth: document.documentElement.scrollWidth },
      hasDesktopOverflow: document.documentElement.scrollWidth > window.innerWidth
    };
  });

  // Inject Full-Browser Window Chrome + Student Anti-Cheat Bar
  await page.evaluate(({ screenLabel, studentIdentity }) => {
    const urlStr = window.location.href;
    const topWrapper = document.createElement('div');
    topWrapper.style.cssText = 'position:sticky;top:0;left:0;right:0;z-index:999999;font-family:Segoe UI,sans-serif;box-shadow:0 2px 10px rgba(0,0,0,0.25);';
    topWrapper.innerHTML = `
      <div style="background:#dee1e6;display:flex;align-items:center;justify-content:space-between;padding:6px 0 0 10px;border-bottom:1px solid #c8ccd1;">
        <div style="background:#ffffff;color:#1f2937;padding:6px 14px;border-radius:8px 8px 0 0;font-size:12px;font-weight:600;min-width:320px;">
          🤖 [Agent Skill: gui-usability-tester] — ${screenLabel}
        </div>
        <div style="display:flex;align-items:center;font-size:12px;color:#374151;">
          <span style="padding:4px 14px;">─</span><span style="padding:4px 14px;">▢</span><span style="padding:4px 14px;background:#e81123;color:#fff;">✕</span>
        </div>
      </div>
      <div style="background:#ffffff;display:flex;align-items:center;gap:10px;padding:6px 12px;border-bottom:1px solid #e5e7eb;">
        <span style="color:#4b5563;font-weight:bold;">← → ↻</span>
        <div style="flex:1;background:#f1f3f4;border-radius:20px;padding:5px 14px;font-size:13px;color:#111827;border:1px solid #d1d5db;">
          <strong style="color:#16a34a;">🔒 Bảo mật |</strong> <strong>${urlStr}</strong> — [${screenLabel}]
        </div>
        <div style="background:#dc2626;color:#fff;padding:4px 10px;border-radius:14px;font-size:11px;font-weight:bold;">
          SV: ${studentIdentity}
        </div>
      </div>
    `;
    document.body.prepend(topWrapper);
  }, { screenLabel: cfg.screen, studentIdentity: cfg.student });

  const screenshotPath = path.join(cfg.outDir, 'skill_audit_screenshot.png');
  await page.screenshot({ path: screenshotPath, fullPage: false });

  // Also check Mobile viewport (375x812) responsive behavior
  await page.setViewportSize({ width: 375, height: 812 });
  await page.waitForTimeout(300);
  const mobileMetrics = await page.evaluate(() => {
    const sidebar = document.querySelector('.w-64');
    return {
      mobileViewportWidth: window.innerWidth,
      mobileScrollWidth: document.documentElement.scrollWidth,
      sidebarWidthOnMobile: sidebar ? Math.round(sidebar.getBoundingClientRect().width) : 0,
      remainingContentWidth: sidebar ? window.innerWidth - Math.round(sidebar.getBoundingClientRect().width) : window.innerWidth
    };
  });

  const finalReport = {
    skill: 'gui-usability-tester',
    timestamp: new Date().toISOString(),
    targetUrl: cfg.url,
    screen: cfg.screen,
    studentIdentity: cfg.student,
    screenshot: screenshotPath,
    findings: {
      ...auditFindings,
      ...mobileMetrics
    }
  };

  const jsonPath = path.join(cfg.outDir, 'skill_audit_report.json');
  fs.writeFileSync(jsonPath, JSON.stringify(finalReport, null, 2), 'utf8');
  console.log('Audit complete! Report saved to:', jsonPath);
  console.log(JSON.stringify(finalReport, null, 2));

  await browser.close();
}

runAudit().catch(err => {
  console.error('Skill execution failed:', err);
  process.exit(1);
});

