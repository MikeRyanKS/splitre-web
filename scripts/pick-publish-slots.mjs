#!/usr/bin/env node
/**
 * Picks five distinct random days from the next seven days that have no queued post (starting tomorrow) and
 * gives each a different time from a fixed set. Prints five `publishAt` values,
 * one per line, in date order. The weekly writer assigns them to the five posts
 * in any order.
 *
 * Times are local to the machine that runs the publisher. They sit in a US
 * business-day window when read in US Eastern time only if this machine is
 * there; the spread across days matters more than the hour.
 */
import fs from "node:fs";
import path from "node:path";

const TIMES = ["08:10", "10:35", "12:50", "14:25", "16:40"];
const pad = (n) => String(n).padStart(2, "0");
const shuffle = (a) => {
  const b = [...a];
  for (let i = b.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [b[i], b[j]] = [b[j], b[i]];
  }
  return b;
};

// Days that already have a queued post are skipped, so a new batch never
// lands on the same day as one that is still waiting to publish.
const queueDir = path.join(import.meta.dirname, "..", "content", "blog-queue");
const taken = new Set(
  fs.existsSync(queueDir)
    ? fs
        .readdirSync(queueDir)
        .filter((f) => f.endsWith(".mdx"))
        .map((f) => fs.readFileSync(path.join(queueDir, f), "utf8").match(/^publishAt:\s*"(\d{4}-\d{2}-\d{2})/m)?.[1])
        .filter(Boolean)
    : [],
);

const days = [];
for (let i = 1; days.length < 7 && i <= 30; i += 1) {
  const d = new Date();
  d.setDate(d.getDate() + i);
  const day = `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
  if (!taken.has(day)) days.push(day);
}

const chosen = shuffle(days).slice(0, 5).sort();
const times = shuffle(TIMES);
chosen.forEach((day, i) => console.log(`${day}T${times[i]}`));
