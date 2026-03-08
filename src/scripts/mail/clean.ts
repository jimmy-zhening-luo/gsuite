import { getLabelThreads } from "./lib/thread";

export function taskMailClean(garbageTag: string) {
  for (const piece of getLabelThreads(garbageTag))
    piece.moveToSpam();
}
