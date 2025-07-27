import { navLinks } from "@/constants";
import React from "react";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";
import { ChevronDown } from "lucide-react";

const NavLinks = () => {
  return (
    <nav className="hidden lg:block">
      <ul className="flex">
        {navLinks.map(({ label, href, children }) => (
          <li key={label}>
            <Link
              to={href}
              className={buttonVariants({
                variant: "ghost",
                className: "px-5 text-base! hover:text-primary",
              })}
            >
              {label}
              {children && <ChevronDown className="size-5"/>}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavLinks;
