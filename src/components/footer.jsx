import { footerQuickLinks, footerServices } from "@/constants";
import React from "react";
import { Link } from "react-router";
import Container from "./container";
import { Separator } from "./ui/separator";

const Footer = () => {
  return (
    <footer className="bg-foreground py-12 text-white">
      <Container>
        <div className="flex flex-wrap justify-between gap-10">
          <div>
            <Link to="/" className="">
              <img src="/logo-footer.svg" alt="" />
            </Link>
            <p className="mt-5 max-w-[400px] text-gray-300">
              At Northbound we specialize in aligning people strategies with
              business goals. Whether you're growing, restructuring, or adapting
              to new challenges, we help ensure your organization has the right
              talent, in the right place, at the right time.
            </p>
          </div>
          <div>
            <h4 className="text-xl font-bold">Services</h4>
            <ul className="mt-7 space-y-3">
              {footerServices.map(({ label, href }) => (
                <li key={label} className="text-gray-300">
                  <Link to={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h4 className="text-xl font-bold">Quick Links</h4>
            <ul className="mt-7 space-y-3 text-gray-300">
              {footerQuickLinks.map(({ label, href }) => (
                <li key={label}>
                  <Link to={href} className="hover:underline">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
            <Link to="#linkedin" className="mt-6 block">
              <img src="/linkedin.svg" alt="LinkedIn" />
            </Link>
          </div>
        </div>
        <Separator className="h-0.5! mt-10"/>
        <span className="mt-10 block text-sm text-gray-300">2024 Copyright Bendertm I All Right Reserved</span>
      </Container>
    </footer>
  );
};

export default Footer;
