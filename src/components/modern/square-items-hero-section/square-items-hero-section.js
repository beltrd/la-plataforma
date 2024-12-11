import React from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";

const SquareItemsHeroSection = () => {
  return (
    <>
      <Container className="mt-5 mb-3">
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <div className="section-title-container section-title--one section-title--concept text-center">
              <h1>Featured Pieces</h1>
              <p>
                Discover the captivating world of AMRC Art Studio, featuring
                abstract acrylic paintings and unique ceramic art by an artisan
                artist with a background in photography. Explore a diverse range
                of techniques and styles in modern art.
              </p>
              <Link
                href="/art-gallery/shop"
                as={process.env["PUBLIC_URL"] + "/art-gallery/shop"}
                className="amrc-button-2"
              >
                Shop
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      <div className="modern-three-items-squares">
        <div className="card item-card">
          <div className="border">
            <h2>Piece 1</h2>
          </div>
        </div>
        <div className="card item-card">
          <div className="border">
            <h2>Piece 2</h2>
          </div>
        </div>
        <div className="card item-card">
          <div className="border">
            <h2>Piece 3</h2>
          </div>
        </div>
        <div className="card item-card">
          <div className="border">
            <h2>Piece 3</h2>
          </div>
        </div>
        <div className="card item-card">
          <div className="border">
            <h2>Piece 3</h2>
          </div>
        </div>
      </div>
    </>
  );
};

export default SquareItemsHeroSection;
