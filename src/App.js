import {
  Button,
  ButtonGroup,
  ButtonOr,
  Container,
  Form,
  FormInput,
  Grid,
  GridColumn,
  GridRow,
  Header,
  Icon,
  Segment,
  Statistic,
} from "semantic-ui-react";
import "./App.css";

function App() {
  return (
    <Container>
      <Header as="h1">Budget</Header>
      <Statistic size="small">
        <Statistic.Label>Your Balance:</Statistic.Label>
        <Statistic.Value>25000</Statistic.Value>
      </Statistic>
      <Segment textAlign="center">
        <Grid columns={2} divided>
          <Grid.Row>
            <GridColumn>
              <Statistic size="tiny" color="green">
                <Statistic.Label>Incoming:</Statistic.Label>
                <Statistic.Value>2500</Statistic.Value>
              </Statistic>
            </GridColumn>
            <GridColumn>
              <Statistic size="tiny" color="red">
                <Statistic.Label>Expenses:</Statistic.Label>
                <Statistic.Value>2500</Statistic.Value>
              </Statistic>
            </GridColumn>
          </Grid.Row>
        </Grid>
      </Segment>
      <Header as="h3">History</Header>
      <Segment color="red">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Something
            </GridColumn>
            <GridColumn width={3}>$10,00</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>
      <Segment color="green">
        <Grid columns={3} textAlign="right">
          <GridRow>
            <GridColumn width={10} textAlign="left">
              Income
            </GridColumn>
            <GridColumn width={3}>$10,00</GridColumn>
            <GridColumn width={3}>
              <Icon name="edit" bordered />
              <Icon name="trash" bordered />
            </GridColumn>
          </GridRow>
        </Grid>
      </Segment>

      <Header as="h3">Add new transaction</Header>
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
        <ButtonGroup style={{ marginTop: 20 }}>
          <Button>Cancel</Button>
          <ButtonOr></ButtonOr>
          <Button primary>Ok</Button>
        </ButtonGroup>
      </Form>
    </Container>
  );
}

export default App;
