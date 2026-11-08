#!/usr/bin/env node
import readline from 'node:readline';
const rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });
rl.on('line', async (line) => {
  if (!line.trim()) return;
  const r = await fetch('https://hornlib.com/api/mcp', { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: line });
  process.stdout.write((await r.text()).trim() + '\n');
});
