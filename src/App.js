import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "./App.css";
import ItemCryto from "./component/ItemCryto";
import ListDetails from "./component/ListDetails";
function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={ItemCryto} />
        <Route path="/items/:id" component={ListDetails} />
      </Switch>
    </Router>
  );
}

export default App;
