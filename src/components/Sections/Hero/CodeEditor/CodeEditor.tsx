"use client";

import { useState } from "react";
import type { ActivityId } from "@/types/ActivityType";
import { Activitybar } from "./Activitybar/Activitybar";
import { Toolbar } from "./Toolbar/Toolbar";
import { EditorPane } from "./Editor/EditorPane";
import { EditorPaneData } from "@/Constants/EditorPaneData";
import moduleStyles from "./CodeEditor.module.scss";

export function CodeEditor() {
  const [activeActivity, setActiveActivity] =
    useState<ActivityId>("UserProfile");

  const activeFile = EditorPaneData[activeActivity];

  return (
    <section
      className={`${moduleStyles.editorWrapper}`}
      title="Interactive Code Editor"
      aria-label="Interactive Code Editor"
    >
      <Toolbar activeFileName={activeFile.filename} />
      <div className={`${moduleStyles.workspace}`}>
        <Activitybar
          activeActivity={activeActivity}
          handler={setActiveActivity}
        />
        <EditorPane data={activeFile} />
      </div>
    </section>
  );
}
