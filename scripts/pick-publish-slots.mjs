#!/usr/bin/env node
/**
 * Picks five distinct random days from the coming seven (starting tomorrow) and
 * gives each a different time from a fixed set. Prints five `publishAt` values,
 * one per line, in date order. The weekly writer assigns them to the five posts
 * in any order.
 *
 * Times are local to the machine that runs the publisher. They sit in a US
 * business-day window when read in US Eastern time only if this machine is
 * there; the spread across days matters more than the hour.
 */
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

const days = Array.from({ length: 7 }, (_, i) => {
  const d = new Date();
  d.setDate(d.getDate() + 1 + i);
  return `${d.getFullYear()}-${pad(d.getMonth() + 1)}-${pad(d.getDate())}`;
});

const chosen = shuffle(days).slice(0, 5).sort();
const times = shuffle(TIMES);
chosen.forEach((day, i) => console.log(`${day}T${times[i]}`));
