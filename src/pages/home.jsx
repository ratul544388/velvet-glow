import Collection from "@/components/collection";
import CustomerTestimonial from "@/components/customer-testimonial";
import Hero from "@/components/hero";
import NewsAndBlog from "@/components/news-and-blog";
import PopularProducts from "@/components/popular-products";
import ShopProducts from "@/components/shop-products";
import React from "react";

const Home = () => {
  return (
    <main>
      <Hero />
      <Collection />
      <ShopProducts />
      <PopularProducts />
      <CustomerTestimonial />
      <NewsAndBlog />
    </main>
  );
};

export default Home;
