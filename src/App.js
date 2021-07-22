import React from 'react';
import { Container, Row } from 'react-bootstrap';

import EmailGuesser from './EmailGuesser';

export default function() {
  return (
    <Container className="mt-5">
      <Row>
        <EmailGuesser />
      </Row>
    </Container>
  );
}
