import React from "react";
import Section from "../section";
import ProductCarousel from "./product-carousel";
import { Link } from "react-router";
import { buttonVariants } from "../ui/button";
import Container from "../container";

const ShopProducts = () => {
  return (
    <Section className="bg-accent py-16">
      <Container className="grid md:grid-cols-2 gap-3">
        <ProductCarousel />
        <div className="bg-foreground flex flex-col justify-center text-white lg:max-w-[550px] px-6 py-10">
          <p className="text-wood">Ready to Shop</p>
          <h2 className="text-2xl mt-3 lg:mt-5 lg:text-4xl font-semibold">Revolutionizing Your Skins Journey to Radiance</h2>
          <Link
            to="#shop-now"
            className={buttonVariants({ variant: "secondary", className: "w-fit mt-4 lg:mt-7" })}
          >
            SHOP NOW
            <img src="/arrow-left.svg" alt="Arrow Left Icon" />
          </Link>
        </div>
      </Container>
    </Section>
  );
};

export default ShopProducts;
