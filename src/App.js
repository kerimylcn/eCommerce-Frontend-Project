import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Homepage from "./components/pages/Homepage";
import CategoryLanding from "./components/pages/Category";
import ProductDetailPage from "./components/pages/ProductDetail";
import Benefits from "./components/shared-components/Benefits";
import "./App.scss";

//router yapisi

function App() {
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <Header />
          <Switch>
            <Route Path="/productdetail">
              <ProductDetailPage />
            </Route>
            <Route path="/category">
              <CategoryLanding />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
          <Benefits />
          <Footer />
        </div>
      </AppWrapper>
    </Router>
  );
}

export default App;
