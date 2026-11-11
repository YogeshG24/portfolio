import Link from "next/link";
import { Download, MoveRight, MoveUpRight } from "lucide-react";
import modulStyles from "./Introduction.module.scss";

export function Introduction() {
  return (
    <article className={`${modulStyles.introduction}`}>
      <span className={`${modulStyles.openToWorkTag}`}>
        open to new opportunities
      </span>
      <span className={`${modulStyles.label}`}>Full stack Developer</span>
      <h1 className={`${modulStyles.mainHeading}`}>
        Hi, I&apos;m Yogesh Gahlawat
      </h1>
      <p className={`${modulStyles.description}`}>
        I build scalable backend systems and responsive frontend applications,
        combining Java, Spring Boot, React and Next.js to develop reliable
        enterprise software.
      </p>
      <div className={`${modulStyles.ctaButtons}`}>
        <Link
          href={"#projects"}
          className={`${modulStyles.ctaButton} ${modulStyles.primaryCtaButton}`}
        >
          <span>Explore My Work</span>
          <MoveUpRight size={14} strokeWidth={2.5} />
        </Link>
        <Link
          href={"#contact"}
          className={`${modulStyles.ctaButton} ${modulStyles.secondaryCtaButton}`}
        >
          <span>Get In Touch</span>
          <MoveRight size={14} strokeWidth={2.5} />
        </Link>
        <Link
          href="/Yogesh_Java_React_Full_Stack_3Years.pdf"
          download
          className={`${modulStyles.ctaButton} ${modulStyles.downloadCtaButton}`}
        >
          <span>Download Resume</span>
          <Download size={14} strokeWidth={2.5} />
        </Link>
      </div>
      <ul className={`${modulStyles.highlight}`}>
        <li>3+ Years of Experience</li>
        <li>Tata Consultancy Services</li>
        <li>Experience in building scalable Trading Platforms</li>
      </ul>
    </article>
  );
}
