import { newsAndBlog } from "@/constants";
import { Link } from "react-router";
import Section from "./section";
import { buttonVariants } from "./ui/button";
import Container from "./container";

const NewsAndBlog = () => {
  return (
    <Section title="Latest News and Blog" className="bg-background">
      <Container className="max-w-[700px] lg:max-w-[1440px]">
        <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {newsAndBlog.map(({ image, label, description }, i) => (
            <li key={i} className="flex items-center justify-center even:justify-start">
              {i % 2 === 0 ? (
                <div>
                  <h3 className="text-xl font-semibold">{label}</h3>
                  <p className="mt-1">{description}</p>
                  <Link
                    to="#read-more"
                    className={buttonVariants({
                      className: "mt-4 px-8 border-primary border-[1.5px] hover:bg-primary hover:text-white",
                      variant: "outline",
                    })}
                  >
                    Read More
                  </Link>
                </div>
              ) : (
                <img src={image} alt="News" />
              )}
            </li>
          ))}
        </ul>
      </Container>
    </Section>
  );
};

export default NewsAndBlog;
