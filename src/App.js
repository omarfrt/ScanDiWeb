import GlobalStyles from "./global/reset";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Switch,
  Route,
} from "react-router-dom";
import CartPage from "./pages/cart";
import CategoryPage from "./pages/category";
import ProductPage from "./pages/product";

function App() {
  return (
    <div className="App">
      <GlobalStyles />
      <Router>
        <Switch>
          <Route exact path="/product">
            <ProductPage />
          </Route>
          <Route exact path="/cart">
            <CartPage />
          </Route>
          <Route component={CategoryPage} path="/:category">
            <CategoryPage />
          </Route>
          <Route path="/">
            <Redirect to="/tech" />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
