import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import PopularItems from "./components/layouts/Popular Items";
import "./App.scss";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Footer />
        <PopularItems />
      </div>
    </AppWrapper>
  );
}

export default App;
