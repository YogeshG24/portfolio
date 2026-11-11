import { CodeEditor } from "./CodeEditor/CodeEditor";
import moduleStyles from "./Hero.module.scss";
import { Introduction } from "./Introduction/Introduction";

export function HeroSection() {
  return (
    <section className={`${moduleStyles.heroSection}`} id="home">
      <Introduction />
      <CodeEditor />
    </section>
  );
}
