# Her Wellness Studio

## For Stephanie; Lovable usage

For live preview in the browser prompt the AI to change the base-url to `/` temporarily. Then, before publishing, revert back to `/her-wellness-studio/` for GitHub Pages hosting.

## TODO

- [~] Fix GitHub auth so I can pull/push (Windows Credentials Manager?) -> ran `git push` from CLI on Laptop, switching to Desktop for the time being
- [x] kdhndt collaborator access
- [/] Working over/About page
- [ ] Is Lovable synced to GitHub repo paid? So that she can modify herself? If so, how expensive? Are there other alternatives?
- [ ] Obfuscate/renew credentials (leaked via Outlook -> Personal GMail) + remove `.env` from tracked Git files
- [ ] Fix pushing via IJ UI, currently only CLI works
- [/] Move GH Repo to Personal acc for Steph so that she can access/modify easily (or at least share the repo)

## Email setup

Create a `.env` file in the project root and add:

```env
VITE_WEB3FORMS_ACCESS_KEY=your_web3forms_access_key
```

The contact form submits to Web3Forms from the frontend.

## Setup

- npm i
- npm run dev

stack: React
mailing: https://web3forms.com/
host: try GitHub Pages (free), otherwise Netlify

## TIL

- hot reload only reads from src folder
- app requires startup for `.env` changes to take place
- web3forms emails end up in the mailbox the API key was registered under

## Codex

- install npm / node js
- npm i -g @openai/codex
- link via ChatGPT acc login