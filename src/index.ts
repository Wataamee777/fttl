import { time, unix, unixMs, tz } from "./time";
import { info } from "./info";
import { cooldown } from "./cooldown";
import { fetchUtil } from "./fetch";

const fttl = {
  time,
  unix,
  unixMs,
  tz,
  info,
  cooldown,
  fetch: fetchUtil,
};

export default fttl;
