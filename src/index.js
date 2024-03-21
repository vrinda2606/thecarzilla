import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
// import App from "./App";
// import TermsCond from "./Components/TermsCond";
// import PrivacyPolicy from "./Components/PrivacyPolicy";
// import CustomerSupport from "./Components/CustomerSupport";
// import TermsCondII from "./Components/TermsCondII";
import PrivacyPolicyII from "./Components/PrivacyPolicyII";

ReactDOM.render(
<BrowserRouter>
<Navbar />
{/* <App /> */}
{/* <TermsCond /> */}
{/* <PrivacyPolicy /> */}
{/* <CustomerSupport /> */}
{/* <TermsCondII /> */}
<PrivacyPolicyII />
<Footer />
</BrowserRouter>,document.getElementById('root'));