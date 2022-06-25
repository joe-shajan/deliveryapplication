import { Box, Button, Container, Grid, Typography } from "@mui/material";
import React from "react";
import CartItem from "../../../components/CartItem/CartItem";
import UserHeader from "../../../components/UserHeader/UserHeader";
import Divider from "@mui/material/Divider";
import { useSelector } from "react-redux";

const Cart = () => {
  const { cartitems } = useSelector((state) => state.cart);

  let total = 0;
  for (let item of cartitems) {
    total += item.producttotal;
  }
  return (
    <>
      <UserHeader />
      <Container sx={{ mt: 5 }}>
        <Grid container spacing={5}>
          <Grid item xs={12} md={8}>
            <Box
              sx={{
                width: "100%",
                height: "100%",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
              }}
            >
              <Box
                sx={{
                  width: "100%",
                  height: "auto",
                  boxShadow: 4,
                  borderRadius: 3,
                }}
              >
                {/* address */}
                <Box sx={{ m: 3 }}>
                  <Box
                    sx={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <Typography variant="h6">Delivery address</Typography>
                    <Button>Add new address</Button>
                  </Box>
                  <Box
                    sx={{
                      width: "100%",
                      height: "80%",
                      display: "flex",
                      justifyContent: "space-between",
                      mt: 2,
                    }}
                  >
                    <Box
                      sx={{
                        width: "46%",
                        height: 160,
                        border: 1,
                        borderColor: "#E0E0E0",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ p: 2 }}>
                        Home
                      </Typography>
                      <Typography variant="body2" sx={{ px: 2 }}>
                        address address address address address address address
                        address address address address address address address
                        address address address address address address
                      </Typography>
                    </Box>
                    <Box
                      sx={{
                        width: "46%",
                        height: 160,
                        border: 1,
                        borderColor: "#E0E0E0",
                        borderRadius: 2,
                      }}
                    >
                      <Typography variant="h6" sx={{ p: 2 }}>
                        Home
                      </Typography>
                      <Typography variant="body2" sx={{ px: 2 }}>
                        address address address address address address address
                        address address address address address address address
                        address address address address address address
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Box>
              <Box
                sx={{
                  width: "100%",
                  height: "46%",
                  boxShadow: 4,
                  borderRadius: 3,
                }}
              >
                <Button>Pay</Button>
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} md={4}>
            <Box sx={{ boxShadow: 4, p: 2, borderRadius: 3 }}>
              <Typography variant="h5">Your Cart</Typography>
              <Typography variant="subtitle1">
                {cartitems.length} item
              </Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "45vh",
                  overflow: "auto",
                }}
              >
                <CartItem />
              </Box>
              <Box
                sx={{
                  width: "100%",
                  maxWidth: 360,
                  bgcolor: "background.paper",
                }}
              >
                <Box sx={{ my: 1, mx: 2 }}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h6" component="div">
                        Invoice
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ my: 0, mx: 2 }}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="button" component="div">
                        Item Total
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="button" component="div">
                        ₹ {total}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ my: 0, mx: 2 }}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="button" component="div">
                        Partner delivery fee
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="button" component="div">
                        ₹ 120
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
                <Divider variant="middle" />
                <Box sx={{ my: 0, mx: 2 }}>
                  <Grid container alignItems="center">
                    <Grid item xs>
                      <Typography gutterBottom variant="h6" component="div">
                        To pay
                      </Typography>
                    </Grid>
                    <Grid item>
                      <Typography gutterBottom variant="h6" component="div">
                        ₹ {total + 120}
                      </Typography>
                    </Grid>
                  </Grid>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default Cart;
