import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

const Categories = () => {
  const [category, setCategory] = React.useState("");
  const [categories, setCategories] = React.useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  React.useEffect(() => {
    fetch("http://localhost:3001/get-categories")
      .then((res) => res.json())
      .then((res) => setCategories(res.categories));
  }, []);

  React.useEffect(() => {
    fetch(`http://localhost:3001/get-items/${category}`)
      .then((res) => res.json())
      .then((res) => console.log(res));
  }, [category]);

  const handleChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  return (
    <Box sx={{ maxWidth: 120 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">קטגוריות</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={category}
          label="קטגוריות"
          onChange={handleChange}
        >
          {categories.map((c) => (
            <MenuItem value={c.id}>{c.name}</MenuItem>
          ))}
        </Select>
      </FormControl>
    </Box>
  );
};

export default Categories;
