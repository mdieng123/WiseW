
import React, { useState } from 'react';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';

const Folder = (props) => {
  const header = props.header;

  return (
    <Card style={{ width: '30rem' }} class= "shadow-lg">
      <Card.Body>
        <Card.Title>{header}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">Card Subtitle</Card.Subtitle>
        <Card.Link href="#">Card Link</Card.Link>
        <Card.Link href="#">Another Link</Card.Link>
      </Card.Body>
    </Card>
  );
};

Folder.defaultProps = {
  header: 'Default',
};

export default Folder;