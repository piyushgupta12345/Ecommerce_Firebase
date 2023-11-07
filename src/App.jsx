import { BrowserRouter, Route, Routes, } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from './pages/Cart/Cart';
import Order from './pages/Order/Order';
import Dashboard from './pages/admin/Dashboard/Dashboard';
import NoPage from './pages/NoPage/NoPage';
import MyState from "./context/myState";

function App() {

  return (
    <MyState>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<Order />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </MyState>
  )
}

export default App
