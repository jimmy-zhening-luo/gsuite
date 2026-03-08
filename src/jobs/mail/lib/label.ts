export function getLabel(label: string) {
  return GmailApp
    .getUserLabelByName(label)
    .getThreads();
}
