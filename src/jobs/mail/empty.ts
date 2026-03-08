import { getLabel } from "./lib";

export function emptyGarbage(label: string) {
  for (const piece of getLabel(label))
    piece.moveToSpam();
}
