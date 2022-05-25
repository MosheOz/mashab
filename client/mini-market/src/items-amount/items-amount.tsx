import * as React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store/reducers";

const ItemsAmount = () => {
  const items = useSelector<RootState, RootState["items"]["items"]>((state) => {
    return state.items?.items;
  });
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        direction: "rtl",
      }}
    >
      <p>סך הכל מוצרים : </p>
      <b>{items?.length}</b>
    </div>
  );
};

export default ItemsAmount;
