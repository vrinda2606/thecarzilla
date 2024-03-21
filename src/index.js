import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
import App from "./App";


ReactDOM.render(
<BrowserRouter>
<Navbar />
<App />
<Footer />
</BrowserRouter>,document.getElementById('root'));