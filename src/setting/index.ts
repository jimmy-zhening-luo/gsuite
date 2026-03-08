import { SETTINGS } from "./settings";

export function Setting() {
  const { mail, calendar } = SETTINGS,
  store = PropertiesService
    .getScriptProperties()
    .getProperties(),
  deindex = <K extends string>(keys: readonly K[]): ([K, string])[] => keys
    .filter(key => key in store)
    .map(key => [key, store[key]!]),
  mailSetting = deindex(mail),
  calendarSetting = deindex(calendar)
    .map(
      ([category, terms]) => [
        category,
        terms
          .split(";")
          .map(term => term.trim())
          .filter(term => term),
      ] as const,
    );

  if (
    mailSetting.length < mail.length
    || calendarSetting.length < calendar.length
  )
    throw ReferenceError("Missing settings");

  return {
    mail: Object.fromEntries(mailSetting) as Record<typeof mailSetting[number][0], string>,
    calendar: Object.fromEntries(calendarSetting) as Record<typeof calendarSetting[number][0], string[]>,
  };
}
