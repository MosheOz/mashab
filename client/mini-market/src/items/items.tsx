import * as React from "react";
import { useSelector } from "react-redux";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { displayItems } from "../store/actions";
import { useDispatch } from "react-redux";

import { Item } from "../types/item.interface";
import { RootState } from "../store/reducers";

function createData(name: string, category: string) {
  return { name, category };
}

const Items = () => {
  const items = useSelector<RootState, RootState["items"]["items"]>((state) => {
    return state.items?.items;
  });

  const categories = useSelector<RootState, RootState["items"]["categories"]>(
    (state) => {
      return state.items?.categories;
    }
  );

  const rows = items
    .sort((a, b) => a.category - b.category)
    .map((item) => createData(item.name, categories[item.category]));

  const dispatch = useDispatch();

  React.useEffect(() => {
    fetch(`http://localhost:3001/get-items/`)
      .then((res) => res.json())
      .then((res) => dispatchItems(res));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const dispatchItems = (res: Item[]) => dispatch(displayItems(res));

  return (
    <TableContainer component={Paper}>
      <h3 style={{ textAlign: "right" }}>רשימת מוצרים</h3>
      <Table sx={{ minWidth: 650, direction: "rtl" }}>
        <TableHead>
          <TableRow>
            <TableCell align="right"> שם המוצר</TableCell>
            <TableCell align="right">קטגוריה</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row: any, i: number) => (
            <TableRow key={i}>
              <TableCell component="th" align="right">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.category}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default Items;
