import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Homepage from "./components/pages/Homepage";
import CategoryLanding from "./components/pages/Category";
import ProductDetailPage from "./components/pages/ProductDetail";
import ErrorPage from "./components/pages/404";
import CookieConsent from "./components/shared-components/CookieConsent";
import "./App.scss";

function App() {
  return (
    <Router>
      <AppWrapper>
        <div className="App">
          <Header />
          <Switch>
            <Route path="/404">
              <ErrorPage />
            </Route>
            <Route path="/productdetail">
              <ProductDetailPage />
            </Route>
            <Route path="/category">
              <CategoryLanding />
            </Route>
            <Route path="/">
              <Homepage />
            </Route>
          </Switch>
          <CookieConsent />
          <Footer />
        </div>
      </AppWrapper>
    </Router>
  );
}

export default App;
