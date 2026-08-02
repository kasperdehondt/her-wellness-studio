# Her Wellness Studio

## Hosting, HTTPS, and domain

- GitHub already provides your hosting and HTTPS certificate
- Domain is registered on combell.com with Steph's credentials

## Resources

- https://docs.github.com/en/pages/configuring-a-custom-domain-for-your-github-pages-site/managing-a-custom-domain-for-your-github-pages-site

## For Stephanie; Lovable usage

For live preview in the browser prompt the AI to change the base-url to `/` temporarily. Then, before publishing, revert back to `/her-wellness-studio/` for GitHub Pages hosting.
^ Ignore? Implicitly fixed by changing the base-url back to `/` in `vite.config.ts` and using a custom domain?
## TODO

- [~] Fix GitHub auth so I can pull/push (Windows Credentials Manager?) -> ran `git push` from CLI on Laptop, switching to Desktop for the time being
- [/] Working over/About page
- [/] Move GH Repo to Personal acc for Steph so that she can access/modify easily (or at least share the repo)
- [x] kdhndt collaborator access
- [x] Create domain
- [ ] Obfuscate/renew credentials (leaked via Outlook -> Personal GMail) + remove `.env` from tracked Git files
- [ ] Find way for Steph to edit/push from Lovable w/o the need for an IDE or dev tools
- [ ] Fix pushing via IJ UI, currently only CLI works

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