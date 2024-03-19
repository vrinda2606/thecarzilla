import {Route, Routes} from "react-router-dom";
import Function from "./Function";
import HomeI from "./Components/HomeI";

const App = () => {
  return(
    <>    
          <Routes>
            <Route exact path="/" element={<Function/>} />
          </Routes>

    </>)
          
  };

export default App;