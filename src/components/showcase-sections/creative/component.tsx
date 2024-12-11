import { Container, Row, Col } from "react-bootstrap";

import Link from "next/link";

export type SectionShowcase = {
  title: string;
  handle: string;
  thumbnail: { url: string };
};

export type CreativeShowcaseInput = { sectionShowcase: SectionShowcase[] };

export const CreativeShowcase = ({
  sectionShowcase,
}: CreativeShowcaseInput) => {
  if (!sectionShowcase || !sectionShowcase.length) return null;

  return (
    <Container className="half">
      <Row>
        {sectionShowcase &&
          sectionShowcase.length > 0 &&
          sectionShowcase.map((showcase, index) => (
            <Col sm={6} key={index}>
              <div className="single-category single-category--three space-mb--30">
                <div className="single-category__image single-category__image--three single-category__image--three--creativehome">
                  <img
                    src={showcase?.thumbnail?.url}
                    className="img-fluid"
                    alt={showcase?.title}
                  />
                </div>
                <div className="single-category__content single-category__content--three single-category__content--three--creativehome">
                  <div className="title">
                    <p>
                      <Link
                        href={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${showcase?.handle}`}
                        as={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${showcase?.handle}`}
                      >
                        {showcase?.title}
                      </Link>
                    </p>
                    <Link
                      href="/art-gallery/shop"
                      as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
                    >
                      + Shop Now
                    </Link>
                  </div>
                </div>
                <Link
                  href={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${showcase?.handle}`}
                  as={`${process.env["PUBLIC_URL"]}/art-gallery/shop/${showcase?.handle}`}
                  className="banner-link"
                ></Link>
              </div>
            </Col>
          ))}
      </Row>
    </Container>
  );
};
