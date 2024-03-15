import {BrowserRouter ,Routes ,Route} from "react-router-dom";

import {Box} from "@mui/material";
import Navbar from './Components/Navbar';
import  Home from './Components/Home';

const App = () => (
    <BrowserRouter>
        <Box sx={{backgroundColor : 'white'}}>
           <Navbar /> 
           <Home />
           <Routes>
             {/* <Route path="/" exact element={<Home/>} /> */}
             {/*<Route path="/video/:id" element={<VideoDetail />} />
             <Route path="/channel/:id" element={<ChannelDetail />} />
             <Route path="/search/:searchTerm" element={<SearchFeed />} /> */}
           </Routes>
        </Box>
    </BrowserRouter>
);

export default App;