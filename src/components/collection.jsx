import React from "react";
import Section from "./section";
import { collection } from "@/constants";
import Container from "./container";

const Collection = () => {
  return (
    <Section title="Browse By Collection" className="bg-background">
      <Container className="">
        <ul className="grid w-full grid-cols-2 gap-x-4 gap-y-8 lg:grid-cols-4">
          {collection.map(({ label, image, itemCount }) => (
            <li
              key={label}
              className="flex flex-col items-center justify-center"
            >
              <img src={image} alt={`${label} Image`} />
              <h5 className="text-xl mt-3 font-semibold">{label}</h5>
              <span className="mt-1 text-wood font-medium">{itemCount} items</span>
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default Collection;
