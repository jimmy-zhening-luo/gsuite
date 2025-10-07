import {
  getUpcomingEvent,
  matchEvent,
  setColor,
} from "./lib";

export function setEventColor(
  eventBuffer: string[],
  eventTherapy: string[],
  eventDoctor: string[],
  eventHaircut: string[],
) {
  const events = getUpcomingEvent(
    CalendarApp.getDefaultCalendar(),
  );

  console.log("setEventColor: Begin setting event color");
  setColor(matchEvent(events, eventBuffer), "Graphite");
  setColor(matchEvent(events, eventTherapy), "Peacock");
  setColor(matchEvent(events, eventDoctor), "Peacock");
  setColor(matchEvent(events, eventHaircut), "Flamingo");
  console.log(`setEventColor: Successfully set all event colors`);
}
