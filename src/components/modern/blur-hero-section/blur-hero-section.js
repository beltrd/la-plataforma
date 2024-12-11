// @ts-nocheck
import React from "react";

import { Col, Container, Row } from "react-bootstrap";

const BlurHeroSection = ({ collections = [] }) => {
  return (
    <>
      <Container className="mt-5 mb-3">
        <Row>
          <Col lg={12} className="d-flex justify-content-center">
            <div className="section-title-container section-title--one section-title--concept text-center">
              <h1>Collections</h1>
            </div>
          </Col>
        </Row>
      </Container>
      <section className="blur-hero-section">
        <div className="blur-card-grid">
          {collections.map((collection) => (
            <a
              className="blur-card"
              href={`/collections/${collection.id}`}
              key={collection.id}
            >
              <div
                className="blur-card__background"
                style={{
                  backgroundImage: `url(${collection.banner})`,
                }}
              />
              <div className="blur-card__content">
                <p className="blur-card__category">{collection.name}</p>
                <h3 className="blur-card__heading">{collection.name}</h3>
              </div>
            </a>
          ))}
          {/* <a className="blur-card" href="#">
            <div
              className="blur-card__background"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1557187666-4fd70cf76254?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
              }}
            />
            <div className="blur-card__content">
              <p className="blur-card__category">Category</p>
              <h3 className="blur-card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="blur-card" href="#">
            <div
              className="blur-card__background"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1556680262-9990363a3e6d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
              }}
            />
            <div className="blur-card__content">
              <p className="blur-card__category">Category</p>
              <h3 className="blur-card__heading">Example Card Heading</h3>
            </div>
          </a>
          <a className="blur-card" href="#">
            <div
              className="blur-card__background"
              style={{
                backgroundImage:
                  'url(https://images.unsplash.com/photo-1557004396-66e4174d7bf6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60)',
              }}
            />
            <div className="blur-card__content">
              <p className="blur-card__category">Category</p>
              <h3 className="blur-card__heading">Example Card Heading</h3>
            </div>
          </a> */}
        </div>
      </section>
    </>
  );
};

export default BlurHeroSection;
