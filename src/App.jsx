import { Routes, Route } from "react-router-dom"
import SharedComponet from "./componets/SharedComponet"
import  Shop from "../src/pages/Shop"
import  Cart from "../src/pages/Cart"
import ErrorPage from "./pages/ErrorPage"



function App() {
  return (
      <Routes>
        <Route path="/" element={<SharedComponet />}>
          <Route index element={<Shop />} />
          <Route path="/cart" element={<Cart />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
  )
}

export default App
