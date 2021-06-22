import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Homepage from "./components/pages/Homepage";
import FeaturedProducts from "./components/layouts/Featured";
import CategoryLanding from "./components/pages/Category";

import "./App.scss";

function App() {
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/category">
              <CategoryLanding />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
          <FeaturedProducts />
          <Footer />
        </div>
      </AppWrapper>
    </Router>
  );
}

export default App;
