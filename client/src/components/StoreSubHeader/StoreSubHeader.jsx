import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";
import AccessTimeFilledOutlinedIcon from "@mui/icons-material/AccessTimeFilledOutlined";

const StoreSubHeader = ({props}) => {
  console.log(props);
  return (
    <Box
      sx={{
        width: "100%",
        height: 150,
        backgroundColor: "#F7FDFA",
        position: {md:"sticky",xs:''},
        top: 64,
        bottom: 0,
        zIndex: 5,
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            sx={{ width: 100, borderRadius: 4, ml: { md: 5 } }}
            image={props.logo}
            alt="Live from space album cover"
          />

          <Box
            sx={{
              width: 400,
              height: 80,
              ml: { md: 3, xs: 2 },
              display: "flex",
              flexDirection: "column",
              alignContent: "space-around",
            }}
          >
            <Typography
              component="div"
              variant="h5"
              sx={{ fontWeight: "bold" }}
            >
              {props.storename}
            </Typography>
            <Typography
              component="div"
              variant="subtitle1"
              color="text.secondary"
              sx={{
                fontSize: { md: 15, xs: 10 },
                mt: 1,
                display: "flex",
                alignItems: "center",
              }}
            >
              {props.address} &nbsp; &bull; &nbsp;{" "}
              <AccessTimeFilledOutlinedIcon
                sx={{ color: "#94DFC7", fontSize: { xs: 12, md: 17 } }}
              />
              &nbsp; 18 mins &nbsp; &bull; &nbsp; Free Delivery
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StoreSubHeader;
