export function getLabelThreads(label: string) {
  return GmailApp
    .getUserLabelByName(label)
    .getThreads();
}
