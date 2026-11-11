import { EditorPaneProps } from "@/Interfaces/EditorPaneProps";
import moduleStyles from "./EditorPane.module.scss";

export function EditorPane({ data }: { data: EditorPaneProps }) {
  return (
    <section className={`${moduleStyles.editorPane}`}>
      {data.content.split("\n").map((item, index) => (
        <div key={index} className={moduleStyles.codeLine}>
          <span className={moduleStyles.lineNumber}>{index + 1}</span>
          <span className={moduleStyles.lineContent}>{item || " "}</span>
        </div>
      ))}
    </section>
  );
}
