import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
// import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
import App from "./App";
// import Login from "./Components/Login";


ReactDOM.render(
<BrowserRouter>
<Navbar />
<App />
{/* <Login /> */}
{/* <Footer /> */}
</BrowserRouter>,document.getElementById('root'));