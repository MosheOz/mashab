import * as React from "react";
import Button from "@mui/material/Button";
import { useDispatch } from "react-redux";

import { displayItems } from "../store/actions";

type AddItemType = {
  itemName: string;
  category: string | null;
};

const AddItem: React.FC<AddItemType> = ({ itemName, category }) => {
  const dispatch = useDispatch();
  const addItem = () => {
    if (!itemName || !category) return;

    (async () => {
      try {
        const rawResponse = await fetch("http://localhost:3001/add-item", {
          method: "POST",
          headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ newItem: { category, name: itemName } }),
        });
        const newItems = await rawResponse.json();
        dispatch(displayItems(newItems.items));
      } catch (err) {
        alert(err);
      }
    })();
  };
  return (
    <Button variant="contained" onClick={addItem} style={{ width: "100%" }}>
      הוסף
    </Button>
  );
};

export default AddItem;
