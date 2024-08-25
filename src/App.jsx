import { NavBar } from "./components/NavBar"
import { ItemListContainer } from "./components/itemListContainer";
import {ItemDetailContainer} from "./components/itemDetailContainer"
import { BrowserRouter, Route, Routes} from "react-router-dom";
import { Provider } from "./contexts/ItemsContext";
import { Cart } from "./components/Cart";

function App() {

  return (
  <Provider>
  <BrowserRouter>
  <NavBar/>
  <Routes>
    <Route path="/" element={<ItemListContainer/>} />
    <Route path="/category/:id" element={<ItemListContainer/>} /> 
    <Route path="/item/:id" element={<ItemDetailContainer/>} />
    <Route path="/cart" element={<Cart/>} />
    <Route path="*" element={404}/>
  </Routes>
  </BrowserRouter>
  </Provider>

  );
}

export default App
