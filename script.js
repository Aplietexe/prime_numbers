// @ts-check

import primes from "./primes.js"

const createTable = () => {
  const page = document.createElement("div")
  page.classList.add("page")
  document.body.appendChild(page)

  const table = document.createElement("div")
  table.classList.add("table")

  page.appendChild(table)

  return table
}

const main = () => {
  let table
  let registeredGaps = []

  primes.slice(0, -1).forEach((prime, i) => {
    if (i % 680 === 0) table = createTable()

    const p = document.createElement("div")
    p.classList.add("prime")
    p.textContent = prime.toString()

    const gap = document.createElement("div")
    gap.classList.add("gap")

    const amount = primes[i + 1] - prime
    gap.textContent = amount.toString()

    if (!registeredGaps.includes(amount)) {
      gap.classList.add("max")
      registeredGaps.push(amount)
    }

    const entry = document.createElement("div")
    entry.classList.add("entry")
    entry.append(p, gap)

    table?.appendChild(entry)
  })
}

document.addEventListener("DOMContentLoaded", main)
