"use client";

import type { ActivityId } from "@/types/ActivityType";
import { ActivityData } from "@/Constants/ActivityBarData";
import { ActivityBarProps } from "@/Interfaces/ActivitybarProps";
import moduleStyles from "./Activitybar.module.scss";

export function Activitybar({ activeActivity, handler }: ActivityBarProps) {
  console.log("Activitybar rendered:", activeActivity);

  return (
    <nav
      className={`${moduleStyles.activitybar}`}
      aria-label="Code Editor Activity Bar"
    >
      {ActivityData.map(({ id, label, Icon }) => (
        <button
          type="button"
          key={id}
          className={`${moduleStyles.actionBtn} ${activeActivity === id ? moduleStyles.activeBtn : ""}`}
          title={label}
          aria-label={label}
          aria-pressed={activeActivity === id}
          onClick={() => {
            console.log("1. Activity clicked:", id);

            console.log("2. Current activeActivity:", activeActivity);

            handler(id as ActivityId);

            console.log("3. Handler called successfully");
          }}
        >
          <Icon size={20} strokeWidth={1.7} />
        </button>
      ))}
    </nav>
  );
}
