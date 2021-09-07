import logo from "./logo.svg";
import "./App.css";
import ExplorListing from "./Components/ExplorListing";
import EploreDetails from "./Components/EploreDetails";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
function App() {
  return (
    <>
      <Router>
        <Switch>
          <Route path="/explore" component={ExplorListing} />
          <Route path="/detail" component={EploreDetails} />
        </Switch>
      </Router>
    </>
  );
}

export default App;
