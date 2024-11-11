// import React from "react";

// import { Page } from "@components/page";
// import Newsletter from "@components/newsletter/newsletter";
// import { HeroSliderNine as HeroSlider } from "@components/HeroSlider";
// import BlurHeroSection from "@components/modern/blur-hero-section";

import amrcStudioService from "@services/amrc-studio-service";

// import heroSliderData from "@data/hero-sliders/hero-slider-nine.json";

export async function getServerSideProps() {
  const records = await amrcStudioService
    .collection("collections")
    .getFullList(10, { filter: "published = true", sort: "-created" });

  return {
    props: {
      collections: records.map((record) => ({
        id: record.id,
        name: record["name"],
        description: record["description"],
        published: record["published"],
        banner: amrcStudioService.getFileUrl(record, record["banner"]),
        created: record.created,
        updated: record.updated,
      })),
    },
  };
}

const LandingPage = () => {
  return (
    <></>
    // <Page title={"Ceramic Art | Abstract & Fine Art Paintings by an Artisan"}>
    //   <HeroSlider sliderData={heroSliderData} />

    //   {/* <Newsletter /> */}

    //   <BlurHeroSection collections={collections} />
    // </Page>
  );
};

export default LandingPage;
