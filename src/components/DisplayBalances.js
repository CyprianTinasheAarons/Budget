import React from "react";
import { Segment, Grid, GridColumn } from "semantic-ui-react";
import StatisticsComponent from "../components/StatisticsComponent";

function DisplayBalances() {
  return (
    <Segment textAlign="center">
      <Grid columns={2} divided>
        <Grid.Row>
          <GridColumn>
            <StatisticsComponent
              label="Incoming:"
              value="2500"
              size="tiny"
              color="green"
            />
          </GridColumn>
          <GridColumn>
            <StatisticsComponent
              label="Expenses:"
              value="1500"
              size="tiny"
              color="red"
            />
          </GridColumn>
        </Grid.Row>
      </Grid>
    </Segment>
  );
}

export default DisplayBalances;
