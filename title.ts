#!/usr/bin/env deno run --allow-net
// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title title
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "text" }

// Documentation:
// @raycast.author EGOIST
// @raycast.authorURL https://github.com/egoist

import getTitle from "https://cdn.skypack.dev/title"

async function main() {
  const text = Deno.args[0]
  const title = getTitle(text)
  console.log(`${title}`)
}

main().catch((err) => {
  console.error(err.message)
  Deno.exit(1)
})
