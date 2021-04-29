import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ArtsDetails from "./pages/ArtsDetails";
import Error from "./pages/Error";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/arts/">
        <ArtsDetails />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}
