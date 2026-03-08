export function getEvents(
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
      event => (
        {
          uuid: event.getId()
            + "#"
            + (
              event.isAllDayEvent()
                ? "ALL_DAY:"
                  + String(
                    event
                      .getAllDayStartDate()
                      .getTime()
                  )
                : String(
                  event
                    .getStartTime()
                    .getTime()
                )
            ),
          title: event
            .getTitle()
            .toLocaleLowerCase(),
          event,
        }
      ),
    );
}
