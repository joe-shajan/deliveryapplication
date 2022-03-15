import { Box, Grid, IconButton, Typography } from '@mui/material'
import React, { useState } from 'react'
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

const CartItem = () => {
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
  return (
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
  )
}

export default CartItem