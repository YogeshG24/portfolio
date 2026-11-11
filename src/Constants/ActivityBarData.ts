import type { ActivityType } from "@/types/ActivityType";
import {
  BriefcaseBusiness,
  Code2,
  GraduationCap,
  UserRound,
} from "lucide-react";

export const ActivityData: ActivityType[] = [
  { id: "UserProfile", label: "User Profile", Icon: UserRound },
  { id: "Skills", label: "My Skills", Icon: Code2 },
  { id: "Experience", label: "Experience", Icon: BriefcaseBusiness },
  { id: "Education", label: "Education", Icon: GraduationCap },
];
