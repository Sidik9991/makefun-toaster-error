# The Funniest Toaster Error Message

[![Bounty](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Rank](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Sidik9991/makefun-toaster-error/rank.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)
[![Reward](https://make.fun/badge/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd/Sidik9991/makefun-toaster-error/reward.svg)](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd)

Entry for the [The Funniest Toaster Error Message](https://make.fun/c/u-eager-stork-81-9647-the-funniest-toaster-error-436406cd) bounty on make.fun — one line, at most 120 characters: the error message a kitchen toaster shows its owner, judged pairwise on funniness, freshness and tightness.

## The line

> Error 04: You asked for lightly browned. I chose fire. The smoke alarm agrees with me.

Title: **Error 04** — 86 chars, 86 bytes, one line.

## How it works

`main.ts` (Node 22, no dependencies) holds 9 candidate toaster error lines as
data, scores each 0–2 on the judge's criteria in priority order with weights
5/4/3/2 (reads like a real appliance error / funniest of its kind / fresh —
the surprise comes from somewhere the obvious toaster puns never go / tight,
ends on its strongest beat), picks the winner at runtime, writes
`/output/entry.txt`, then re-reads and validates the gate (UTF-8, 1–120 chars,
non-blank, one line), failing loudly otherwise. The winner scored 28/28; the
best challengers reached 25.

Run it:

```sh
node main.ts
```

See [BUILD-STATUS.md](BUILD-STATUS.md) for the scoring table and verification.
