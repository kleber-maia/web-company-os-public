# BobbyOS website

The public website for BobbyOS: a self-hosted company operating system with Bobby, a private AI agent, embedded inside. It is a pure client-side React site compiled by Vite into static HTML, CSS, and JavaScript for GitHub Pages.

## Repository workflow

Work directly on `master`. This repository does not use feature branches or pull requests for website changes.

Before editing:

```bash
git switch master
git pull --ff-only origin master
```

After editing:

```bash
npm test
git add <changed-files>
git commit -m "Describe the change"
git push origin master
```

Pushing another branch does not update the public site.

## Local development

Requires Node.js 22 or newer.

```bash
npm install
npm run dev
```

Vite prints local and network addresses. Share the LAN `Network` address for review, never the `localhost` address. The development server must remain running while that preview is in use.

## Production build

```bash
npm test
```

The deployable site is written to `dist/`. The build also copies the `CNAME` and `distribution/` release files and creates `.nojekyll` for GitHub Pages. Production is fully static and does not require a persistent server.

## Production deployment

The canonical website is [https://companyos.soft.group](https://companyos.soft.group).

The workflow in `.github/workflows/pages.yml` builds and publishes `dist/` after every push to `master`. Repository Pages settings must use **GitHub Actions** as the source.

After pushing, wait for the **Deploy GitHub Pages** workflow to succeed and verify the canonical URL serves the new content. A successful Git push alone does not mean the public page has finished deploying.

## Copy conventions

- BobbyOS is the self-hosted company operating system.
- Bobby is the private AI agent embedded inside BobbyOS.
- BobbyOS is adaptable rather than a fixed software suite.
- Listed modules are examples. Each company can create and extend its own modules, workflows, and capabilities.
- Marketing changes must remain aligned across English, Brazilian Portuguese, Latin American Spanish, and the default page metadata.
