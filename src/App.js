import "./App.scss";
// *Store
import Store from "./components/Store";
// *navbar
import MyNavbar from "./components/shared/MyNavbar";
// *details
import ProductsDetails from "./components/ProductsDetails";
// *shop Cart
import ShopCart from "./components/ShopCart";
// *context
import ProductContextProvider from "./context/ProductContextProvider";
import CartContextProvider from "./context/CartContextProvider";
// *react router
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <ProductContextProvider>
      <CartContextProvider>
        <MyNavbar />
        <Switch>
          <Route path="/products/:id" component={ProductsDetails} />
          <Route path="/cart" component={ShopCart} />
          <Route path="/products" component={Store} />
          <Redirect to="/products" />
        </Switch>
      </CartContextProvider>
    </ProductContextProvider>
  );
}

export default App;
