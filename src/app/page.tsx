"use client";
import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";

// import { getFeaturedProducts } from "../lib/services/ContentfulService";

// import { Page } from "./components/page";
// import { DeviceFingerprint } from "./components/device/fingerprint";
// import { useChangePageTitle } from "../hooks/change-page-title";
import { useEffect } from "react";
// import { generateDeviceFingerprint } from "../lib/device/fingerprint";

import { getFingerprint } from "./_page/utils";

// const isBrowser = () =>
//   typeof window !== "undefined" && typeof navigator !== "undefined";

const Home = () => {
  useEffect(() => {
    const defaultTitle = "experiment";

    document.title = `home | ${defaultTitle}`;

    if (typeof window !== "undefined") {
      console.log("window is defined");

      getFingerprint();
    }
  }, []);

  // const homePageData = await getFeaturedProducts();

  // if (homePageData === undefined) return null;

  // const homePageData = {
  //   sectionTitle: "wow",
  //   sectionShowcase: { items: [] },
  //   showcase: { items: [] },
  // };

  return (
    <>
      {/* <Newsletter />

      <ParallaxShowcase />

      <MainHeroSlider sliderData={heroSliderData} />
      <SecondaryHeroSlider sliderData={heroSliderData} />

      <ConceptContent
        title={homePageData?.sectionTitle}
        description="Discover the magic of acrylic painting techniques melded into one captivating, dynamic art piece - explore our stunning abstract collection and redefine your space with elegance and modern flair today!"
        url="/"
      />

      <ConceptShowcase sectionShowcase={homePageData?.sectionShowcase?.items} />

      <ConceptContent
        title={homePageData?.sectionTitle}
        description={
          "Discover the magic of acrylic painting techniques melded into one captivating, dynamic art piece - explore our stunning abstract collection and redefine your space with elegance and modern flair today!"
        }
        url="/"
      />

      <ConceptContent
        title="Fine Art Acrylic Paintings"
        description="Dive into the captivating realm of Fine Art Acrylic Paintings,
                where masterful artistry meets contemporary innovation. Our
                exquisite collection features a vivid fusion of colors,
                textures, and styles, breathing life into each unique piece.
                Experience the transformative power of our Fine Art Acrylic
                Paintings and elevate your space with an unparalleled touch of
                creativity and elegance."
        url="/"
      />


      <CreativeShowcase sectionShowcase={homePageData?.showcase?.items} />
      */}

      <Container>
        <Row>
          <Col lg={8}>
            <div className="section-title-container section-title--one section-title--concept space-mb--r130">
              <h1>Welcome to my playground</h1>
              <p>Hello, World!</p>
              <Link
                href="login"
                as={process.env["PUBLIC_URL"] + "login"}
                className="amrc-button-2"
              >
                Login
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default Home;
