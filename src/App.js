import GlobalStyles from "./global/reset";
import "./App.css";
import Header from "./components/header";
function App() {
  return (
    <div className="App">
      <GlobalStyles />

      <Header />
    </div>
  );
}

export default App;
