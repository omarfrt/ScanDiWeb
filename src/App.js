import GlobalStyles from "./global/reset";
import "./App.css";
import Cart from "./pages/cart";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Cart/>
    </div>
  );
}

export default App;
