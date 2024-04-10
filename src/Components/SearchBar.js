import React, {useState} from 'react';
import { Paper, Menu, IconButton, Tooltip } from '@mui/material';
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
          borderRadius: 20,
          border: '1px solid #C3D4E966',
          pl: 2,
          boxShadow: 'none',
          mt: '8px',
          color: '#596780',
          width: '332px',
          height: '44px',
          display: {md:'flex',sm :'none'},
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SearchIcon type="submit" style={{ width: '25px', height: '25px' }} />
        <input
          className="search-bar"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search something here..."
          style={{
            width: '240px',
            height: '20px',
            outline: 'none',
            boxSizing: 'border-box',
            padding: '4px 8px',
            fontSize: '14px',
            lineHeight: '21px',
          }}
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

        <Tooltip title="Click to show options">
          <IconButton>
            <SortIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="search-menu"
          sx={{ maxHeight: 250 }} // Limit dropdown height
        >
        </Menu>
      </Paper>
    </>
  );
};

export default SearchBar;
