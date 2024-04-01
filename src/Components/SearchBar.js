import React, { useState, useEffect } from 'react';
import { Paper, Menu, MenuItem, IconButton, Tooltip } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import SortIcon from '@mui/icons-material/Sort';

const SearchBar = ({ options, handleSelect }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredOptions, setFilteredOptions] = useState([]);
  const [anchorEl, setAnchorEl] = useState(null); // State for dropdown visibility

  useEffect(() => {
    const filterOptions = () => {
      if (searchTerm.length >= 3) {
        const suggestions = options.filter((option) =>
          option.toLowerCase().startsWith(searchTerm.length >= 3 && searchTerm.toLowerCase())
        );
        setFilteredOptions(suggestions);
      } else {
        setFilteredOptions([]); // Clear suggestions when term is less than 3 chars
      }
    };

    filterOptions();
  }, [searchTerm, options]);

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  

  const handleSelectOption = (selectedOption) => {
    handleSelect(selectedOption); // Pass selected option to parent
    setSearchTerm(''); // Clear search term after selection
    handleClose(); // Close dropdown
  };

  return (
    <>
      <Paper
        component="form"
        onSubmit={handleClose} // Prevent form submission (handled elsewhere)
        sx={{
          borderRadius: 20,
          border: '1px solid #C3D4E966',
          pl: 2,
          boxShadow: 'none',
          mt: '8px',
          color: '#596780',
          width: '332px',
          height: '44px',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <SearchIcon type="submit" style={{ width: '25px', height: '25px' }} />
        <input
          className="search-bar"
          placeholder="Search something here..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
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
        <Tooltip title="Click to show options">
          <IconButton onClick={handleClick}>
            <SortIcon />
          </IconButton>
        </Tooltip>
        <Menu
          id="search-menu"
          anchorEl={anchorEl}
          open={Boolean(anchorEl)}
          onClose={handleClose}
          sx={{ maxHeight: 250 }} // Limit dropdown height
        >
          {filteredOptions.length > 0 &&
            filteredOptions.map((option, index) => (
              <MenuItem key={index} onClick={() => handleSelectOption(option)}>
                {option}
              </MenuItem>
            ))}
        </Menu>
      </Paper>
    </>
  );
};

export default SearchBar;
