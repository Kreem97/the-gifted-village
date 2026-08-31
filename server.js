// Custom Node server for hosts that need a plain startup file to run
// (e.g. GoDaddy's cPanel "Setup Node.js App", which runs on Phusion
// Passenger). Passenger sets process.env.PORT and expects the app to
// listen on it — `next start` alone doesn't work as a Passenger startup
// file, so this wraps Next's request handler in a plain http server.
//
// Not used on Vercel — Vercel builds/runs Next.js directly and ignores
// this file.
const { createServer } = require('http')
const next = require('next')

const port = process.env.PORT || 3000
const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app
  .prepare()
  .then(() => {
    createServer((req, res) => {
      handle(req, res)
    }).listen(port, () => {
      console.log(`> Ready on port ${port}`)
    })
  })
  .catch((err) => {
    console.error('Failed to start server:', err)
    process.exit(1)
  })
