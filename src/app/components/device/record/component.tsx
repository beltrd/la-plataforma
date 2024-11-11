import { Container, Row, Col } from "react-bootstrap";

import SingleCategory from "../../single-items/single-category";

export type SectionShowcase = { title: string; description: string };

export type ConceptShowcaseInput = { sectionShowcase: SectionShowcase[] };

export const ConceptShowcase = ({ sectionShowcase }: ConceptShowcaseInput) => {
  if (!sectionShowcase || !sectionShowcase.length) return null;

  return (
    <Container className="half">
      <Row>
        {sectionShowcase &&
          sectionShowcase.length > 0 &&
          sectionShowcase.map((product, index) => (
            <Col sm={4} key={index}>
              <SingleCategory product={product} sectionNumber={index + 1} />
            </Col>
          ))}
      </Row>
    </Container>
  );
};
