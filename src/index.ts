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

  Mail.emptyGarbage(labelGmailGarbage);
  Calendar.categorizeEvents(
    eventBuffer,
    eventTherapy,
    eventDoctor,
    eventHaircut,
  );
}
