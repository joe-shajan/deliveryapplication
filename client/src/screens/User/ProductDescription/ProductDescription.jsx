import {
  Button,
  CardMedia,
  Container,
  Divider,
  Grid,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ButtonGroupLarge from "../../../components/ButtonGroup/ButtonGroupLarge";
import CartItem from "../../../components/CartItem/CartItem";
import StoreSubHeaderProductDescription from "../../../components/StoreSubHeader/StoreSubHeaderProductDescription";
import UserHeader from "../../../components/UserHeader/UserHeader";

const ProductDescription = () => {
  const [product, setProduct] = useState({});
  const [store, setStore] = useState({});
  const { storeid } = useParams();
  const { productid } = useParams();

  useEffect(() => {
    try {
      (async () => {
        let { data } = await axios.get(`/product/${storeid}/${productid}`);
        setProduct(data.product);
        setStore(data.store);
      })();
    } catch (error) {
      console.log(error);
    }
  }, [storeid, productid]);
  console.log(product);
  return (
    <>
      <UserHeader />
      <StoreSubHeaderProductDescription props={store} />
      <Container>
        <Grid container sx={{ mt: 5 }}>
          <Grid
            item
            md={4}
            xs={12}
            sx={{
              display: "flex",
              flexDirection: "column",
              // justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box
              sx={{
                height: 350,
                width: 300,
                border: 1,
                borderColor: "#DCDCDC",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <img src={product.image1} alt="" style={{ width: "100%" }} />
            </Box>
            <Box sx={{width:300,mt:3,display:'flex',justifyContent: 'space-around'}}>
              <Box sx={{width:60,height:60,border:1,borderColor: "#DCDCDC",}}><img src={product.image1} alt="" style={{ width: "100%" }} /></Box>
              <Box sx={{width:60,height:60,border:1,borderColor: "#DCDCDC",}}><img src={product.image2} alt="" style={{ width: "100%" }} /></Box>
              <Box sx={{width:60,height:60,border:1,borderColor: "#DCDCDC",}}><img src={product.image3} alt="" style={{ width: "100%" }} /></Box>
              </Box>
          </Grid>
          <Grid item md={5} xs={12} sx={{ pl: 3 }}>
            <Box>
              <Typography
                variant="h4"
                sx={{ textTransform: "capitalize", mb: 3 }}
              >
                {product.productname}
              </Typography>
              <ButtonGroupLarge />
              <Typography sx={{ mt: 3, fontSize: 13 }}>
                {product.qty} {product.unit}
              </Typography>
              <Typography variant="h6" sx={{ mt: 1 }}>
                ₹{product.amount}
              </Typography>
            </Box>
          </Grid>
          <Grid item md={3} sx={{ display: { md: "block", xs: "none" } }}>
            <Box>
              <Typography variant="h5">Your Cart</Typography>
              <Typography variant="subtitle1">1 item</Typography>
              <Box
                sx={{
                  width: "100%",
                  height: "45vh",
                  overflow: "auto",
                }}
              >
                  <CartItem />
                
              </Box>
              <Button
                size="small"
                variant="contained"
                sx={{
                  backgroundColor: "#00D290",
                  height: 40,
                  width: "100%",
                  borderRadius: 5,
                  mt: 4,
                  display: "flex",
                  justifyContent: "space-around",
                }}
                // onClick={() => signinSetOpen(true)}
              >
                <span style={{fontWeight: "bold"}}>Checkout</span>
                <span style={{fontWeight: "bold",fontSize:15}}>₹ 200</span>
              </Button>
            </Box>
          </Grid>
          <Grid item xs={12} p={5}>
            <Typography variant="h5">Description</Typography>
            <Typography variant="body2">{product.description}</Typography>
            </Grid>
        </Grid>
      </Container>
    </>
  );
};

export default ProductDescription;
