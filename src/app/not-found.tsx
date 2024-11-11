"use client";

import React from "react";

import Link from "next/link";
import { Container, Row, Col } from "react-bootstrap";

import { useChangePageTitle } from "../hooks/change-page-title";

export default function Custom404() {
  useChangePageTitle("page not found");

  return (
    <div className="nothing-found-area bg-404">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="nothing-found-content">
              <h1>Oops!</h1>
              <h1 className="space-mb--50">Page not found!</h1>
              <p className="direction-page">
                PLEASE GO BACK TO THE{" "}
                <Link href="/" as={process.env["PUBLIC_URL"] + "/"}>
                  home page
                </Link>
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}
