import { getLabelThreads } from "./lib/thread";

export function jobMailClean(garbageTag: string) {
  for (const piece of getLabelThreads(garbageTag))
    piece.moveToSpam();
}
