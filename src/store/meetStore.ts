import { create } from "zustand";
import { DEFAULT_MINUTES, STANDUP, type Attendee } from "@/lib/meet";

interface MeetState {
  minutes: number;
  attendees: Attendee[];
  toggle: (id: string) => void;
  reset: () => void;
}

export const useMeetStore = create<MeetState>((set) => ({
  minutes: DEFAULT_MINUTES,
  attendees: STANDUP,
  toggle: (id) =>
    set((state) => ({
      attendees: state.attendees.map((person) =>
        person.id === id ? { ...person, invited: !person.invited } : person,
      ),
    })),
  reset: () => set({ minutes: DEFAULT_MINUTES, attendees: STANDUP }),
}));
