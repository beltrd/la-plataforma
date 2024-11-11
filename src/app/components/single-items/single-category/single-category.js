// @ts-nocheck

import React from "react";
import Link from "next/link";

const SingleCategory = ({ product, sectionNumber }) => {
  return (
    <div className="single-category single-category--one space-mb--r130">
      <div className="single-category__image single-category__image--one">
        <img src={product.url} className="img-fluid" alt={product.title} />
      </div>
      <div className="single-category__content single-category__content--one space-mt--25 space-mb--25">
        <div className="title title--style-two">
          <p>{product.title}</p>
          <Link
            href="/art-gallery/shop"
            as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
          >
            + Online store
          </Link>
        </div>
        <p className="product-count">{sectionNumber}</p>
      </div>
      <Link
        href="/art-gallery/shop"
        as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
        className="banner-link"
      ></Link>
    </div>
  );
};

export { SingleCategory };
