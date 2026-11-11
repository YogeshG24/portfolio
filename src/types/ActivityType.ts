import { LucideIcon } from "lucide-react";

export type ActivityId = "UserProfile" | "Skills" | "Experience" | "Education";

export type ActivityType = {
  id: string;
  label: string;
  Icon: LucideIcon;
};
