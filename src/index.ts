import { Setting } from "./deps/setting";
import {
  Mail,
  Calendar,
} from "./scripts";

function script() {
  const {
    mail,
    calendar,
  } = Setting();

  console.log("Script: Start");
  Mail.taskMailClean(mail.labelGmailGarbage);
  Calendar.taskCalendarEventColor(
    calendar.eventBuffer,
    calendar.eventTherapy,
    calendar.eventDoctor,
    calendar.eventHaircut,
  );
  console.log("Script: Complete");
}
