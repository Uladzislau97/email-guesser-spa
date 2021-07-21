import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');
  const [domain, setDomain] = useState('');

  const onNameChange = (e) => {
    setName(e.target.value);
  };

  const onSurnameChange = (e) => {
    setSurname(e.target.value);
  };

  const onDomainChange = (e) => {
    setDomain(e.target.value);
  };

  const guessEmail = async () => {
    const result = await fetch('/guess');
    return result;
  };

  return (
    <>
      <Form.Control type="text" placeholder="Name" onChange={onNameChange} />
      <br />
      <Form.Control type="text" placeholder="Surname" onChange={onSurnameChange} />
      <br />
      <Form.Control type="text" placeholder="Domain" onChange={onDomainChange} />
      <br />
      <Button onClick={guessEmail}>Guess email</Button>
    </>
  );
}

export default App;
