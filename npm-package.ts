#!/usr/bin/env deno run --allow-net

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title npm package
// @raycast.mode compact

// Optional parameters:
// @raycast.icon 🤖
// @raycast.argument1 { "type": "text", "placeholder": "name" }

// Documentation:
// @raycast.author EGOIST
// @raycast.authorURL https://github.com/egoist

async function main() {
  const pkgName = Deno.args[0]
  const res = await fetch(`https://registry.npmjs.org/${pkgName}`)
  if (res.status === 404) {
    console.log(`This package doesn't exist`)
    return
  }
  if (!res.ok) {
    throw new Error(`error: ${res.status}`)
  }
  const data = await res.json()
  console.log(`${data.name}: ${data.description}`)
}

main().catch((err) => {
  console.error(err.message)
  Deno.exit(1)
})
