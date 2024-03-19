import {Box} from "@mui/material";
import Navbar from './Components/Navbar';
import  Home from './Components/Home';
import {Route, Routes} from "react-router-dom";
import HomeI from "./Components/HomeI";

const Function = () => {
    return(<>
        <Box sx={{backgroundColor : 'white'}}>
    <Navbar /> 
    <Home />
    </Box>
    </>)
}

export default Function;