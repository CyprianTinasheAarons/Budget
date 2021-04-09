import React from "react";
import { Grid, GridColumn, GridRow, Icon, Segment } from "semantic-ui-react";

function EntryLine({ segementColor, description, value }) {
  return (
    <Segment color={segementColor}>
      <Grid columns={3} textAlign="right">
        <GridRow>
          <GridColumn width={10} textAlign="left">
            {description}
          </GridColumn>
          <GridColumn width={3}>${value}</GridColumn>
          <GridColumn width={3}>
            <Icon name="edit" bordered />
            <Icon name="trash" bordered />
          </GridColumn>
        </GridRow>
      </Grid>
    </Segment>
  );
}

export default EntryLine;
