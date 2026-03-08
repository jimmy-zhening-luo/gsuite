import { getLabelThreads } from "./lib/thread";

export function emptyGarbage(garbageTag: string) {
  for (const piece of getLabelThreads(garbageTag))
    piece.moveToSpam();
}
