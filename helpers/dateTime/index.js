import Dayjs from "dayjs";
import RelativeTime from "dayjs/plugin/relativeTime";
import { DEFAULT_LANGUAGE } from "@consts/languages";
import "dayjs/locale/id";

Dayjs.extend(RelativeTime);
Dayjs.locale(DEFAULT_LANGUAGE);

export default Dayjs;
