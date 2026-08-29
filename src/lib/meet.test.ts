import { DEFAULT_MINUTES, STANDUP, cost } from "./meet";

test("a 45-minute standup with the muted CEO is a four-figure lei burn", () => {
  expect(cost(STANDUP, DEFAULT_MINUTES)).toBe((180 + 150 + 120 + 80 + 400) * 0.75);
});

test("dropping the CEO almost halves it", () => {
  const without = STANDUP.map((person) =>
    person.id === "ceo" ? { ...person, invited: false } : person,
  );
  expect(cost(without, DEFAULT_MINUTES)).toBe((180 + 150 + 120 + 80) * 0.75);
});
