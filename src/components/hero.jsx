import { Link } from "react-router";
import Container from "./container";
import Section from "./section";
import { buttonVariants } from "./ui/button";
import { Separator } from "./ui/separator";

const Hero = () => {
  return (
    <Section className="bg-accent">
      <Container className="grid md:grid-cols-2 gap-8 items-center">
        <div className="order-2 md:order-1">
          <div className="relative z-10 flex items-center">
            <span className="bg-primary/40 -z-20 aspect-square size-12 lg:size-16 rounded-full" />
            <span className="bg-primary -z-10 aspect-square size-12 lg:size-16 -translate-x-1/2 rounded-full" />
            <p className="-translate-x-12 lg:-translate-x-17 lg:text-xl text-sm text-nowrap font-medium">
              New Spring 2025 <br /> Collactions
            </p>
          </div>
          <h1 className="mt-11 text-4xl sm:text-6xl font-semibold max-w-[500px]">
            Fashion That Feels As Good As It{" "}
            <span className="text-primary">Looks</span>
          </h1>
          <p className="mt-6 text-lg">
            Streetwear-inspired and flavor-packed, every drop celebrates
            individuality, freedom, and effortless style—where comfort
            meets cultural edge
          </p>
          <Link
            to="#get-started"
            className={buttonVariants({
              className: "mt-8 h-15 gap-4! px-8! text-lg! font-semibold",
            })}
          >
            Get Started
            <img src="/arrow-top-right.svg" alt="Arrow Top Right" />
          </Link>
        </div>
        <div className="z-10 order-1 md:order-2 relative flex md:flex-col lg:flex-row gap-5 sm:gap-0">
          <div className="w-full max-w-[400px]">
            <img src="/hero.png" alt="Hero" />
          </div>
          <div className="size-68 sm:size-100 -translate-x-10 -translate-y-5 blur-xl -z-10 absolute [background-image:radial-gradient(circle,_hsla(351,100%,89%,1)_0%,_hsla(0,0%,100%,0)_100%)] rounded-full"></div>
          <div className="sm:mt-12 text-sm lg:text-base space-y-5 text-gray-700">
            <img src="/quote.svg" alt="Quote" />
            <p className="max-w-[400px] text-pretty">
              I love that it's made with gentle ingredients — no irritation at
              all, even on my sensitive skin.
            </p>
            <div className="flex items-center gap-2">
              <Separator className="max-w-10 h-[1.5px]! bg-gray-700" />
              <p className="text-nowrap">Afia Jaman</p>
            </div>
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default Hero;