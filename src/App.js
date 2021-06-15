import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import Footer from "./components/layouts/Footer";
import "./App.scss";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
        <Footer />
      </div>
    </AppWrapper>
  );
}

export default App;
