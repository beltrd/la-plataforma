// @ts-nocheck

import Footer from "./components/footer";
import Header from "./components/header";

const MainLayout = ({ children, aboutOverlay }) => {
  return (
    <>
      <Header aboutOverlay={aboutOverlay} />
      {children}
      <Footer />
    </>
  );
};

export default MainLayout;
