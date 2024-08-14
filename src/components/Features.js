import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

const Features = () => {
  const features = [
    {
      title: 'Smart Home Integration',
      description: 'Control your home with a touch of a button, integrate smart home devices seamlessly.',
      icon: '🏡',
    },
    {
      title: 'Virtual Tours',
      description: 'Experience properties like never before with our immersive virtual tours.',
      icon: '🎥',
    },
    {
      title: 'Advanced Search',
      description: 'Find your dream home with our advanced search features and filters.',
      icon: '🔍',
    },
  ];

  return (
    <Container id="features" className="py-5">
      <h2 className="text-center mb-4">Innovative Features</h2>
      <Row>
        {features.map((feature, index) => (
          <Col md={4} key={index} className="mb-4">
            <Card className="h-100">
              <Card.Body className="text-center">
                <Card.Title>{feature.icon} {feature.title}</Card.Title>
                <Card.Text>{feature.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Features;
