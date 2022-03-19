import React, { Fragment, useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader/UserHeader";
import StoreSubHeader from "../../../components/StoreSubHeader/StoreSubHeader";
import {
  Container,
  Grid,
  Typography,
  Button,
  FormControl,
  OutlinedInput,
  InputAdornment,
} from "@mui/material";
import { Box } from "@mui/system";
import StoreItem from "../../../components/StoreItem/StoreItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import CartItem from "../../../components/CartItem/CartItem";
import { useDispatch, useSelector } from "react-redux";
import { listProducts, searchProducts } from "../../../actions/productAction";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";
import StoreitemSkeleton from "../../../components/StoreitemSkeleton/StoreitemSkeleton";

const Store = () => {
  const dispatch = useDispatch();
  const { storeid } = useParams();
  const [skip, setSkip] = useState(0);
  const [store, setStore] = useState({});

  const { cartitems } = useSelector((state) => state.cart);

  let total = 0;
  for (let item of cartitems) {
    total += item.producttotal;
  }
  const { loading, products } = useSelector((state) => state.listproduct);

  const handleScroll = (e) => {
    const { offsetHeight, scrollTop, scrollHeight } = e.target;
    if (offsetHeight + scrollTop >= scrollHeight) setSkip(products.length);
  };

  const getSuggestions = async (search) => {
    if (search === "") {
      dispatch(listProducts(storeid, skip));
    } else {
      dispatch(searchProducts(storeid, search));
    }
  };

  const debounce = function (fn, d) {
    let timer;
    return function (e) {
      // setLoading(true);
      let context = this,
        args = [e.target.value];
      clearTimeout(timer);
      timer = setTimeout(() => {
        fn.apply(context, args);
      }, d);
    };
  };

  const debounceForData = debounce(getSuggestions, 300);

  useEffect(() => {
    (async () => {
      const { data } = await axios.get(`/store/${storeid}`);
      setStore(data);
    })();
    dispatch(listProducts(storeid, skip));
  }, [dispatch, storeid, skip]);
  return (
    <>
      <UserHeader />
      <StoreSubHeader props={store} />
      {/* <StoreSearchBar /> */}
      <Box
        sx={{
          width: { md: "99.8%", sx: "90%" },
          height: 65,
          border: 1,
          borderColor: "#e0e0e0",
          background: "#fff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: { md: "sticky", xs: "sticky" },
          top: { md: 214, xs: 50 },
          bottom: 0,
          zIndex: 5,
        }}
      >
        <FormControl
          sx={{ m: 0, width: { md: "65ch", xs: "45ch" } }}
          variant="outlined"
          size="small"
          onChange={debounceForData}
        >
          <OutlinedInput
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
            placeholder="Search products"
          />
        </FormControl>
      </Box>
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
              {loading && <StoreitemSkeleton />}

              {!loading && products.length === 0 && (
                <Typography variant="h6">No items found</Typography>
              )}
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
