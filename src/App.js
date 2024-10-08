import { Route, Routes, useLocation } from "react-router-dom";
import Function from "./Function";
import Home from "./Components/Home";
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsCons from './Components/TermsCond';
import CustomerSupport from "./Components/CustomerSupport";
import HowDoesItWorks from './Components/HowDoesItWork';
import AboutUs from './Components/AboutUs';
import TermsCondII from './Components/TermsCondII';
import PrivacyPolicyII from './Components/PrivacyPolicyII';
import Login from "./Components/Login";
import LoginII from "./Components/LoginII";
import Footer from "./Components/Footer";
import Services from "./Components/Services";
import CancellationAndRefund from "./Components/CancellationAndRefund";

const App = () => {
  const location = useLocation();

  const isLoginPage = location.pathname.startsWith('/Login');

  return(
    <>   
      <Routes>          
        <Route exact path="/" element={<Function/>} />
        <Route exact path="/Home"  element={<Home/>} />
        <Route exact path="/TermsAndConditions" element={<TermsCons />} />
        <Route exact path="/PrivacyPolicy" element={<PrivacyPolicy />} />
        <Route exact path="/HowItWorks" element={<HowDoesItWorks />} />
        <Route exact path="/Support" element={<CustomerSupport />} />
        <Route exact path="/AboutUs" element={<AboutUs />} />
        <Route exact path="/TermsAndConditions/:TermsAndConditionsII" element={<TermsCondII/>} />
        <Route exact path="/PrivacyPolicy/:PrivacyPolicyII" element={<PrivacyPolicyII />} />
        <Route exact path="/Login" element={<Login />} />
        <Route exact path="/Login/:OtpVerify" element={<LoginII />} />
        <Route exact path="/Services" element={<Services />} />
        <Route exact path="/CancellationAndRefundPolicy" element={<CancellationAndRefund />} />
        <Route path="*" element={<Function />} /> 
      </Routes>

      {/* Hide footer if on the Login page */}
      {!isLoginPage && <Footer />}
    </>
  );
};

export default App;
