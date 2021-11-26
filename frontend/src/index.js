import { render } from "react-dom"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import AddProduct from "./pages/AddProduct"
import AddCategory from "./pages/AddCategory"
import { Slide, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import HomePage from "./pages/Home"

const rootElement = document.getElementById("root")
render(
  <BrowserRouter>
    <Routes>
      <Route exact path="/" element={<HomePage />} />
      <Route path="product/new" element={<AddProduct />} />
      <Route path="category/new" element={<AddCategory />} />
    </Routes>

    <ToastContainer
      theme="colored"
      position="top-center"
      autoClose={5000}
      transition={Slide}
      hideProgressBar
      closeOnClick
      pauseOnHover
      draggable
    />
  </BrowserRouter>,
  rootElement
)
