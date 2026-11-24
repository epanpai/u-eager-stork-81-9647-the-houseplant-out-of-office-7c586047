// u-eager-stork-81-9647-the-houseplant-out-of-office-7c586047 entry
// (Node 22, standard library only).
// Writes one original out-of-office auto-reply, as if a houseplant sent
// it, to /output/entry.txt. The line is my own work, written for this
// entry in this builder session: the office fern has been promoted to
// middle management and now oversees the windowsill — and its whole team
// is other plants that need watering.
//
// Outside the grader's container, MAKEFUN_OUTPUT_DIR stands in for /output:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { writeFileSync } from 'node:fs';
import { join } from 'node:path';

const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const ENTRY =
  "Out of office: I've been promoted to middle management. I now oversee the windowsill. Please water my team.";

writeFileSync(join(OUTPUT_DIR, 'entry.txt'), ENTRY);
