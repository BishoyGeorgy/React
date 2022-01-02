import { useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Link, Route, Switch } from "react-router-dom";
import Details from "./Details.jsx";
import SearchParams from "./SearchParams.jsx";
import ThemeContext from "./ThemeContext";

const App = () => {
  const theme = useState("peru");
  return (
    <ThemeContext.Provider value={theme}>
      <div>
        <Router>
          <header>
            <Link to="/">Adopt Me!</Link>
          </header>
          <Switch>
            <Route path="/details/:id">
              <Details />
            </Route>
            <Route path="/">
              <SearchParams />
            </Route>
          </Switch>
        </Router>
      </div>
    </ThemeContext.Provider>
  );
};
ReactDOM.render(<App />, document.getElementById("root"));
