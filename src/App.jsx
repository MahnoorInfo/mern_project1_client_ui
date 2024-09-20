import Home from "./screens/Home"
import Contactus from "./screens/Contactus";
import Login from "./screens/Login";
import Products from "./screens/Products";
import Signup from "./screens/Signup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navigation from "./layouts/Navigation";
import "./css/custome.css";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (

    <>
      
    <BrowserRouter>
    <Navigation />

   <ToastContainer /> 
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/contactus" element={<Contactus />} />
      <Route path="/login" element={<Login />} />
      <Route path="/product/:id/:name" element={<Products />} />
      <Route path="/signup" element={<Signup />} />
      </Routes>
    </BrowserRouter>
    </>
  )
}


export default App
