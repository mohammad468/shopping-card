import "./App.scss";

// *start context
import ProductContextProvider from "./context/ProductContextProvider";
// *start context

function App() {
  return (
    <ProductContextProvider>
      <h1>hello world!</h1>
    </ProductContextProvider>
  );
}

export default App;
