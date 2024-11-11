"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

export type SliderData = {
  bgColor: string;
  image: string;
  title: string;
  subtitle: string;
  url: string;
};

export type MainHeroSliderInput = {
  sliderData: SliderData[];
};

export const MainHeroSlider = ({ sliderData }: MainHeroSliderInput) => {
  return (
    <div className="main-hero-slider space-mb--r80">
      <div className="main-hero-slider__wrapper">
        <Swiper
          rewind={true}
          centeredSlides={true}
          speed={2500}
          autoplay={{
            delay: 5500,
            disableOnInteraction: false,
          }}
          modules={[Autoplay]}
          effect="fade"
        >
          {sliderData &&
            sliderData.map((single, i) => {
              return (
                <SwiperSlide
                  className="main-hero-slider__slide"
                  style={{ backgroundColor: single.bgColor }}
                  key={i}
                >
                  <Container className="h-80">
                    <Row className="h-80">
                      <Col lg={6} className="align-self-end">
                        <div className="main-hero-slider__image">
                          <img
                            src={single.image}
                            alt={single.title}
                            loading="lazy"
                            className="img-fluid"
                          />
                        </div>
                      </Col>
                      <Col lg={6} className="align-self-center">
                        <div className="main-hero-slider__content text-center">
                          <h5 className="sub-title">{single.subtitle}</h5>
                          <h1 className="title">{single.title}</h1>
                          <div className="slider-link">
                            <Link
                              href={single.url}
                              as={single.url}
                              className="amrc-button amrc-button--medium"
                            >
                              shop now
                            </Link>
                          </div>
                        </div>
                      </Col>
                    </Row>
                  </Container>
                  <div className="main-hero-slider__pagination">
                    <span className="current">{i + 1}</span>
                    <span className="border"></span>
                    <span className="total">{sliderData.length}</span>
                  </div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
};
