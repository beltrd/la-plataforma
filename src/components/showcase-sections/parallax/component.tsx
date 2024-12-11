"use client";

import Link from "next/link";

import { Container, Row, Col } from "react-bootstrap";
import { Parallax } from "react-parallax";

export const ParallaxShowcase = () => {
  return (
    <Parallax
      blur={{ min: -15, max: 15 }}
      strength={-200}
      bgImage={
        process.env["PUBLIC_URL"] + "/assets/images/amrc/this-is-me.jpeg"
      }
      bgImageAlt="image"
    >
      <div className="single-lookbook-section">
        <Container>
          <Row>
            <Col xl={6} lg={7}>
              <div className="lookbook-content-wrapper d-flex flex-column justify-content-center">
                <div className="lookbook-content text-center">
                  <p className="tag">#NEW #COLLECTION #MEN</p>
                  <h2 className="lookbook-title">Spring Favorites</h2>
                  <Link
                    href="/art-gallery/shop"
                    as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
                    className="amrc-button amrc-button--medium lookbook-btn"
                  >
                    shop now
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </Parallax>
  );
};
