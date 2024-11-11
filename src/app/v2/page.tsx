import React from "react";

import BlurHeroSection from "../components/modern/blur-hero-section";

const Collections = async () => {
  // const records = await amrcStudioService
  //   .collection("collections")
  //   .getFullList(10, { filter: "published = true", sort: "-created" });

  // const collections = records.map((record) => ({
  //   id: record.id,
  //   name: record["name"],
  //   description: record["description"],
  //   published: record["published"],
  //   banner: amrcStudioService.getFileUrl(record, record["banner"]),
  //   created: record.created,
  //   updated: record.updated,
  // }));

  const collections = [
    { id: "1111", name: "diego" },
    { id: "2222", name: "asdac" },
  ];

  return (
    <>
      <BlurHeroSection collections={collections as never[]} />
    </>
  );
};

export default Collections;
