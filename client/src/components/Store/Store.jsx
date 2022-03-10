import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import AccessTimeOutlinedIcon from "@mui/icons-material/AccessTimeOutlined";
import xpresslogo from "../../Images/xpress.jpg";
import { Grid } from "@mui/material";
import { Link } from "react-router-dom";
export default function Store({prop}) {
  return (
    <Grid container spacing={3} sx={{mt:1,p:{md:5}}}>
        {prop.map((store,index)=>(
            <Grid item xs={12} md={6} key={index}>
              <Link to={`/store/${store._id}`}>
            <Card sx={{ display: "flex", boxShadow: 0, padding:1,borderRadius: 4, ":hover":{ boxShadow: 5} }}>
              <CardMedia
                component="img"
                sx={{ width: {md:"25%",xs:"35%",sm:"25%"}, borderRadius: 4 }}
                image={store.logo}
                alt="Live from space album cover"
              />
              <Box sx={{ display: "flex", flexDirection: "column" }}>
                <CardContent sx={{ flex: "1 0 auto" }}>
                  <Typography component="div" variant="h5">
                    {store.storename}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    {store.address}
                  </Typography>
                </CardContent>
                <Box sx={{ display: "flex", alignItems: "center", pl: 2, pb: 1 }}>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    1.1 km
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    <AccessTimeOutlinedIcon
                      fontSize="small"
                      sx={{ mt: 1, ml: 2, mr: 1 }}
                    />
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    color="text.secondary"
                    component="div"
                  >
                    14 mins
                  </Typography>
                </Box>
                
              </Box>
              
            </Card>
            </Link>
          </Grid>
        ))}
      
    </Grid>
  );
}
