import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import {
  Box,
  InputAdornment,
  TextField,
} from "@mui/material";
import {  useState } from "react";

const SearchBar = ({ onClick }) => {
  const [query, setQuery] = useState("");

  const handleQuery = (e) => {
    setQuery(e.target.value);
    onClick(e.target.value);
  };


  return (
    <Box sx={{ backgroundColor: "white" }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          margin: "0 auto"
        }}
        maxWidth="lg"
      >
        <Box
          sx={{
            width: "100%",
            "@media (max-width: 1200px)": { width: "357px" }
          }}
          padding="2rem"
        >
            <TextField
              className="searchInput"
              placeholder="Search by product name ..."
              type="search"
              variant="outlined"
              fullWidth
              value={query}
              onBlur={() => {
                setTimeout((e) => {
                  setQuery("");
                }, 100);
              }}
              onChange={handleQuery}
              size="medium"
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <SearchRoundedIcon />
                  </InputAdornment>
                )
              }}
            />
        </Box>
      </Box>
    </Box>
  );
};

export default SearchBar;
