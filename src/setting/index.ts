import { SETTINGS } from "./settings";

export function Setting() {
  const {
    Mail,
    Calendar,
  } = SETTINGS,
  store = PropertiesService
    .getScriptProperties()
    .getProperties();

  for (const setting in Mail)
    if (!(setting in store))
      throw ReferenceError(`Missing setting: ${setting}`);

  function getSettingRecords<K extends string>(keys: readonly K[]): ([K, string])[] {
    return keys.map(
      key => [
        key,
        store[key]!,
      ],
    );
  }

  function getSettings<Records>(records: Records): Records extends readonly [infer K, infer V][] ? K extends string ? Record<K, V> : never : never {
    return Object.fromEntries(records);
  }

  return {
    mail: Object.fromEntries(getSettingRecords(Mail)) as Record<typeof mailSetting[number][0], string>,
    calendar: Object.fromEntries(
      getSettingRecords(Calendar).map(
        ([category, terms]) => [
          category,
          terms
            .split(";")
            .map(term => term.trim())
            .filter(term => term),
        ] as const,
      ),
    ) as Record<typeof calendarSetting[number][0], string[]>,
  };
}
