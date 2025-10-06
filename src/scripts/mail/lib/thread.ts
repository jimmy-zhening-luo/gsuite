export function getThreads(label = "") {
  try {
    if (label === "")
      throw ReferenceError(
        "No email label provided",
        { cause: { label } },
      );

    return GmailApp
      .getUserLabelByName(label)
      .getThreads();
  }
  catch (e) {
    throw Error(
      "Failed to get email threads for label: "
        .concat(label),
      { cause: e },
    );
  }
}
