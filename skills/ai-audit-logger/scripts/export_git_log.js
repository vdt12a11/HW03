#!/usr/bin/env node
/**
 * Git Commit Log Exporter (export_git_log.js)
 * Part of the `ai-audit-logger` Agent Skill for HW03 (Section 12 - Git Commit Log).
 *
 * Extracts the semantic Git commit history of the HW03 repository into a clean,
 * human-readable text file (`Git_Commit_Log.txt`) for Moodle submission.
 */

const { execSync } = require('child_process');
const fs = require('fs');
const path = require('path');

const repoRoot = path.resolve(__dirname, '..', '..', '..');
const outPath = path.join(repoRoot, 'Git_Commit_Log.txt');

try {
  const logSummary = execSync(
    'git log --date=iso --pretty=format:"======================================================================%nCommit Hash : %H%nAuthor      : %an <%ae>%nDate        : %ad%nSubject     : %s%n" --stat',
    { cwd: repoRoot, encoding: 'utf8' }
  );

  const header = [
    '======================================================================',
    'GIT COMMIT LOG — HW03: GUI & USABILITY TESTING (FIT@HCMUS 2026)',
    'Student: VĂN ĐỨC TUẤN | MSSV: 23120397 | Email: 23120397@student.hcmus.edu.vn',
    'Repository: https://github.com/vdt12a11/HW03',
    `Generated At: ${new Date().toISOString()}`,
    '======================================================================\n\n'
  ].join('\n');

  fs.writeFileSync(outPath, header + logSummary + '\n', 'utf8');
  console.log('Successfully exported Git_Commit_Log.txt ->', outPath);
} catch (err) {
  console.error('Failed to export Git commit log:', err.message);
  process.exit(1);
}

