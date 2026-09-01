export interface JourneyEvent {
  year?: string;
  title: string;
  description: string;
  type: "education" | "work" | "achievement";
}
