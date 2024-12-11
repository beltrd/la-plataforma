"use client";

import React from "react";
import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Parallax } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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

export const SecondaryHeroSlider = ({ sliderData }: MainHeroSliderInput) => {
  return (
    <div className="secondary-hero-slider space-mb--r80">
      <Swiper
        rewind={true}
        centeredSlides={true}
        spaceBetween={30}
        parallax={true}
        speed={2000}
        autoplay={{
          delay: 5500,
          disableOnInteraction: false,
        }}
        modules={[Autoplay, Parallax]}
        effect="fade"
        className="mySwiper"
      >
        {sliderData &&
          sliderData.map((single, i) => {
            return (
              <SwiperSlide className="secondary-hero-slider__slide" key={i}>
                <Container className="h-100">
                  <Row className="align-items-center flex-column flex-lg-row justify-content-center justify-content-lg-start h-100">
                    <Col lg={7}>
                      <div className="secondary-hero-slider__image">
                        <img
                          src={process.env["PUBLIC_URL"] + single.image}
                          alt={single.title}
                          className="img-fluid"
                        />
                      </div>
                    </Col>
                    <Col lg={5} className="text-center">
                      <div className="secondary-hero-slider__content">
                        <h5 className="sub-title">{single.subtitle}</h5>
                        <h1 className="title">{single.title}</h1>
                        <div className="slider-link">
                          <Link
                            href={single.url}
                            as={process.env["PUBLIC_URL"] + single.url}
                            className="amrc-button amrc-button--medium"
                          >
                            shop now
                          </Link>
                        </div>
                      </div>
                    </Col>
                  </Row>
                </Container>
              </SwiperSlide>
            );
          })}
        <div
          slot="container-start"
          className="parallax-bg"
          style={{
            backgroundImage: `url(/assets/images/amrc/fine-art-paint.png)`,
          }}
          data-swiper-parallax="-23%"
        ></div>
      </Swiper>
    </div>
  );
};
