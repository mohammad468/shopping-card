import "./App.scss";
// *Store
import Store from "./components/Store";
// *details
import ProductsDetails from "./components/ProductsDetails";
// *context
import ProductContextProvider from "./context/ProductContextProvider";
// *react router
import { Switch, Route, Redirect } from "react-router-dom";

function App() {
  return (
    <ProductContextProvider>
      <Switch>
        <Route path="/products/:id" component={ProductsDetails} />
        <Route path="/products" component={Store} />
        <Redirect to="/products" />
      </Switch>
    </ProductContextProvider>
  );
}

export default App;
