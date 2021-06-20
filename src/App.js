import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import Homepage from "./components/pages/Homepage";
import "./App.scss";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Homepage />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;
