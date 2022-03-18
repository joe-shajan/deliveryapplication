import React, { Fragment, useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader/UserHeader";
import StoreSubHeader from "../../../components/StoreSubHeader/StoreSubHeader";
import StoreSearchBar from "../../../components/StoreSearchBar/StoreSearchBar";
import { Container, Grid, Typography, IconButton, Button } from "@mui/material";
import { Box } from "@mui/system";
import StoreItem from "../../../components/StoreItem/StoreItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import CartItem from "../../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { listProducts } from "../../../actions/productAction";

const Store = () => {
  const dispatch = useDispatch();
  const { storeid } = useParams();
  const [skip, setSkip] = useState(0);
  const [store, setStore] = useState({});
  const [search,setSearch] = useState("")

  const { cartitems } = useSelector((state) => state.cart);
  

  let total = 0;
  for (let item of cartitems) {
    total += item.producttotal;
  }
  const {loading , products} = useSelector((state)=>state.listproduct)

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    // console.log(offsetHeight + scrollTop, scrollHeight);
    if (offsetHeight + scrollTop >= scrollHeight) {
      setSkip(products.length)
    }
  };


  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/store/${storeid}`);
      setStore(data)
    })();
    dispatch(listProducts(storeid, skip));
  }, [dispatch, storeid,skip]);
  return (
    <>
      <UserHeader />
      <StoreSubHeader props={store}/>
      <StoreSearchBar />
      <Container>
        <Grid container spacing={1}>
          <Grid item xs={2} sx={{ display: { md: "block", xs: "none" } }}>
            <Box
              sx={{
                width: "100%",
                height: "62vh",
                // border: 1,
                position: { md: "sticky", xs: "" },
                top: 281,
                bottom: "0px",
                zIndex: 5,
                overflow: "auto",
              }}
            >
              {/* {[
                1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,
              ].map(() => (
                <Typography
                  varient="h5"
                  sx={{
                    ":hover": { color: "#00B37A" },
                    mt: 1,
                    cursor: "pointer",
                  }}
                  onClick={() => {
                    alert("joe");
                  }}
                >
                  Covid essentiels
                </Typography>
              ))} */}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box
              sx={{
                width: "100%",
                height: "62vh",
                position: { md: "sticky", xs: "" },
                top: 281,
                bottom: "0px",
                zIndex: 5,
                overflow: "auto",
                border: 1,
                borderColor: "#e0e0e0",
              }}
              onScroll={handleScroll}
            >
              {products.map((data) => (
                <StoreItem props={data} />
              ))}
            </Box>
          </Grid>
          <Grid item xs={3} sx={{ display: { md: "block", xs: "none" } }}>
            <Box
              sx={{
                position: { md: "sticky", xs: "" },
                top: 303,
                bottom: "0px",
                zIndex: 5,
              }}
            >
              <Typography variant="h5">Your Cart</Typography>
              <Typography variant="subtitle1">
                {cartitems.length} item
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "43vh",
                  overflow: "auto",
                }}
              >
                {/* cart item */}
                {/* cart item */}
                <CartItem />
                {/* cart item */}
                {/* cart item */}
              </Box>
              {cartitems.length > 0 && (
                <Button
                  size="small"
                  variant="contained"
                  sx={{
                    backgroundColor: "#00D290",
                    height: 40,
                    width: "100%",
                    borderRadius: 5,
                    display: "flex",
                    mt: 1,
                    justifyContent: "space-around",
                  }}
                  // onClick={() => signinSetOpen(true)}
                >
                  <span style={{ fontWeight: "bold" }}>Checkout</span>
                  <span style={{ fontWeight: "bold", fontSize: 15 }}>
                    ₹ {total}
                  </span>
                </Button>
              )}
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Store;
