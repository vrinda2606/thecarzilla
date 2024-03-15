import React, { useState } from 'react';
// import { useNavigate } from 'react-router-dom';
import {Paper} from '@mui/material'; //simple div having white bg and some elevation appears like its floating on top of that paper
// import {Search} from '@mui/icons-material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';



const SearchBar = () => {

    const [searchTerm,setSearchTerm] =useState('');
    // const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();            //by deafult the form submits and reloads the page
        
        if(searchTerm) {
        //   navigate(`search/${searchTerm}`);
        console.log(searchTerm);  //for testing purposes
    
          setSearchTerm('');
        }
      }

  return (
    <>
      <Paper
       component="form"
       onSubmit={handleSubmit}  //callback function
       sx={{    //with sx we can provide any styles to our materail UI
        borderRadius: 20,
        border: '1px solid #C3D4E966',
        pl: 2,    //padding left --> we can shorten and write as abbreviation of paddingLeft in sx prop
        boxShadow: 'none',
        mt: '8px',
        color: "#596780",
        width: "332px",
        height: "44px",
        // mr: {sm : 5}  //margin right will be different for small screens
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center"
       }}
       >
       <SearchIcon type="submit" style={{width: "25px",height: "25px"}}/>
     <input className='search-bar'
            placeholder='Search something here...'
            value={searchTerm}
            onChange={(e) => {setSearchTerm(e.target.value)}}
            style={{width: "240px",height: "20px",outline: "none",boxSizing: "border-box",padding: "4px 8px",fontSize:"14px",lineHeight:"21px"}}
            />
      <SortIcon style={{width: "24px",height: "24px",marginRight:"10px"}}/>
        {/* <Search /> */}
    </Paper>
    </>
  )
}

export default SearchBar;