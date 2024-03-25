import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import {BrowserRouter} from "react-router-dom";
import App from "./App";

ReactDOM.render(
<BrowserRouter>
<Navbar />
<App />
</BrowserRouter>,document.getElementById('root'));