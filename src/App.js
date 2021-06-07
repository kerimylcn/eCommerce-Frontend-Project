import { AppWrapper } from "./context/state";
import Header from "./components/layouts/Header";
import "./App.scss";

function App() {
  return (
    <AppWrapper>
      <div className="App">
        <Header />
      </div>
    </AppWrapper>
  );
}

export default App;
