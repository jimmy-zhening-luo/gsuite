import { SETTING } from "./setting";

export function loadSetting() {
  function tuples<
    App extends keyof typeof SETTING,
  >(
    app: App,
    setting: ReturnType<typeof PropertiesService["getScriptProperties"]>,
  ): Array<readonly [typeof SETTING[App][number], string]> {
    return SETTING[app]
      .map(
        key => [
          key,
          setting.getProperty(key),
        ] as const,
      )
      .filter(
        (tuple): tuple is readonly [typeof tuple[0], string] => (tuple[1] ?? null) !== null,
      );
  }

  try {
    const setting = PropertiesService.getScriptProperties(),
    mail = tuples("mail", setting),
    calendar = tuples("calendar", setting)
      .map(
        ([category, terms]) => [
          category,
          terms
            .split(";")
            .map(term => term.trim())
            .filter(term => term !== ""),
        ] as const,
      );

    if (
      mail.length < SETTING.mail.length
      || calendar.length < SETTING.calendar.length
    )
      throw ReferenceError("Missing settings");

    return {
      mail: Object.fromEntries(mail) as Record<typeof mail[number][0], string>,
      calendar: Object.fromEntries(calendar) as Record<typeof calendar[number][0], string[]>,
    };
  }
  catch (e) {
    throw Error("Failed to load settings", { cause: e });
  }
}
