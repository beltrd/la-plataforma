import React from "react";

export const Metadata = () => {
  return (
    <>
      <meta
        key="viewport"
        name="viewport"
        content="width=device-width, initial-scale=1"
      />
      <meta name="format-detection" content="telephone=no" />
      <meta name="robots" content="index, follow" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />
      <meta name="language" content="English" />
      <meta name="author" content="Guanaware LTD" />

      {/* <!-- Primary Meta Tags --> */}
      <meta
        name="title"
        content="AMRC Art Studio: Home of Abstract Acrylic Paintings and Ceramic Art"
      />
      <meta
        name="description"
        content="Discover the captivating world of AMRC Art Studio, featuring abstract acrylic paintings and unique ceramic art by an artisan artist with a background in photography. Explore a diverse range of techniques and styles in modern art."
      />
      <meta
        name="keywords"
        content="fine art, posters and prints, art posters, prints, photos, framed art, poster, print, fine art, artwork, art work, lithograph, giclee, painting, paintings, canvas, reproduction, AMRC Art Studio, artisan artist, abstract acrylic paintings, ceramic art, bilingual, Spanish, English, photography, modern art, Emily Carr University, Vancouver"
      />

      {/* <!-- Open Graph / Facebook --> */}
      <meta property="og:site_name" content="AMRC Art Studio" />
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://metatags.io/" />
      <meta
        property="og:title"
        content="AMRC Art Studio: Home of Abstract Acrylic Paintings and Ceramic Art"
      />
      <meta
        property="og:description"
        content="Discover the captivating world of AMRC Art Studio, featuring abstract acrylic paintings and unique ceramic art by an artisan artist with a background in photography. Explore a diverse range of techniques and styles in modern art."
      />
      <meta
        property="og:image"
        content={
          process.env["PUBLIC_URL"] +
          "/assets/images/amrc/artwebsite_mainphoto.jpeg"
        }
      />

      {/* <!-- Twitter --> */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://metatags.io/" />
      <meta
        property="twitter:title"
        content="AMRC Art Studio: Home of Abstract Acrylic Paintings and Ceramic Art"
      />
      <meta
        property="twitter:description"
        content="Discover the captivating world of AMRC Art Studio, featuring abstract acrylic paintings and unique ceramic art by an artisan artist with a background in photography. Explore a diverse range of techniques and styles in modern art."
      />
      <meta
        property="twitter:image"
        content={
          process.env["PUBLIC_URL"] +
          "/assets/images/amrc/artwebsite_mainphoto.jpeg"
        }
      />
    </>
  );
};
