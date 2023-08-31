import Dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import UpdateLocale from "dayjs/plugin/updateLocale";
import { DEFAULT_LANGUAGE } from "@consts/languages";
import "dayjs/locale/id";

Dayjs.extend(RelativeTime);
Dayjs.locale(DEFAULT_LANGUAGE);

// https://day.js.org/docs/en/customization/relative-time
Dayjs.extend(UpdateLocale);
Dayjs.updateLocale("id", {
  relativeTime: {
    future: "dlm %s",
    past: "%s lalu",
    s: "bbrp detik",
    m: "semenit",
    mm: "%d mnt",
    h: "sejam",
    hh: "%d jam",
    d: "sehari",
    dd: "%d hr",
    M: "sebulan",
    MM: "%d bln",
    y: "setahun",
    yy: "%d thn",
  },
});

export default Dayjs;
