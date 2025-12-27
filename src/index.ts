import { time, unix, unixMs, tz } from "./time";
import { info } from "./info";
import { cooldown } from "./cooldown";
import { fetchUtil } from "./fetch";
import { sleep } from "./sleep";
import { retry } from "./retry";
import { ms } from "./ms";
import { formatBytes } from "./format";
import { random } from "./random";

const fttl = {
  time,
  unix,
  unixMs,
  tz,
  info,
  cooldown,
  fetch: fetchUtil,
  sleep,
  retry,
  ms,
  formatBytes,
  random,
};

export default fttl;
