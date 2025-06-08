import { Box, TextField, Button } from "@mui/material";

const SearchBar = ({ searchQuery, setSearchQuery, onSearch }) => {
  return (
    <Box
      component="form"
      onSubmit={onSearch}
      sx={{
        display: "flex", //this restructres objects from default Vertical setup to horizontal
        gap: 2, //gap between text search field and the search button
        mb: 4,
        mt: 4,
        width: "100%", //makes the entire thing span to the full width of the container/box it sits in
      }}
    >
      <TextField
        fullWidth
        placeholder="hello search Dork"
        variant="outlined"
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <Button type="submit" variant="contained">
        Search
      </Button>
    </Box>
  );
};

export default SearchBar;
