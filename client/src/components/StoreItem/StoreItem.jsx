import { Button, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import axios from "axios";
import React from "react";
import { Link, useParams } from "react-router-dom";
import ButtonGroupLarge from "../ButtonGroup/ButtonGroupLarge";
// import GroupedButtons from "../../components/ButtonGroup/ButtonGroup";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "../../actions/cartActions";
import LoadingButton from "@mui/lab/LoadingButton";

const StoreItem = ({ props }) => {
  const dispatch = useDispatch();

  const { storeid } = useParams();

  const { loading, success, error } = useSelector((state) => state.cart);

  const AddItem = async (productid) => {
    const userid = localStorage.getItem("userid");
    if (userid) {
      dispatch(addToCart(userid, storeid, productid));
    } else {
      alert("no user found");
    }
  };
  
  return (
    <Grid container sx={{ ":hover": { boxShadow: 5 } }}>
      <Grid item xs={3} sm={2.5} md={2.5}>
        <Box
          sx={{
            width: "100%",
            height: { md: 124, xs: 100 },
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <img src={props.image1} alt="" style={{ width: "60%" }} />
        </Box>
      </Grid>
      <Grid item xs={7} md={7.5}>
        <Box
          sx={{
            width: "100%",
            height: { md: 124, xs: 100 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Link
            to={`/store/${storeid}/product/${props._id}`}
            style={{ textDecoration: "none" }}
          >
            <Typography
              variant="body1"
              component="h2"
              fontWeight="600"
              sx={{
                m: { md: 0.5 },
                color: "black",
                "&:hover": { color: "#00D290" },
              }}
            >
              {props.productname}
            </Typography>
          </Link>
          <Typography
            variant="body2"
            component="h2"
            color="#6F7588"
            sx={{ m: { md: 0.5 } }}
          >
            {props.qty} {props.unit}
          </Typography>
          <Typography
            variant="body1"
            component="h2"
            fontWeight="700"
            color={"black"}
            sx={{ m: { md: 0.5 } }}
          >
            ₹ {props.amount}
          </Typography>
        </Box>
      </Grid>
      <Grid item xs={2} md={2}>
        <Box
          sx={{
            width: "100%",
            height: { md: 124, xs: 100 },
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          {/* <ButtonGroupLarge /> */}
          {/* <GroupedButtons /> */}
          {/* {loading ? ( */}
            {/* <LoadingButton
              loading={false}
              variant="contained"
              sx={{
                backgroundColor: "#00D290",
                height: 30,
                borderRadius: 5,
                m: 1,
              }}
            >
              ADD
            </LoadingButton> */}
          {/* // ) : ( */}
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#00D290",
                height: 30,
                borderRadius: 5,
                m: 1,
              }}
              onClick={() => AddItem(props._id)}
            >
              ADD
            </Button>
          {/* )} */}
        </Box>
      </Grid>
    </Grid>
  );
};

export default StoreItem;
