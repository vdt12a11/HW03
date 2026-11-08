#!/usr/bin/env node
/**
 * Standard 10-Item System Usability Scale (SUS) Calculator (calculate_sus.js)
 * Part of the `gui-usability-tester` Agent Skill for HW03 (CS423 / CSC13003).
 *
 * Computes individual SUS scores (0-100), Mean, Standard Deviation,
 * Adjective Rating (Bangor et al.), and generates a Markdown summary table.
 *
 * Usage:
 *   node skills/gui-usability-tester/scripts/calculate_sus.js [path/to/responses.json]
 *   node skills/gui-usability-tester/scripts/calculate_sus.js --self-test
 */

const fs = require('fs');

function computeSingleSUS(answers) {
  if (!Array.isArray(answers) || answers.length !== 10) {
    throw new Error('Each participant must have exactly 10 Likert responses (1 to 5).');
  }
  let sum = 0;
  for (let i = 0; i < 10; i++) {
    const val = Number(answers[i]);
    if (val < 1 || val > 5) throw new Error(`Invalid Likert value ${val} at Q${i + 1}`);
    // Odd questions (Q1, Q3, Q5, Q7, Q9 -> indices 0,2,4,6,8): score = val - 1
    // Even questions (Q2, Q4, Q6, Q8, Q10 -> indices 1,3,5,7,9): score = 5 - val
    sum += (i % 2 === 0) ? (val - 1) : (5 - val);
  }
  return sum * 2.5;
}

function getAdjectiveRating(score) {
  if (score >= 85) return 'Excellent (Xuất sắc - Grade A)';
  if (score >= 72.5) return 'Good (Tốt - Grade B)';
  if (score >= 68) return 'Acceptable / Above Average (Đạt chuẩn - Grade C)';
  if (score >= 51) return 'Marginal / OK (Cần cải thiện - Grade D)';
  return 'Poor / Unacceptable (Kém - Grade F)';
}

function evaluateDataset(participants) {
  const rows = participants.map((p, idx) => {
    const score = computeSingleSUS(p.answers);
    return {
      id: p.id || `P${idx + 1}`,
      name: p.name || `Participant ${idx + 1}`,
      answers: p.answers,
      susScore: Number(score.toFixed(2)),
      rating: getAdjectiveRating(score)
    };
  });

  const mean = rows.reduce((acc, r) => acc + r.susScore, 0) / rows.length;
  const variance = rows.reduce((acc, r) => acc + Math.pow(r.susScore - mean, 2), 0) / rows.length;
  const sd = Math.sqrt(variance);

  console.log('| Mã | Người tham gia | Q1 | Q2 | Q3 | Q4 | Q5 | Q6 | Q7 | Q8 | Q9 | Q10 | Điểm SUS (0-100) | Xếp loại (Bangor et al.) |');
  console.log('|:--:|:---|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:--:|:---:|:---|');
  for (const r of rows) {
    console.log(`| **${r.id}** | ${r.name} | ${r.answers.join(' | ')} | **${r.susScore.toFixed(1)}** | ${r.rating} |`);
  }
  console.log(`\n- **Điểm SUS Trung bình (Mean):** **${mean.toFixed(2)} / 100** (${getAdjectiveRating(mean)})`);
  console.log(`- **Độ lệch chuẩn (SD):** **${sd.toFixed(2)}**`);
}

if (process.argv.includes('--self-test')) {
  console.log('Running SUS Calculator Formula Verification (--self-test)...');
  const sample = [
    { id: 'TEST-MAX', name: 'All Best Responses (5,1,5,1...)', answers: [5, 1, 5, 1, 5, 1, 5, 1, 5, 1] },
    { id: 'TEST-MID', name: 'All Neutral Responses (3,3,3...)', answers: [3, 3, 3, 3, 3, 3, 3, 3, 3, 3] },
    { id: 'TEST-MIN', name: 'All Worst Responses (1,5,1,5...)', answers: [1, 5, 1, 5, 1, 5, 1, 5, 1, 5] }
  ];
  evaluateDataset(sample);
} else if (process.argv[2]) {
  const data = JSON.parse(fs.readFileSync(process.argv[2], 'utf8'));
  evaluateDataset(data);
} else {
  console.log('Usage: node calculate_sus.js <responses.json> | --self-test');
}
