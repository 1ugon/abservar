import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Homepage";
import ArtDetail from "./pages/ArtDetail";
import About from "./pages/About";

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
        <About />
      </Route>
    </Switch>
  );
}
