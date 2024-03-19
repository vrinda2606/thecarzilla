import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import TermsCond from "./Components/TermsCond";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

ReactDOM.render(
<BrowserRouter>
<Navbar />
<App />
{/* <TermsCond /> */}
<Footer />
</BrowserRouter>,document.getElementById('root'));