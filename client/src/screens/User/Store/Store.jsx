import React, { useEffect, useState } from "react";
import UserHeader from "../../../components/UserHeader/UserHeader";
import StoreSubHeader from "../../../components/StoreSubHeader/StoreSubHeader";
import StoreSearchBar from "../../../components/StoreSearchBar/StoreSearchBar";
import { Container, Grid, Typography, IconButton } from "@mui/material";
import { Box } from "@mui/system";
import StoreItem from "../../../components/StoreItem/StoreItem";
import axios from "axios";
import { useParams } from "react-router-dom";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const Store = () => {
  const [storeItems, setStoreItems] = useState([]);
  const [store, setStore] = useState({});
  const { storeid } = useParams();

  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };

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
      <StoreSubHeader props={store} />
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
              <Typography variant="h5">Your Cart</Typography>
              <Typography variant="subtitle1">1 item</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "45vh",
                  overflow: "auto",
                }}
              >
                {[1, 1, 1, 1].map(() => (
                  <Box sx={{ width: "99%", height: 80 }}>
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
                        <Typography variant="subtitle2">
                          Dettol Original Hand Wash Pump
                        </Typography>
                        <Typography variant="caption">200 ml</Typography>
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
                            <RemoveIcon
                              sx={{ fontSize: 15, color: "#00B37A" }}
                            />
                          </IconButton>
                          <Typography variant="overline"> {num} </Typography>
                          <IconButton onClick={incNum}>
                            <AddIcon sx={{ fontSize: 15, color: "#00B37A" }} />
                          </IconButton>
                        </Box>
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
                        <Typography variant="button">₹ 200</Typography>
                      </Grid>
                    </Grid>
                  </Box>
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
