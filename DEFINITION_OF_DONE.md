# ✅ Definition of Done (DoD)

This document defines the criteria that must be met before any issue, feature, or user story is considered complete.

---

## 1. General Code Quality
- [ ] Code compiles and runs without errors or warnings.
- [ ] Code has been peer-reviewed and approved via Pull Request.
- [ ] Code follows consistent formatting and naming conventions.
- [ ] Unit tests are written, pass successfully, and meet coverage requirements.
- [ ] All functions and classes include appropriate inline comments and/or JSDoc documentation.
- [ ] No critical bugs remain unresolved.
- [ ] No unnecessary console logs, commented-out code, or unused imports remain.
- [ ] Documentation (README.md) is updated where applicable.

---

## 2. Version Control & Branching
- [ ] Work is done on a feature or bug-fix branch, following the agreed branching strategy.
- [ ] Code is merged into the main branch through a pull request after review.
- [ ] Commits are descriptive and meaningful.
- [ ] The branch passes automated GitHub Actions checks (if applicable).

---

## 3. Testing
- [ ] Relevant unit tests are created using Mocha (or other chosen framework).
- [ ] All existing and new tests pass successfully.
- [ ] Test coverage is verified (e.g., using `nyc` or similar tool).
- [ ] The test suite runs automatically before each commit/push.

---

## 4. Database & Backend
- [ ] SQL scripts or models are defined to store necessary raw data.
- [ ] Tables include appropriate data types and relationships.
- [ ] Queries use secure practices (e.g., prepared statements, input validation).

---

## 5. Front-End Functionality
- [ ] UI components render and behave as expected.
- [ ] Inputs are validated, and errors handled gracefully.
- [ ] Code integrates correctly with backend data (if applicable).

---

## 6. Documentation & Security
- [ ] Documentation (README, JSDoc, etc.) is updated to reflect new features or changes.
- [ ] Exceptions are properly handled and logged.
- [ ] Security best practices are followed (e.g., no hardcoded credentials, input sanitization).
- [ ] Any potential performance issues are noted or tested (e.g. using tools like `jconsole` or `jrat`).

---

## 7. CI/CD and Automation
- [ ] GitHub Actions or CI workflow successfully runs and passes all build/test steps.
- [ ] Artifacts or reports (test results, documentation) are generated automatically if applicable.

## 8. Acceptance & Review
- [ ] The feature meets the acceptance criteria of the related user story.
- [ ] Peer or mentor review has been completed.
- [ ] The issue is closed in the tracker once verified as done.

---

**Note:** Individual issues may add extra acceptance criteria or specific success conditions in addition to this general DoD.

---

_Last updated: Mon, 27.10.2025_
