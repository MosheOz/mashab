import * as React from "react";
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import { useDispatch } from "react-redux";
import TextField from "@mui/material/TextField";

import { updateCategories } from "../store/actions";
import { Category } from "../types/category.interface";
import AddItem from "../add-item/add-item";

const Categories = () => {
  const [category, setCategory] = React.useState<string>("");
  const [inputValue, setInputValue] = React.useState("");
  const [categories, setCategories] = React.useState<
    {
      id: number;
      name: string;
    }[]
  >([]);

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch("http://localhost:3001/get-categories")
      .then((res) => res.json())
      .then((res: { categories: Category[] }) => {
        setCategories(res.categories);
        updateCategoriesState(res);
      });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const updateCategoriesState = (res: { categories: Category[] }) => {
    let categoriesArr = res.categories;
    let categoriesObj = categoriesArr.reduce(
      (acc: { [key: number]: string }, category: Category) => {
        let { id, name } = category;
        if (!acc[id]) {
          acc[id] = name;
        }
        return acc;
      },
      {}
    );
    dispatch(updateCategories(categoriesObj));
  };
  const handleSelectChange = (event: SelectChangeEvent) => {
    setCategory(event.target.value as string);
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(event.target.value);
  };

  const style = {
    maxWidth: 350,
    minWidth: 120,
    width: "100%",
    margin: "5px 0px",
  };

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        direction: "rtl",
      }}
    >
      <Box sx={style}>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">קטגוריות</InputLabel>
          <Select
            labelId="demo-simple-select-label"
            id="demo-simple-select"
            value={category}
            label="קטגוריות"
            onChange={handleSelectChange}
          >
            {categories.map((c) => (
              <MenuItem value={c.id} key={c.id}>
                {c.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Box sx={style}>
        <TextField
          id="outlined-multiline-flexible"
          label="שם המוצר"
          multiline
          maxRows={4}
          value={inputValue}
          onChange={handleInputChange}
          style={{ width: "100%" }}
        />
      </Box>
      <Box sx={style}>
        <AddItem itemName={inputValue} category={category} />
      </Box>
    </div>
  );
};

export default Categories;
