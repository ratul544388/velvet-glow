import React from "react";
import Section from "./section";
import { popularProducts } from "@/constants";
import Container from "./container";

const PopularProducts = () => {
  return (
    <Section title="Our Popular Product">
      <Container>
        <ul className="grid grid-cols-2 gap-x-5 gap-y-10 lg:grid-cols-4">
          {popularProducts.map(
            ({ label, image, discountPercentage, price, use }) => (
              <li key={label} className="">
                <div className="bg-accent flex items-center justify-center relative px-4 py-6">
                  <img src={image} alt={label} className="w-[300px] aspect-[4/6] object-contain" />
                  {discountPercentage && (
                    <span className="bg-destructive absolute top-3 text-sm left-3 px-4 py-1.5 rounded-sm font-semibold text-white">
                      {discountPercentage}%
                    </span>
                  )}
                </div>
                <span className="mt-4 block text-muted-foreground font-medium">{use}</span>
                <h4 className="font-bold mt-2 text-xl lg:text-2xl">{label}</h4>
                <span className="text-destructive mt-1 block font-medium">price: ${price}</span>
              </li>
            ),
          )}
        </ul>
      </Container>
    </Section>
  );
};

export default PopularProducts;
