import { Box, Grid, IconButton, Typography } from "@mui/material";
import React, { memo, useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCartItems } from "../../actions/cartActions";
import CartIncrementDecrementSmall from "../CartIncrementDecrementSmall/CartIncrementDecrementSmall";
// import AddIcon from "@mui/icons-material/Add";
// import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = () => {
  const dispatch = useDispatch();

  const { cartitems } = useSelector((state) => state.cart);
  useEffect(() => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      dispatch(getAllCartItems(userid));
    }
  }, [dispatch]);

  return (
    <>
      {cartitems.map((product) => (
        <Box sx={{ width: "99%", height: 80 }} key={product.productid}>
          <Grid container height={"100%"}>
            <Grid
              item
              md={6}
              sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-around",
                height: "100%",
              }}
            >
              <Typography variant="subtitle2">{product.productname}</Typography>
              <Typography variant="caption">
                {product.qty} {product.unit}
              </Typography>
            </Grid>
            <Grid
              item
              md={4}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CartIncrementDecrementSmall noofitems={product.noofitems} />
            </Grid>
            <Grid
              item
              md={2}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Typography variant="button">₹ {product.producttotal}</Typography>
            </Grid>
          </Grid>
        </Box>
      ))}
    </>
  );
};

export default memo(CartItem);
