---
name: gui-usability-tester
description: >-
  Automates GUI Checklist generation (>40 items across IA-01 to IA-04 + WCAG/Responsive Human Review),
  live cross-browser & cross-platform GUI execution (Chrome, Firefox, Safari/WebKit, Android Chrome Mobile)
  with full-browser watermarked screenshots, and Usability Evaluation (Task Scenario, SUS Calculator, Probe Questions).
  Use this skill whenever the user asks to design or execute GUI checklists, test a new screen/flow on EShop SUT,
  run cross-browser verification, or prepare/score a 7-participant Usability Evaluation.
---

# GUI & Usability Testing Skill (`gui-usability-tester`)

This skill codifies the complete **AI-First + Human Review** workflow for **GUI & Usability Testing (CS423 / CSC13003)** on the EShop System Under Test (SUT) or any web/mobile application. It can be reused on any screen (`Pool A`, `Pool B`, `Pool C`, `Pool D`) or end-to-end user flow.

---

## Directory Structure

```text
skills/gui-usability-tester/
├── SKILL.md                              # Main runbook and multi-step instructions
├── scripts/
│   ├── audit_screen_cli.js               # Automated DOM, Accessibility, Responsive & Cross-Browser auditor
│   └── calculate_sus.js                  # Standard 10-item SUS Score Calculator for 7 participants
└── resources/
    ├── checklist_template.md             # 4-aspect (IA-01..IA-04) + Human Review GUI Checklist template
    └── usability_sus_template.md         # Goal-oriented Task Scenario, SUS & Probe Questions template
```

---

## Workflow 1: Design a GUI Checklist (>40 Items + Human Review)

When the user selects one or more screens (`FR-01` → `FR-19`), follow these steps:

1. **Inspect the Target Screen Source & Live DOM:**
   - Read the React/HTML source component for the selected `FR` screens and inspect all headings (`<h1>`–`<h3>`), `<form>`, `<input>`, `<select>`, `<button>`, `<table>`, and API handlers.
2. **Generate $\ge 40$ Baseline Checklist Items Across All 4 Interface Aspects:**
   - Use the structure in [checklist_template.md](./resources/checklist_template.md):
     - **`IA-01` (General UI Standards):** Layout alignment, typography hierarchy, currency formatting (`.toLocaleString()` + `₫`), button color consistency (`FR-21`: Primary Blue, Edit Yellow, Delete Red), Vietnamese localization (`FR-21`).
     - **`IA-02` (Forms):** Input types (`email`, `number`, `date`, `file`), required field validation, boundary checks (negative price/stock, $>100\%$ discount, past dates), duplicate constraint handling.
     - **`IA-03` (Navigation):** Keyboard `Tab` order, active menu highlighting, Edit $\rightarrow$ Cancel state transitions, pagination/scroll handling, logout protection.
     - **`IA-04` (Feedback / State):** Loading indicators, accurate KPI calculations, confirmation modals (`window.confirm`) before deletion, atomic transaction rollback on batch/CSV operations, inline Vietnamese error messages above Submit (`FR-22`) instead of raw SQL/system alerts.
3. **Apply Mandatory Human Review Augmentation (`CHK-HUM-*`):**
   - Always check and append items that LLM baseline prompts typically miss:
     - **WCAG 2.1 AA Contrast Ratio:** Text vs. background contrast $\ge 4.5:1$ (e.g., flag white text on yellow button `#FFFFFF` / `#EAB308` = `2.15:1`).
     - **Screen Reader Accessibility:** Explicit `<label for="...">` or `aria-label` on every `<input>` and `<select>`, especially inputs pre-filled with default numbers (`0`, `1`) where placeholders disappear.
     - **Mobile Responsive Viewport (`375×812` / `412×915`):** Check if fixed sidebars (`w-64`) or multi-column grids (`grid-cols-3`) crush the main content or cause horizontal table overflow (`overflow-x-auto`).
     - **Micro-interactions & State Integrity:** Rapid double-click protection (`disabled={loading}`) and list state preservation when editing a single item.

---

## Workflow 2: Execute Automated GUI & Cross-Browser Audit

To execute the checklist against a live screen and capture **full-browser window screenshots** with the student's Anti-AI-Cheat identity (`MSSV - Full Name - Email`):

1. **Run the Automated Screen Auditor Script:**
   Execute [audit_screen_cli.js](./scripts/audit_screen_cli.js):
   ```powershell
   node skills/gui-usability-tester/scripts/audit_screen_cli.js --url "http://localhost:5174" --screen "FR-18: Orders" --student "23120397 - VĂN ĐỨC TUẤN - 23120397@student.hcmus.edu.vn"
   ```
2. **Verify Output Artifacts:**
   - Confirm that the JSON audit report lists DOM metrics (`hasH1`, `unlabeledInputs`, `lowContrastButtons`, `desktopOverflow`, `mobileOverflow`) across **Chrome (Blink)**, **Firefox (Gecko)**, **Safari (WebKit)**, and **Android Chrome Mobile**.
   - Inspect generated screenshots using `read_file` to verify that the **entire browser window** (tabs, window controls, `localhost` URL bar, OS taskbar/status bar, and student identity inside form inputs) is clearly visible.

---

## Workflow 3: Plan & Score a 7-Participant Usability Evaluation (Task 2)

1. **Generate the Session Package:**
   - Use [usability_sus_template.md](./resources/usability_sus_template.md) to produce:
     - **Goal-Oriented Task Scenario** (gives participants a realistic shopping/admin goal without step-by-step instructions).
     - **10-Item System Usability Scale (SUS)** in Vietnamese (Likert 1–5).
     - **4 Post-Session Probe Questions** covering *Clarity*, *Error Recovery*, *Speed*, and *Trust*.
2. **Calculate SUS Scores from Real Participant Data:**
   - Never fabricate participant data (Anti-AI-Cheat rule). Once the student provides the 7 real participants' responses, run [calculate_sus.js](./scripts/calculate_sus.js):
     ```powershell
     node skills/gui-usability-tester/scripts/calculate_sus.js --input usability_responses.json
     ```
   - Formula verified by the script:
     $$\text{SUS Score} = \left( \sum_{i \in \{1,3,5,7,9\}} (R_i - 1) + \sum_{j \in \{2,4,6,8,10\}} (5 - R_j) \right) \times 2.5$$
