import {
  getEvents,
  filterEvents,
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
    filterEvents(events, eventBuffer),
    EventColorFriendly.Graphite,
  );
  setEventColor(
    filterEvents(events, eventTherapy),
    EventColorFriendly.Peacock,
  );
  setEventColor(
    filterEvents(events, eventDoctor),
    EventColorFriendly.Peacock,
  );
  setEventColor(
    filterEvents(events, eventHaircut),
    EventColorFriendly.Flamingo,
  );
}
