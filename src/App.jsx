import {  Route, Routes } from "react-router-dom"
import { About } from "./pages/about"
import { Home } from "./pages/home"
import { Contact } from "./pages/contact"
import { MainLayout } from "./layout/main-layout"
import { ProductDeti } from "./pages/product-deti/product-deti"
import { ProfileLayout } from "./layout/profile-layout"
import { Addres } from "./pages/profile/addres"
import { Order } from "./pages/profile/order"
import { ChangeAaccaunt } from "./pages/profile/change-accaunt"
import { Profile } from "./pages/profile/profile"

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout/>}>
          <Route index element={<Home />} />
          <Route path="contact" element={<Contact />} />
          <Route path="about" element={<About />} />
          <Route path="/product/:slug" element={<ProductDeti/>}/>
          <Route path="/profile" element={<ProfileLayout/>}>
            <Route index element={<Profile/>}/>
            <Route path="addres" element={<Addres/>}/>
            <Route path="order" element={<Order/>}/>
            <Route path="change-account" element={<ChangeAaccaunt/>}/>


          </Route>
          <Route path="*" element={<h2>Not Faund</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
