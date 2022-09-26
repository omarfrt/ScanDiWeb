import GlobalStyles from "./global/reset";
import "./App.css";
import Header from "./components/header";
import ProductCard from "./components/productCard";
function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Header />
      <ProductCard/>
    </div>
  );
}

export default App;
