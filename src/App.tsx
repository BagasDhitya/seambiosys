import { BrowserRouter, Routes, Route } from "react-router-dom"

import Home from "./pages/home"
import Hubspot from "./pages/hubspot"
import Contact from "./pages/contact"

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Home />} path="/" />
        <Route element={<Hubspot />} path="/home/hubspot_crm" />
        <Route element={<Contact />} path="/home/contact_sales" />
      </Routes>
    </BrowserRouter>
  )
}

export default App