# the-gifted-village-pw

This is a [Next.js](https://nextjs.org) project bootstrapped with [v0](https://v0.app).

## Built with v0

This repository is linked to a [v0](https://v0.app) project. You can continue developing by visiting the link below -- start new chats to make changes, and v0 will push commits directly to this repo. Every merge to `main` will automatically deploy.

[Continue working on v0 →](https://v0.app/chat/projects/prj_otMPli8afFlDutYEbGrAO4sUJHQs)

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

## Deploying to GoDaddy Node.js Hosting

The `main` branch already auto-deploys to Vercel (see above) — this section is only
needed if you're additionally self-hosting on GoDaddy's cPanel "Setup Node.js App"
(Phusion Passenger), which can't run `next start` directly.

1. In cPanel → **Setup Node.js App**, create/edit the app:
   - **Node.js version**: 20.9 or newer (22.x is fine — see `engines` in `package.json`)
   - **Application root**: the folder you deployed this repo into
   - **Application URL**: your domain/subdomain
   - **Application startup file**: `server.js`
2. Click **Run NPM Install** (installs `node_modules` from `package.json`).
3. Open the app's **terminal** (or SSH in) and run a production build — cPanel's
   installer does not do this for you:
   ```bash
   npm run build
   ```
4. Restart the app from the cPanel Node.js App page.

Re-run steps 2–4 after every deploy (new commits, dependency changes, etc.).
`server.js` wraps Next's request handler in a plain `http` server listening on
`process.env.PORT`, which is what Passenger requires — it isn't used by Vercel.

## Learn More

To learn more, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.
- [v0 Documentation](https://v0.app/docs) - learn about v0 and how to use it.
