import { Box, IconButton, Typography } from "@mui/material";
import React, { useState } from "react";

import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
const CartIncrementDecrementSmall = ({
  noofitems,
  deleteCartItem,
  productid,
  incrementCartItem,
  decrementCartItem
}) => {
  let [num, setNum] = useState(noofitems);

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
      incrementCartItem(productid)
    }
  };
  let decNum = () => {
    
    if (num > 0) {
      setNum(num - 1);
      decrementCartItem(productid)
    }
    if (num-1 === 0) {
      deleteCartItem(productid);
    }
  };
  return (
    <Box
      sx={{
        border: 1,
        width: 70,
        borderRadius: 20,
        borderColor: "#e0e0e0",
        display: "flex",
        alignItems: "center",
      }}
    >
      <IconButton onClick={decNum}>
        <RemoveIcon sx={{ fontSize: 15, color: "#00B37A" }} />
      </IconButton>
      <Typography variant="overline"> {num} </Typography>
      <IconButton onClick={incNum}>
        <AddIcon sx={{ fontSize: 15, color: "#00B37A" }} />
      </IconButton>
    </Box>
  );
};

export default CartIncrementDecrementSmall;
