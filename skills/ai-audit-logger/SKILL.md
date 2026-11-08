---
name: ai-audit-logger
description: >-
  Automatically extracts and appends AI session interactions into Prompy_log.md,
  records genuine Test Artifacts into the 5-column FIT@HCMUS [AI-02] ledger in AI_Audit_Report.md,
  and exports the semantic Git commit history into Git_Commit_Log.txt.
  Use this skill after any AI interaction or testing milestone in HW03 to keep all mandatory audit logs synchronized.
---

# AI Audit & Git Commit Logger Skill (`ai-audit-logger`)

This skill automates the mandatory auditing and version-control logging requirements defined in **Section 9 (AI Audit Report)** and **Section 12 (Git Commit Log)** of **HW03 – GUI & Usability Testing (`FIT@HCMUS`)**.

---

## Directory Structure

```text
skills/ai-audit-logger/
├── SKILL.md                       # Instructions for Prompt Log, AI Audit Ledger, and Git Log export
└── scripts/
    └── export_git_log.js          # Exports formatted Git commit history to Git_Commit_Log.txt
```

---

## Step 1: Append Every User Prompt to `Prompy_log.md`

After every prompt interaction, append a new `[Prompt #N]` block to `Prompy_log.md` containing:
- **AI Tool:** Exact model/agent name.
- **User Prompt:** Verbatim user prompt (never paraphrase).
- **Goal & Plan:** Intended testing or documentation objective.
- **Actions Taken:** Tools, scripts, and files modified.
- **AI Output:** Summary of deliverables produced.
- **Bloom-AI Level & Next Steps:** Classification (`G9.3 Analyse` / `G9.4 Collaborate`).

---

## Step 2: Record Genuine Test Artifacts in `AI_Audit_Report.md`

Whenever a concrete **Test Artifact** is generated or updated (e.g., GUI Checklist, Checklist Execution & Bug Reports, Cross-Browser Test Suite, Agent Skill, Usability Scenario/Questionnaire/Analysis), append a row to the 5-column `[AI-02]` table in `AI_Audit_Report.md`:

```markdown
| (1) Prompt + Công cụ | (2) Output AI | (3) Verdict | (4) Lý do (ISTQB / Tiêu chuẩn GUI) | (5) Bản SV sửa (Human Review & Changes) |
```

---

## Step 3: Export Submission-Ready `Git_Commit_Log.txt`

After creating a semantic Git commit for the current step of the testing procedure, run [export_git_log.js](./scripts/export_git_log.js) to synchronize `Git_Commit_Log.txt`:

```powershell
node skills/ai-audit-logger/scripts/export_git_log.js
```

