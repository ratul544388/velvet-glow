import React from "react";
import SectionTitle from "./section-title";
import { cn } from "@/lib/utils";

const Section = ({ title = "", className = "", children }) => {
  return (
    <section className={cn("py-10", className)}>
      {title && <SectionTitle>{title}</SectionTitle>}
      {children}
    </section>
  );
};

export default Section;
