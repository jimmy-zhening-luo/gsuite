export function color(
  events: GoogleAppsScript.Calendar.CalendarEvent[],
  color: EventColorFriendly,
) {
  const code = String(color);

  for (const event of events)
    if (event.getColor() !== code)
      event.setColor(code);
}

export enum EventColorFriendly {
  Lavender = 1,
  Sage,
  Grape,
  Flamingo,
  Banana,
  Tangerine,
  Peacock,
  Graphite,
  Blueberry,
  Basil,
  Tomato,
}
