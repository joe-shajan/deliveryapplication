import { Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import GroupedButtons from "../../components/ButtonGroup/ButtonGroup";

const StoreItem = ({ props }) => {
  console.log(props);
  return (
    <Grid container sx={{ ":hover": { boxShadow: 5 } }} >
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
          <Typography
            variant="body1"
            component="h2"
            fontWeight="600"
            sx={{ m: { md: 0.5 } }}
          >
            {props.productname}
          </Typography>
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
          <GroupedButtons />
        </Box>
      </Grid>
    </Grid>
  );
};

export default StoreItem;
