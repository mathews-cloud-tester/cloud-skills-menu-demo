#!/usr/bin/env node

// Tiny greeting CLI used by the cloud-skills menu demo.
const name = process.argv.slice(2).join(" ").trim() || "world";
console.log(`Hello, ${name}!`);
