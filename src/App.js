import {Route, Routes} from "react-router-dom";
import Function from "./Function";
import Home from "./Components/Home";
import PrivacyPolicy from './Components/PrivacyPolicy';
import TermsCons from './Components/TermsCond';
import CustomerSupport from "./Components/CustomerSupport";
import HowDoesItWorks from './Components/HowDoesItWork';
import AboutUs from './Components/AboutUs';

const App = () => {
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
            <Route path="*" element={<Function />} /> 
          </Routes>
         
    </>)
          
  };

export default App;