import React from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "../../Images/loginicon.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { Backdrop, CircularProgress, Zoom } from "@mui/material";

import { useDispatch, useSelector } from "react-redux";
import { storeLogin } from "../../actions/storeAction";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import validationSchema from "../../validations/storeOwnerLoginValidation";
import { useNavigate } from "react-router-dom";

const StoreOwnerLoginForm = ({ props }) => {
//   const MySwal = withReactContent(Swal);
  const navigate = useNavigate();
  const dispatch = useDispatch();
 

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    dispatch(storeLogin(data));
      
     
  };

  const storeOwner = useSelector((state) => state.storeOwner);
  const { loading, error, storeInfo } = storeOwner;

  if (storeInfo) {
    navigate(`/store-owner/${storeInfo._id}`);
  }
  return (
    <Zoom in={true}>
      {
        <Container
          component="main"
          maxWidth="sm"
          sx={{ marginTop: 8, p: 5, borderRadius: 5, boxShadow: 2 }}
        >
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
            open={loading}
            //   onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <CssBaseline />
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            <img src={LoginIcon} alt="" style={{ width: 60 }} />

            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Typography sx={{color:"#D63F3F"}}>{error?error:''}</Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* Email or phone*/}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="Email"
                    label="Email or Phone no"
                    type="Email"
                    id="Email"
                    {...register("EmailOrPhone")}
                    error={errors.EmailOrPhone ? true : false}
                    helperText={errors.EmailOrPhone?.message}
                  />
                </Grid>
                
                {/* password */}
                <Grid item xs={12}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register("Password")}
                    error={errors.Password ? true : false}
                    helperText={errors.Password?.message}
                  />
                </Grid>
              </Grid>
              <Box fullWidth sx={{ textAlign: "center" }}>
                <Button type="submit" variant="contained" sx={{ mt: 3, mb: 2 }}>
                  Sign In
                </Button>
              </Box>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => props.setLogin(!props.login)}
                  >
                    Create new account? Sign up
                  </Link>
                </Grid>
              </Grid>
            </Box>
          </Box>
        </Container>
      }
    </Zoom>
  );
};

export default StoreOwnerLoginForm;
