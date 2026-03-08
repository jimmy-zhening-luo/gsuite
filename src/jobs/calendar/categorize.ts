import {
  getEvents,
  matchEvents,
  setEventColor,
  EventColorFriendly,
} from "./lib";

export function categorizeEvent(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  const events = getEvents(
    CalendarApp.getDefaultCalendar(),
  );

  setEventColor(
    matchEvents(events, eventBuffer),
    EventColorFriendly.Graphite,
  );
  setEventColor(
    matchEvents(events, eventTherapy),
    EventColorFriendly.Peacock,
  );
  setEventColor(
    matchEvents(events, eventDoctor),
    EventColorFriendly.Peacock,
  );
  setEventColor(
    matchEvents(events, eventHaircut),
    EventColorFriendly.Flamingo,
  );
}
