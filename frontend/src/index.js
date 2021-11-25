import { render } from 'react-dom';
import App from './App';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AddProduct from "./components/pages/AddProduct";

const rootElement = document.getElementById("root");
render(
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<App />} />
        <Route path="product/new" element= {<AddProduct />} />
      </Routes>      
    </BrowserRouter>,
    rootElement     
);

