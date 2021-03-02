import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ArtDetail from "./pages/ArtDetail";
import Error from "./pages/Error";

export default function Routes() {
  return (
    <Switch>
      <Route exact path="/">
        <Homepage />
      </Route>
      <Route exact path="/art/:slang">
        <ArtDetail />
      </Route>
      <Route path="*">
        <Error />
      </Route>
    </Switch>
  );
}
