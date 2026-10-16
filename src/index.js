#!/usr/bin/env node

// Tiny greeting CLI used by the cloud-skills menu demo.
const args = process.argv.slice(2);
const shout = args.includes("--shout");
const nameParts = args.filter((a) => a !== "--shout");
const name = nameParts.join(" ").trim() || "world";
const greeting = `Hello, ${name}!`;
console.log(shout ? greeting.toUpperCase() : greeting);
