import { STANDUP } from "@/lib/meet";
import { useMeetStore } from "./meetStore";

test("removing the muted CEO drops them from the invite", () => {
  useMeetStore.setState({ attendees: STANDUP });
  useMeetStore.getState().toggle("ceo");
  expect(useMeetStore.getState().attendees.find((person) => person.id === "ceo")?.invited).toBe(
    false,
  );
  useMeetStore.getState().reset();
});
