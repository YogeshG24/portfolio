import type { ActivityId } from "@/types/ActivityType";
import { Dispatch, SetStateAction } from "react";

export interface ActivityBarProps {
  activeActivity: ActivityId;
  handler: Dispatch<SetStateAction<ActivityId>>;
}
