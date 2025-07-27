import React from "react";
import Section from "./section";
import { reviews } from "@/constants";
import Container from "./container";

const CustomerTestimonial = () => {
  return (
    <Section title="Customer Testimonial" className="bg-accent relative z-10">
      <Container>
        <div className="flex flex-col lg:flex-row">
          <ul className="grid gap-5 md:grid-cols-2">
            {reviews.map(({ name, designtion, image, comment }) => (
              <li
                key={name}
                className="bg-background my-auto h-full px-5 py-7 lg:max-h-[80%]"
              >
                <div className="flex items-center gap-3">
                  <img src={image} alt={`${name}'s Avatar`} />
                  <div>
                    <h5 className="text-xl font-semibold">{name}</h5>
                    <span>{designtion}</span>
                  </div>
                </div>
                <p className="mt-4 text-sm xl:text-base">{comment}</p>
              </li>
            ))}
          </ul>
          <div className="w-full">
            <img
              src="/mackup-brash.png"
              alt="Mackup Brash"
              className="relative -z-10 mx-auto -translate-y-[20%] lg:mx-0 lg:-translate-x-[20%] lg:translate-y-0"
            />
          </div>
        </div>
      </Container>
    </Section>
  );
};

export default CustomerTestimonial;
