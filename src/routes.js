import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Error from "./pages/Error";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/about">
        <About />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}
