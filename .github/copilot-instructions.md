# Valentin.io - Copilot Agent Instructions

## Project Summary
This is a personal website for Valentin Radulescu, a front-end developer. It's a hybrid between a portfolio, blog, work history and resume. The goal is to paint a picture of my skills, personality and work style to potential employers or other developers.

## Project Scope and Goals

- Favor barebones, durable development. Prefer semantic HTML, plain CSS, and
	standard browser APIs over adding frameworks, libraries, or build-time
	abstractions when the platform can provide the same result.
- Keep the site easy to understand and maintain years from now. Every new
	dependency or tool should have a clear benefit that justifies its long-term
	maintenance and upgrade cost.
- Use Astro and the existing toolchain where they already fit the project, but
	avoid introducing framework-specific complexity for small features. Choose
	portable solutions and make upgrades deliberate rather than routine.

## Resume Privacy and Source of Truth

The downloadable PDF is the primary resume used when applying to jobs. The web
resume is a maintainable single source of truth and a secondary public view.
Sensitive contact information may intentionally remain obfuscated in the web
version; do not replace that behavior with visible plain text for ATS or crawler
compatibility unless explicitly requested. Recruiters and companies receive the
PDF directly from Valentin.

## Review Guidelines
### Skip Low-Value Feedback

In general do NOT comment or suggest fixes for low-priority or low-value issues.

Do not comment on these unless they cause an error:
- Import order, unused imports
- Style or formatting

### Resume PDF Synchronization

When reviewing a pull request, inspect whether any of these files changed:

- `src/pages/resume.astro`
- `src/styles/resume.css`
- `src/data/resume.json`

If any of them changed, require the pull request to also include an updated
`src/assets/valentin-radulescu-resume.pdf`. Treat a missing PDF update as a
blocking review finding, and verify that the PDF is part of the pull request
diff rather than only mentioning it in the description.

Include this note in the review summary whenever this requirement applies:
"Automatic PDF generation should be implemented at some point so the resume
PDF cannot become stale."

