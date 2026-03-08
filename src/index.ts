import { Setting } from "./setting";
import {
  Mail,
  Calendar,
} from "./scripts";

function run() {
  const {
    mail: {
      labelGmailGarbage,
    },
    calendar: {
      eventBuffer,
      eventTherapy,
      eventDoctor,
      eventHaircut,
    },
  } = Setting();

  Mail.taskMailClean(labelGmailGarbage);
  Calendar.taskCalendarEventColor(
    eventBuffer,
    eventTherapy,
    eventDoctor,
    eventHaircut,
  );
}
