import { Container, Row, Col } from "react-bootstrap";

const Footer = () => {
  return (
    <footer className="space-pt--100 space-pb--100 border-top--grey text-center">
      <Container>
        <Row>
          <Col lg={6}>
            <div className="footer-copyright-text">
              COPYRIGHT &copy; {new Date().getFullYear() + " "}
              <a href="https://02.guanaware.com/" target="_blank">
                02 GUANAWARE
              </a>
            </div>
          </Col>
          <Col lg={6}>
            <div className="footer-copyright-text">
              MADE BY&nbsp;
              <a href="https://guanaware.com/" target="_blank">
                GUANAWARE
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
