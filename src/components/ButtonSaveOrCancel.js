import React from "react";
import { ButtonOr, Button, ButtonGroup } from "semantic-ui-react";

function ButtonSaveOrCancel() {
  return (
    <ButtonGroup style={{ marginTop: 20 }}>
      <Button>Cancel</Button>
      <ButtonOr></ButtonOr>
      <Button primary>Ok</Button>
    </ButtonGroup>
  );
}

export default ButtonSaveOrCancel;
