import { Button } from "@/components/ui/button";
import { cost, formatLei } from "@/lib/meet";
import { useMeetStore } from "@/store/meetStore";

export function MeetPane() {
  const minutes = useMeetStore((state) => state.minutes);
  const attendees = useMeetStore((state) => state.attendees);
  const toggle = useMeetStore((state) => state.toggle);
  const total = cost(attendees, minutes);

  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="border-b border-border px-5 py-4">
        <p className="text-[12px] text-muted-foreground">
          {String(minutes)} minutes · loaded rates
        </p>
        <p className="text-[32px] font-semibold tabular-nums tracking-tight" data-testid="cost">
          {formatLei(total)}
        </p>
      </div>
      <ul className="min-h-0 flex-1 overflow-auto p-2">
        {attendees.map((person) => (
          <li
            key={person.id}
            className="flex items-center justify-between gap-3 rounded-md px-3 py-2.5"
            data-testid={`person-${person.id}`}
          >
            <div>
              <p className="text-[14px] font-medium">{person.name}</p>
              <p className="text-[12px] text-muted-foreground">
                {person.role} · {String(person.hourlyLei)} lei/h
              </p>
            </div>
            <Button
              variant={person.invited ? "default" : "outline"}
              size="sm"
              className="h-8 rounded-full px-3 text-[12px]"
              data-testid={`toggle-${person.id}`}
              onClick={() => toggle(person.id)}
            >
              {person.invited ? "Invited" : "Skip"}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
}
