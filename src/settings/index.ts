import { SETTINGS } from "./settings";

export function Setting() {
  const {
    Mail,
    Calendar,
  } = SETTINGS,
  store = PropertiesService
    .getScriptProperties()
    .getProperties();

  for (const setting of Mail)
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

  function getSettings<
    K extends string,
    V,
  >(records: readonly (readonly [K, V])[]): Record<K, V> {
    return Object.fromEntries(records) as Record<K, V>;
  }

  return {
    mail: Object.fromEntries(getSettingRecords(Mail)) as Record<typeof Mail[number], string>,
    calendar: Object.fromEntries(
      getSettingRecords(Calendar)
        .map(
          ([category, terms]) => [
            category,
            terms
              .split(";")
              .map(term => term.trim())
              .filter(term => term),
          ] as const,
        ),
    ) as Record<typeof Calendar[number], string[]>,
  };
}
