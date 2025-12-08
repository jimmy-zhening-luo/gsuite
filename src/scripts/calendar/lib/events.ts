export function uuid(event: GoogleAppsScript.Calendar.CalendarEvent) {
  return event.getId() + "#" + (
    event.isAllDayEvent()
      ? "ALL_DAY:" + String(event.getAllDayStartDate().getTime())
      : String(event.getStartTime().getTime())
  );
}

export function upcomingEvents(
  calendar: GoogleAppsScript.Calendar.Calendar,
  lookahead = 7,
) {
  const range = new Date;

  range.setMonth(
    range.getMonth() + lookahead,
  );

  return calendar
    .getEvents(new Date, range)
    .map(
      event => ({
        uuid: uuid(event),
        title: event
          .getTitle()
          .toLocaleLowerCase(),
        event,

      }),
    );
}
