import { Box, Grid, Typography } from "@mui/material";
import React, { memo, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrementItemInCart, getAllCartItems, incrementItemInCart, removeFromCart } from "../../actions/cartActions";
import CartIncrementDecrementSmall from "../CartIncrementDecrementSmall/CartIncrementDecrementSmall";

const CartItem = () => {
  const dispatch = useDispatch();

  const userid = localStorage.getItem("userid");
  const { cartitems } = useSelector((state) => state.cart);

  const deleteCartItem = (productid) => {
    dispatch(removeFromCart(userid, productid));
  };

  const incrementCartItem = (productid) => {
    dispatch(incrementItemInCart(userid,productid))
  };
  const decrementCartItem = (productid) => {
    dispatch(decrementItemInCart(userid,productid))
  };

  useEffect(() => {
    if (userid) {
      dispatch(getAllCartItems(userid));
    }
  }, [dispatch, userid]);

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
              md={3}
              sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <CartIncrementDecrementSmall
                noofitems={product.noofitems}
                deleteCartItem={deleteCartItem}
                productid={product.productid}
                incrementCartItem={incrementCartItem}
                decrementCartItem={decrementCartItem}
              />
            </Grid>
            <Grid
              item
              md={3}
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
