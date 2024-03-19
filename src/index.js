import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "./index.css";
import {BrowserRouter} from "react-router-dom";
import TermsCond from "./Components/TermsCond";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import PrivacyPolicy from "./Components/PrivacyPolicy";
import CustomerSupport from "./Components/CustomerSupport";

ReactDOM.render(
<BrowserRouter>
<Navbar />
{/* <App /> */}
{/* <TermsCond /> */}
{/* <PrivacyPolicy /> */}
<CustomerSupport />
<Footer />
</BrowserRouter>,document.getElementById('root'));