import React, {useState} from 'react';
import { Paper, IconButton, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';
import { Link } from 'react-router-dom';

const SearchBar = () => {

  const [searchQuery, setSearchQuery] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);

  let options = ['Home', 'Services', 'AboutUs', 'TermsAndConditions','PrivacyPolicy','HowItWorks','Support','Login']

  const handleSearch = (e) => {
      const query = e.target.value;
      setSearchQuery(query);
  
      // Filter options based on search query
      const filtered = query!=='' ? options.filter(option =>
        option.toLowerCase().includes(query.toLowerCase())
      ) : [];
      setFilteredOptions(filtered);
    };
  const selectedOption = () => {
    window.scrollTo({top: 0,behavior: "instant"})
    setSearchQuery('');
    setFilteredOptions([]);
  }


  return (
    <>
      <Paper
        component="form"
        sx={{
          borderRadius: '1.5vw',
          border: '0.01vw solid #C3D4E966',
          pl: '0.8vw',
          boxShadow: 'none',
          mt: '0.7vw',
          color: '#596780',
          width: '22vw',
          height: '2.9vw',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SearchIcon type="submit" style={{ height: '1.6vmax' , width : '1.6vmax' }} />
        <input
          className="search-bar"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search something here..."
        />
        <div className='dropdown'>
            {filteredOptions.length > 0 && (
                <ul>
                {filteredOptions.map((option, index) => (
                    <li key={index} onClick={selectedOption} ><Link to={option} >{option}</Link></li>
                ))}
                </ul>
            )}
        </div>

        <Tooltip title="Click to show options" style={{padding : "0.5vw"}}>
          <IconButton>
            <SortIcon style={{ height: '2vmax' , width : '2vmax'}}/>
          </IconButton>
        </Tooltip>
      </Paper>
    </>
  );
};

export default SearchBar;
