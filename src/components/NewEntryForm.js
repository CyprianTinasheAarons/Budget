import React from "react";
import { Form, FormInput } from "semantic-ui-react";
import ButtonSaveOrCancel from "../components/ButtonSaveOrCancel";

function NewEntryForm() {
  return (
    <Form unstackable>
      <Form.Group>
        <FormInput
          icon="tags"
          width={12}
          label="Description"
          placeholder="New "
        />
        <FormInput
          icon="dollar"
          iconPosition="left"
          width={4}
          label="Value"
          placeholder="100.00"
        />
      </Form.Group>
      <ButtonSaveOrCancel />
    </Form>
  );
}

export default NewEntryForm;
