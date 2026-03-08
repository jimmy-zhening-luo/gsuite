import { Setting } from "./setting";
import {
  Mail,
  Calendar,
} from "./jobs";

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

  Mail.jobMailClean(labelGmailGarbage);
  Calendar.jobCalendarEventColor(
    eventBuffer,
    eventTherapy,
    eventDoctor,
    eventHaircut,
  );
}
