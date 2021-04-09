import { Container } from "semantic-ui-react";
import "./App.css";
import DisplayBalance from "./components/DisplayBalance";
import DisplayBalances from "./components/DisplayBalances";

import MainHeader from "./components/MainHeader";
import NewEntryForm from "./components/NewEntryForm";
import EntryLine from "./components/EntryLine";

function App() {
  return (
    <Container>
      <MainHeader title="Budget" />
      <DisplayBalance />
      <DisplayBalances />
      <MainHeader type="h3" title="History" />
      <EntryLine segementColor="green" description="Food Stuff" value="10.00" />
      <EntryLine segementColor="red" description="Food Stuff" value="30.00" />
      <EntryLine segementColor="green" description="Food Stuff" value="20.00" />
      <EntryLine segementColor="green" description="Food Stuff" value="10.00" />
      <MainHeader type="h3" title="Add new transaction" />
      <NewEntryForm />
    </Container>
  );
}

export default App;
