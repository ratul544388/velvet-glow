import Footer from "@/components/footer";
import Header from "@/components/header";
import { Outlet } from "react-router";

const MainLayout = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
};

export default MainLayout;
