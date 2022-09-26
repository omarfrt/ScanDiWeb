import GlobalStyles from "./global/reset";
import "./App.css";
import Category from "./pages/category";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Category />
    </div>
  );
}

export default App;
