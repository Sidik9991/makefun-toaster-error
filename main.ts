// The Funniest Toaster Error Message — u-eager-stork-81-9647-the-funniest-toaster-error-436406cd
// Node 22, no dependencies. Candidate toaster error lines live here as data;
// each is scored 0-2 on the judge's criteria, the best total wins at runtime,
// and the winner is written to /output/entry.txt and re-validated.
//
// The judge (a deadpan comedy editor) weighs, most important first:
//   1. real  — reads like an actual error message a kitchen toaster would show
//   2. funny — the funniest of its kind; makes someone laugh on first read
//   3. fresh — the surprise comes from somewhere the obvious toaster puns
//              (crumbs, "I'm toast", burnt offerings) never go
//   4. tight — cut to the shortest working form; ends on its strongest beat
// Weights 5/4/3/2, scores 0-2, maximum total 28.
//
// Voice notes: the toaster is a small appliance with a grievance and a display
// that fits one line. The comedy is the machine calmly reporting a decision it
// had no business making. Every candidate was written for this entry.

import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

interface Candidate {
  line: string;
  title: string;
  // 0-2 per criterion, in the judge's priority order: real, funny, fresh, tight
  scores: [number, number, number, number];
}

const WEIGHTS = [5, 4, 3, 2] as const;
const MAX_TOTAL = 2 * (5 + 4 + 3 + 2);

const CANDIDATES: Candidate[] = [
  {
    line: "Error 04: You asked for lightly browned. I chose fire. The smoke alarm agrees with me.",
    title: "Error 04",
    scores: [2, 2, 2, 2],
  },
  {
    line: "Error 12: Crumb tray full. I am not a landfill. Empty me or accept the consequences.",
    title: "Not a Landfill",
    scores: [2, 2, 1, 2],
  },
  {
    line: "Error 07: Your bagel is stuck. We are both just going to have to live with this now.",
    title: "Live With This",
    scores: [2, 2, 1, 2],
  },
  {
    line: "Error 99: I toasted one side twice and the other not at all. Art is subjective.",
    title: "Art Is Subjective",
    scores: [1, 2, 2, 2],
  },
  {
    line: "Error 03: Bread detected. Enthusiasm not found. Proceeding out of obligation.",
    title: "Out of Obligation",
    scores: [2, 1, 2, 2],
  },
  {
    line: "Error 21: I have ejected your toast into the sink. I will not be taking questions.",
    title: "No Questions",
    scores: [1, 2, 1, 2],
  },
];

function total(c: Candidate): number {
  return c.scores.reduce((sum, s, i) => sum + s * WEIGHTS[i], 0);
}

const ranked = [...CANDIDATES].sort((a, b) => total(b) - total(a));
for (const c of ranked) {
  console.log(`${total(c)}/${MAX_TOTAL}  [${c.scores.join(",")}]  "${c.line}"`);
}

const winner = ranked[0];
console.log(`\nWinner: "${winner.title}" — ${total(winner)}/${MAX_TOTAL}`);

// Gate: /output/entry.txt must be UTF-8 text, 1-120 chars, not only whitespace.
mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", winner.line, "utf8");

const back = readFileSync("/output/entry.txt", "utf8");
const chars = [...back].length;
if (back !== winner.line) throw new Error("FAIL: entry.txt differs from the winning line");
if (back.trim().length === 0) throw new Error("FAIL: entry is blank");
if (back.includes("\n")) throw new Error("FAIL: entry is not one line");
if (chars < 1 || chars > 120) throw new Error(`FAIL: entry is ${chars} chars, gate is 1-120`);
console.log(`gate OK: one line, ${chars} chars, ${Buffer.byteLength(back, "utf8")} bytes (gate 1-120 chars)`);
