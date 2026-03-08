import {
  upcomingEvents,
  matchEvent,
  color,
  EventColorFriendly,
} from "./lib";

export function jobCalendarEventColor(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  const events = upcomingEvents(
    CalendarApp.getDefaultCalendar(),
  );

  console.log("setEventColor: Begin setting event color");
  color(matchEvent(events, eventBuffer), EventColorFriendly.Graphite);
  color(matchEvent(events, eventTherapy), EventColorFriendly.Peacock);
  color(matchEvent(events, eventDoctor), EventColorFriendly.Peacock);
  color(matchEvent(events, eventHaircut), EventColorFriendly.Flamingo);
  console.log(`setEventColor: Successfully set all event colors`);
}
