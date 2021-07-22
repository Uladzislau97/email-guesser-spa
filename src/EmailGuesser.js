import React, { useState } from 'react';
import {
  Form, Button, Alert, Card,
} from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

export default function() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [domain, setDomain] = useState('');
  const [errors, setErrors] = useState({});
  const [email, setEmail] = useState();

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const guessEmail = () => {
    const url = `/guess?name=${name}&surname=${surname}&domain=${domain}`;
    fetch(url)
      .then(res => res.json())
      .then((res) => {
        switch (res.code) {
          case 200:
            setEmail(res.data);
            setErrors({});
            break;
          case 422:
            setEmail(null);
            setErrors(res.errors);
            break;
          default:
            setEmail(null);
            setErrors({ common: 'Something went wrong' });
        }
      });
  };

  return (
    <Card className="p-5">
      <Card.Title>Email Guesser</Card.Title>
      <Card.Body>
        <div className="mb-4">
          <Form.Control type="text" placeholder="Name" onChange={onNameChange} />
          {errors.name && <span className="text-danger">{errors.name}</span>}
        </div>
        <div className="mb-4">
          <Form.Control type="text" placeholder="Surname" onChange={onSurnameChange} />
          {errors.surname && <span className="text-danger">{errors.surname}</span>}
        </div>
        <div className="mb-4">
          <Form.Control type="text" placeholder="Domain" onChange={onDomainChange} />
          {errors.domain && <span className="text-danger">{errors.domain}</span>}
        </div>

        <Button onClick={guessEmail} className="mt-3">Guess email</Button>

        {email && (
          <Alert variant="success" className="mt-5">
            <Alert.Heading>Success!</Alert.Heading>
            <p>Your email is: {email}</p>
          </Alert>
        )}

        {errors.common && (
          <Alert variant="danger" className="mt-5">
            <Alert.Heading>Error!</Alert.Heading>
            <p>{errors.common}</p>
          </Alert>
        )}
      </Card.Body>
    </Card>
  );
}
