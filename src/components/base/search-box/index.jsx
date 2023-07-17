import React from "react";
import { Box, IconButton, InputAdornment, TextField } from "@mui/material";
import ManageSearchIcon from "@mui/icons-material/ManageSearch";

const SearchBox = ({ placeholder = "جستجو" }) => {
  const handleSearch = () => {
    console.log("search on ckick");
  };

  return (
    <Box>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end" onClick={handleSearch}>
              <IconButton>
                <ManageSearchIcon
                  color="primary"
                  aria-label="toggle password visibility"
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  );
};

export default SearchBox;
