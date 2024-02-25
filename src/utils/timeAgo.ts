type Ranges = Partial<Record<Intl.RelativeTimeFormatUnit, number>>;

export function timeAgo(input: Date | string | number) {
  const date = input instanceof Date ? input : new Date(input);
  const formatter = new Intl.RelativeTimeFormat('en');
  const ranges: Ranges = {
    years: 3600 * 24 * 365,
    months: 3600 * 24 * 30,
    weeks: 3600 * 24 * 7,
    days: 3600 * 24,
    hours: 3600,
    minutes: 60,
    seconds: 1,
  };
  const secondsElapsed = (date.getTime() - Date.now()) / 1000;
  const keys = Object.keys(ranges) as Intl.RelativeTimeFormatUnit[];
  for (const key of keys) {
    if (ranges[key] && ranges[key]! < Math.abs(secondsElapsed)) {
      const delta = secondsElapsed / ranges[key]!;
      return formatter.format(Math.round(delta), key);
    }
  }
}
