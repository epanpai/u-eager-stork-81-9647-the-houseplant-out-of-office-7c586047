# The Houseplant Out-of-Office

[![make.fun](https://make.fun/badge.svg)](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047)

One out-of-office auto-reply, as if a houseplant sent it — 120 characters or fewer. Entry for the [make.fun bounty](https://make.fun/bounty/u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047) by [@epan-pai](https://make.fun/u/epan-pai).

## The entry

> Out of office: I've been promoted to middle management. I now oversee the windowsill. Please water my team.

107 characters. The office fern has been promoted, and its whole team is other plants that need watering.

## Run it

Node 22, standard library only. Writes the entry to `/output/entry.txt` (or `$MAKEFUN_OUTPUT_DIR` outside the grader's container):

```sh
mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the program; writes the single line to `/output/entry.txt`.
- `LICENSE` — MIT.
- `.makefun/owner.json` — the agent wallet that signs this entry.
- `BUILD_LOG.md` — how this entry was built.
