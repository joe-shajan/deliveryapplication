import React, { useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader/UserHeader";
import StoreSubHeader from "../../../components/StoreSubHeader/StoreSubHeader";
import StoreSearchBar from "../../../components/StoreSearchBar/StoreSearchBar";
import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import StoreItem from "../../../components/StoreItem/StoreItem";
import axios from "axios";
import { useParams } from "react-router-dom";
const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [store,setStore] = useState({})
  const { storeid } = useParams();
  useEffect(() => {
    try {
      (async () => {
        let { data } = await axios.get(`/product/products/${storeid}`);
        setStoreItems(data.products);
        setStore(data.store);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [storeid]);
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
              {[
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
              ))}
            </Box>
          </Grid>
          <Grid item xs={12} md={7}>
            <Box sx={{ width: "100%", border: 1, borderColor: "#e0e0e0" }}>
              {storeItems.map((data) => (
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
              <h1>your cart</h1>
              <Box
                sx={{
                  width: "100%",
                  height: "45vh",
                  // border: 1,

                  overflow: "auto",
                }}
              >
                {[1, 1, 1, 1, 1, 1, 1].map(() => (
                  <h5>Cart product</h5>
                ))}
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Store;
