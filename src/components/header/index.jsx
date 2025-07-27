import { rightIcons } from "@/constants";
import Container from "../container";
import Logo from "../logo";
import HeaderTop from "./header-top";
import NavLinks from "./nav-links";
import { Button } from "../ui/button";
import MobileSidebar from "./mobile-sidebar";

const Header = () => {
  return (
    <header className="bg-background sticky top-0 z-50 border-b">
      <HeaderTop />
      <Container className="flex h-20 items-center justify-between gap-10">
        <div className="flex items-center gap-3">
          <MobileSidebar />
          <Logo />
        </div>
        <NavLinks />
        <div className="flex gap-4">
          {rightIcons.map((icon, i) => (
            <Button
              variant="outline"
              key={i}
              size="icon"
              className="size-10 rounded-full"
            >
              <img src={icon} alt="Icon" />
            </Button>
          ))}
        </div>
      </Container>
    </header>
  );
};

export default Header;
