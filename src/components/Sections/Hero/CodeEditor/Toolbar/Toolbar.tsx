import { Minus, Maximize, X, Code2 } from "lucide-react";
import { useState } from "react";
import type { ToolbarActionType } from "@/types/ToolbarAction";
import moduleStyles from "./Toolbar.module.scss";

export function Toolbar({ activeFileName }: { activeFileName: string }) {
  const [activeAction, setActiveAction] = useState<ToolbarActionType | null>(
    null,
  );
  return (
    <div className={`${moduleStyles.toolbar}`}>
      <div className={`${moduleStyles.actionbuttons}`}>
        <span
          className={`${moduleStyles.actionbtn} ${moduleStyles.closebtn}`}
          title={"Close Window"}
          aria-label="Close Window"
          onMouseEnter={() => setActiveAction("CLOSE")}
          onMouseLeave={() => setActiveAction(null)}
        >
          {activeAction === "CLOSE" && <X size={10} strokeWidth={2} />}
        </span>
        <span
          className={`${moduleStyles.actionbtn} ${moduleStyles.minimisebtn}`}
          title={"Minimize Window"}
          aria-label="Minimize Window"
          onMouseEnter={() => setActiveAction("MINIMIZE")}
          onMouseLeave={() => setActiveAction(null)}
        >
          {activeAction === "MINIMIZE" && <Minus size={10} strokeWidth={2} />}
        </span>
        <span
          className={`${moduleStyles.actionbtn} ${moduleStyles.maximisebtn}`}
          title={"Maximize Window"}
          aria-label="Maximize Window"
          onMouseEnter={() => setActiveAction("MAXIMIZE")}
          onMouseLeave={() => setActiveAction(null)}
        >
          {activeAction === "MAXIMIZE" && (
            <Maximize size={10} strokeWidth={2} />
          )}
        </span>
      </div>
      <div className={`${moduleStyles.filename}`} title={activeFileName}>
        <span
          className={`${moduleStyles.fileIcon}`}
          title={"File Type"}
          aria-label="Active File Type"
        >
          <Code2 size={16} strokeWidth={2} />
        </span>
        <span>{activeFileName}</span>
        <span
          className={`${moduleStyles.actionbtn} ${moduleStyles.closeFileBtn}`}
          title={`Close ${activeFileName} File`}
          aria-label={`Close ${activeFileName} File`}
        >
          <X size={14} strokeWidth={2} />
        </span>
      </div>
    </div>
  );
}
