import { cn } from "@/lib/utils";
import React from "react";
import { Link } from "react-router";

const Logo = ({ className = "" }) => {
  return (
    <Link to="/" className={className}>
      <img src="/logo.svg" alt="Logo" className={cn("w-[170px]")} />
    </Link>
  );
};

export default Logo;
