import React from "react";
import Form from "react-bootstrap/Form";

import Button from "react-bootstrap/Button";
import InputGroup from "react-bootstrap/InputGroup";
import FormControl from "react-bootstrap/FormControl";

function ContactForm() {
  return (
    <>
      <Form className="contact-form">
        <Form.Group className="mb-3">
          <Form.Label>Name</Form.Label>
          <Form.Control type="text" />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Email</Form.Label>
          <Form.Control type="email" />
        </Form.Group>

        <Form.Label>Website</Form.Label>
        <InputGroup className="mb-2">
          <InputGroup.Text>https://</InputGroup.Text>
          <FormControl id="inlineFormInputGroup" />
        </InputGroup>

        <Form.Group className="mb-3">
          <Form.Label>Message</Form.Label>
          <Form.Control as="textarea" rows={6} />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Check
            type="checkbox"
            label="Allow us to sell your personal details to whomever we want"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </>
  );
}

export default ContactForm;
