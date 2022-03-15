import { Box, CardMedia, Container, Typography } from "@mui/material";
import React from "react";

const StoreSubHeaderProductDescription = ({props}) => {
  console.log(props);
  return (
    <Box
      sx={{
        width: "100%",
        height: 100,
        backgroundColor: "#F7FDFA",
      }}
    >
      <Container maxWidth="lg" sx={{ height: "100%" }}>
        <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
          <CardMedia
            component="img"
            sx={{ width: 70, borderRadius: 4, ml: { md: 5 } }}
            image={props.logo}
            alt="Loading..."
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
              variant="h6"
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
              {props.address}
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default StoreSubHeaderProductDescription;
