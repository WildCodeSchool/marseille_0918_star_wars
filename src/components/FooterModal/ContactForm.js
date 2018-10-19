import React from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import './FooterModal.scss';

export default class ContactForm extends React.Component {
  render() {
    return (
      <Form>
        <FormGroup>
          <Input type="email" name="email" id="Email" placeholder="Email" />
        </FormGroup>
        <FormGroup>
          <Input type="text" name="name" id="Name" placeholder="Name" />
        </FormGroup>
        <FormGroup>
          <Input type="textarea" name="text" id="Text" placeholder="Join us and together we can rule the galaxy !" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    );
  }
}
