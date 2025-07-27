import React, { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../ui/sheet";
import { buttonVariants } from "../ui/button";
import { Home, Icon, Menu } from "lucide-react";
import Logo from "../logo";
import { navLinks } from "@/constants";
import { Link } from "react-router";

const MobileSidebar = () => {
  const [open, setOpen] = useState(false);
  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger
        className={buttonVariants({
          variant: "outline",
          size: "icon",
          className: "rounded-full lg:hidden",
        })}
      >
        <Menu className="size-5" />
      </SheetTrigger>
      <SheetContent side="left" className="py-4">
        <SheetHeader className="hidden">
          <SheetTitle>title</SheetTitle>
          <SheetDescription>description</SheetDescription>
        </SheetHeader>
        <Logo className="ml-5" />
        <nav className="mt-3">
          <ul>
            {navLinks.map(({ label, icon, href }) => {
              const Icon = icon;
              return (
                <li key={label}>
                  <Link
                    onClick={() => setOpen(false)}
                    to={href}
                    className={buttonVariants({
                      variant: "ghost",
                      size: "lg",
                      className: "w-full justify-start px-5!",
                    })}
                  >
                    <Icon className="size-4" />
                    {label}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </SheetContent>
    </Sheet>
  );
};

export default MobileSidebar;
