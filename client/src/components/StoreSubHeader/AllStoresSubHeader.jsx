import { CardMedia, Container, Typography } from '@mui/material'
import { Box } from '@mui/system'
import React from 'react'
import grocery from "../../Images/grocery.png";

const AllStoresSubHeader = ({props}) => {
  return (
    <Box
    sx={{
      width: "100%",
      height: 150,
      backgroundColor: "#F7FDFA",
    }}
  >
    <Container maxWidth="lg" sx={{ height: "100%" }}>
      <Box sx={{ height: "100%", display: "flex", alignItems: "center" }}>
        <Box
          sx={{
            width: 100,
            height: 100,
            ml: { md: 7 },
            backgroundColor: "#E4F9F1",
            borderRadius: 5,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <CardMedia
            component="img"
            sx={{ width: "50%", borderRadius: 4 }}
            image={grocery}
            alt="Live from space album cover"
          />
        </Box>
        <Box
          sx={{
            width: 300,
            height: 80,
            ml: { md: 3, xs: 2 },
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <Typography
            component="div"
            variant="h5"
            sx={{ fontWeight: "bold" }}
          >
            Order Daily Grocery
          </Typography>
          <Typography
            component="div"
            variant="subtitle1"
            color="text.secondary"
            sx={{ fontWeight: "bold" }}
          >
           {props.noOfStores} Stores
          </Typography>
        </Box>
      </Box>
    </Container>
  </Box>
  )
}

export default AllStoresSubHeader