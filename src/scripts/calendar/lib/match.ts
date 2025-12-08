interface UniqueEvent {
  uuid: string;
  title: string;
  event: GoogleAppsScript.Calendar.CalendarEvent;
}

export function matchEvent(
  events: UniqueEvent[],
  terms: string[],
) {
  return Array.from(
    new Map(
      terms
        .map(term => term.toLocaleLowerCase())
        .flatMap(
          term => events.filter(
            ({ title }) => title.includes(term),
          ),
        )
        .map(({ uuid, event }) => [uuid, event] as const),
    )
      .values(),
  );
}
