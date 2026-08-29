export type Attendee = {
  id: string;
  name: string;
  role: string;
  hourlyLei: number;
  invited: boolean;
};

export function hours(minutes: number): number {
  return minutes / 60;
}

export function cost(attendees: Attendee[], minutes: number): number {
  return attendees
    .filter((person) => person.invited)
    .reduce((sum, person) => sum + person.hourlyLei * hours(minutes), 0);
}

export function formatLei(n: number): string {
  return `${String(Math.round(n))} lei`;
}

export const STANDUP: Attendee[] = [
  { id: "ana", name: "Ana Pop", role: "Staff engineer", hourlyLei: 180, invited: true },
  { id: "mircea", name: "Mircea Ionescu", role: "Product", hourlyLei: 150, invited: true },
  { id: "irina", name: "Irina D.", role: "Design", hourlyLei: 120, invited: true },
  { id: "andrei", name: "Andrei V.", role: "Junior", hourlyLei: 80, invited: true },
  { id: "ceo", name: "The CEO who stays muted", role: "Exec", hourlyLei: 400, invited: true },
  { id: "skip", name: "Dana (optional)", role: "Support", hourlyLei: 90, invited: false },
];

export const DEFAULT_MINUTES = 45;
