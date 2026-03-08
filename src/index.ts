import { Setting } from "./deps/setting";
import {
  Mail,
  Calendar,
} from "./scripts";

function script() {
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
