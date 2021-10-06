#!/usr/bin/env deno run --allow-net

// Required parameters:
// @raycast.schemaVersion 1
// @raycast.title Crypto Fear & Greed Index
// @raycast.mode compact
// @raycast.refreshTime 1h

// Optional parameters:
// @raycast.icon 🤑

// Documentation:
// @raycast.author EGOIST
// @raycast.authorURL https://github.com/egoist

async function main() {
  const json = await fetch(`https://api.alternative.me/fng/?limit=1`).then(
    (res) => res.json()
  )
  const item = json.data[0]
  console.log(`${item.value_classification}: ${item.value}`)
}

main().catch((err) => {
  console.error(err.message)
  Deno.exit(1)
})
