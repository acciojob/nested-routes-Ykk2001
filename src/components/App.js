import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./../styles/App.css";
import Layout from "./Layout";
import Women from "./Women";
const App = () => {
  return (
    <BrowserRouter>
      {/* Do not remove the main div */}
      <main>
       <div>
        <Switch>
          <Route exact path="/" component={Layout} />
          <Route path="/women" component={Women} />
        </Switch>
      </div>
      </main>
      
    </BrowserRouter>
  );
};

export default App;
