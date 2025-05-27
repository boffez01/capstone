import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { FaPhoneAlt, FaEnvelope } from 'react-icons/fa';

const TopBar = () => {
  return (
    <div className="top-bar bg-dark text-white-50 py-2 d-none d-lg-block">
      <Container>
        <Row className="align-items-center">
          <Col md={6} className="text-start">
            <small className="me-3">
              <FaPhoneAlt className="me-1" /> Call Us: +39 0309718894
            </small>
            <small>
              <FaEnvelope className="me-1" /> email: info@chiarenzagroup.com
            </small>
          </Col>
          <Col md={6} className="text-end">
            <small className="ms-3">Blog</small>
            <small className="ms-3">About Us</small>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default TopBar;
