import { html } from 'hono/html'

export const Layout = (props: any) => html`<!DOCTYPE html>
  <html>
    <head>
      <title>試合予想ドットコム | 試合予想してシェアしよう！</title>
      <link rel="stylesheet" href="https://unpkg.com/@picocss/pico@latest/css/pico.min.css" />
    </head>
    <body style="background-color: #EDF2F6; min-height: 100vh">
      <main class="container">${props.children}</main>
    </body>
  </html>`