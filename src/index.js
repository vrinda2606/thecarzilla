import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import {BrowserRouter} from "react-router-dom";
// import AboutUs from "./Components/AboutUs";
import App from "./App";
// import TermsCond from "./Components/TermsCond";
// import PrivacyPolicy from "./Components/PrivacyPolicy";
// import CustomerSupport from "./Components/CustomerSupport";
// import TermsCondII from "./Components/TermsCondII";
// import PrivacyPolicyII from "./Components/PrivacyPolicyII";
// import HowDoesItWork from "./Components/HowDoesItWork";


ReactDOM.render(
<BrowserRouter>
<Navbar />
<App />
{/* <TermsCond /> */}
{/* <PrivacyPolicy /> */}
{/* <CustomerSupport /> */}
{/* <TermsCondII /> */}
{/* <PrivacyPolicyII /> */}
{/* <HowDoesItWork /> */}
{/* <AboutUs /> */}
<Footer />
</BrowserRouter>,document.getElementById('root'));