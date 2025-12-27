import os from "os";
import { time, TimeInfo } from "./time";

export interface ServerInfo {
  time: TimeInfo;
  system: {
    os: string;
    platform: NodeJS.Platform;
    arch: string;
    uptime: number;
  };
  cpu: {
    model: string;
    cores: number;
    load: number[];
  };
  memory: {
    used: number;
    free: number;
    total: number;
  };
  node: {
    version: string;
  };
}

export function info(): ServerInfo {
  const cpus = os.cpus();
  return {
    time: time(),
    system: {
      os: os.type(),
      platform: os.platform(),
      arch: os.arch(),
      uptime: os.uptime(),
    },
    cpu: {
      model: cpus[0]?.model ?? "unknown",
      cores: cpus.length,
      load: os.loadavg(),
    },
    memory: {
      used: os.totalmem() - os.freemem(),
      free: os.freemem(),
      total: os.totalmem(),
    },
    node: {
      version: process.version,
    },
  };
}
