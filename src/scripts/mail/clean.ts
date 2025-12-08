import { getLabelThreads } from "./lib/thread";

export function taskMailClean(garbageTag: string) {
  const garbage = getLabelThreads(garbageTag);

  console.log(`cleanGarbage: Found ${garbage.length} threads tagged with: ${garbageTag}`);

  for (const piece of garbage)
    piece.moveToSpam();

  console.log("cleanGarbage: Garbage threads marked as spam");
}
