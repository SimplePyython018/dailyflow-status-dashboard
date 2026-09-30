export type Metric = {
  label: string;
  value: string;
  helper: string;
  trend: string;
};

export const metrics: Metric[] = [
  {
    label: "Work.exe CPU Usage",
    value: "94%",
    helper: "Demo metric — not a real measurement",
    trend: "+11% this sprint",
  },
  {
    label: "LoveLife Service",
    value: "Idle",
    helper: "Waiting for a human-initiated release",
    trend: "No incident",
  },
  {
    label: "Coffee Break Queue",
    value: "03",
    helper: "Potential social deployment slots",
    trend: "+2 queued",
  },
  {
    label: "Weekend Availability",
    value: "TBD",
    helper: "Scheduler says: ask the engineer",
    trend: "Needs approval",
  },
];

export const timeline = [
  { time: "08:03", event: "Work.exe started", tag: "SYSTEM" },
  { time: "12:17", event: "Lunch detected", tag: "HEALTH" },
  { time: "14:41", event: "LoveLife module pinged", tag: "NOTICE" },
  { time: "17:00", event: "Coffee protocol available", tag: "READY" },
];

export const recommendations = [
  "Schedule one coffee break before the next sprint.",
  "Touch grass() at least once per release cycle.",
  "Keep work-life balance in the same backlog as production bugs.",
];
