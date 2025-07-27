import { cn } from "@/lib/utils";
import React from "react";

const SectionTitle = ({ children, className = "" }) => {
  return (
    <h2 className={cn("text-3xl sm:text-[40px] text-center mb-10 font-semibold", className)}>{children}</h2>
  );
};

export default SectionTitle;
