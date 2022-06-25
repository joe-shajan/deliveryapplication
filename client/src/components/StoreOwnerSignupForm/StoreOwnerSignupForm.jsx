import React, { useEffect, useState } from "react";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LoginIcon from "../../Images/loginicon.png";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import {
  Backdrop,
  CircularProgress,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Zoom,
} from "@mui/material";
import { registerStore } from "../../Redux/actions/storeAction";
import { useDispatch, useSelector } from "react-redux";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import validationSchema from "../../validations/storeRegisterValidation";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import getBase64 from "../../Helpers/convertIntoB64";
import { useNavigate } from "react-router-dom";

const ImgBoxStyle = {
  height: "100%",
  width: "100%",
  cursor: "pointer",
  display: "flex",
  flexDirection: "column",
  border: 1,
  borderColor: "#c4c4c4",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: 2,
};

const NewObjectWithBase64Image = async (data) => {
  let newData = {
    firstname: data.firstname,
    lastname: data.lastname,
    storename: data.storename,
    city: data.city,
    address: data.address,
    email: data.email,
    phoneno: data.phoneno,
    password: data.password,
  };

  let logo = await getBase64(data.logo);
  if (logo) newData.logo = logo;

  return newData;
};

const StoreOwnerSignupForm = ({ props }) => {
  const [selectedLogo, setSelectedLogo] = useState(null);
  const [logoUrl, setLogoUrl] = useState(null);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data) => {
    let newData = await NewObjectWithBase64Image(data);
    dispatch(registerStore(newData));
  };

  const storeRegister = useSelector((state) => state.storeRegister);
  const { loading, error, storeInfo } = storeRegister;
  if (error) console.log(error);
  if (storeInfo) {
    navigate(`/store-owner/${storeInfo.id}`);
  }

  useEffect(() => {
    if (selectedLogo) {
      setLogoUrl(URL.createObjectURL(selectedLogo));
    }
  }, [selectedLogo]);

  return (
    <Zoom in={true}>
      {
        <Container
          component="main"
          maxWidth="md"
          sx={{ marginTop: 3, p: 5, borderRadius: 5, boxShadow: 2 }}
        >
          <CssBaseline />
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
            open={loading}
            //   onClick={handleClose}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              // alignItems: "center",
            }}
          >
            <img src={LoginIcon} alt="" style={{ width: 60 }} />

            <Typography component="h1" variant="h5">
              Sign up
            </Typography>
            <Box
              component="form"
              noValidate
              onSubmit={handleSubmit(onSubmit)}
              sx={{ mt: 3 }}
            >
              <Grid container spacing={2}>
                {/* first name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoComplete="given-name"
                    name="firstname"
                    required
                    fullWidth
                    id="firstname"
                    label="First Name"
                    autoFocus
                    {...register("firstname")}
                    error={errors.firstname ? true : false}
                    helperText={errors.firstname?.message}
                  />
                </Grid>
                {/* last name */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="lastname"
                    label="Last Name"
                    name="lastname"
                    autoComplete="family-name"
                    {...register("lastname")}
                    error={errors.lastname ? true : false}
                    helperText={errors.lastname?.message}
                  />
                </Grid>
                {/* Store name */}
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    fullWidth
                    id="storename"
                    label="Store Name"
                    name="sotename"
                    autoComplete="Store name"
                    {...register("storename")}
                    error={errors.storename ? true : false}
                    helperText={errors.storename?.message}
                  />
                </Grid>
                {/* city */}
                <Grid item xs={12} sm={6}>
                  <FormControl fullWidth>
                    <InputLabel id="demo-simple-select-label">City</InputLabel>
                    <Select
                      labelId="demo-simple-select-label"
                      id="demo-simple-select"
                      label="City"
                      {...register("city")}
                      error={errors.city ? true : false}
                      //   helperText={errors.city?.message}
                    >
                      <MenuItem value="kochi">Kochi</MenuItem>
                    </Select>
                    <Typography sx={{ color: "#D32F2F", fontSize: 12 }}>
                      {errors.city?.message}
                    </Typography>
                  </FormControl>
                </Grid>
                {/* Address */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="address"
                    label="Address"
                    name="address"
                    {...register("address")}
                    error={errors.address ? true : false}
                    helperText={errors.address?.message}
                  />
                </Grid>
                {/* Email */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="email"
                    label="Email"
                    type="email"
                    id="email"
                    {...register("email")}
                    error={errors.email ? true : false}
                    helperText={errors.email?.message}
                  />
                </Grid>
                {/* phone no */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    id="phoneno"
                    label="Phoneno "
                    name="phoneno"
                    {...register("phoneno")}
                    error={errors.phoneno ? true : false}
                    helperText={errors.phoneno?.message}
                  />
                </Grid>
                {/* password */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    {...register("password")}
                    error={errors.password ? true : false}
                    helperText={errors.password?.message}
                  />
                </Grid>
                {/* Re password */}
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    fullWidth
                    name="repassword"
                    label="Re Password"
                    type="password"
                    id="repassword"
                    {...register("repassword")}
                    error={errors.repassword ? true : false}
                    helperText={errors.repassword?.message}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Box sx={{ height: 100, width: 100, ml: 3 }}>
                    <Controller
                      control={control}
                      name="logo"
                      inputRef={register()}
                      render={({ field: { onChange } }) => (
                        <input
                          type="file"
                          id="logo"
                          //   name="image3"
                          style={{ display: "none" }}
                          onChange={(e) => {
                            onChange(e.target.files[0]);
                            setSelectedLogo(e.target.files[0]);
                          }}
                        />
                      )}
                    />
                    <label htmlFor="logo">
                      <Box sx={ImgBoxStyle}>
                        {logoUrl && selectedLogo ? (
                          <img
                            src={logoUrl}
                            alt={selectedLogo.name}
                            width="97%"
                            height="97%"
                            style={{ objectFit: "contain" }}
                          />
                        ) : (
                          <>
                            <CloudUploadIcon sx={{ color: "#00D290" }} />
                            <Typography sx={{ fontSize: 12 }}>
                              upload Logo
                            </Typography>
                          </>
                        )}
                      </Box>
                    </label>
                    <Typography
                      variant="inherit"
                      color="red"
                      sx={{ fontSize: 12 }}
                    >
                      {errors.logo?.message}
                    </Typography>
                  </Box>
                </Grid>
              </Grid>
              <Box fullWidth sx={{ textAlign: "center" }}>
                <Button
                  type="submit"
                  variant="contained"
                  loading={loading}
                  sx={{ mt: 3, mb: 2 }}
                >
                  Sign Up
                </Button>
              </Box>
              <Grid container justifyContent="flex-end">
                <Grid item>
                  <Link
                    variant="body2"
                    sx={{ cursor: "pointer" }}
                    onClick={() => props.setLogin(!props.login)}
                  >
                    Already have an account? Sign in
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

export default StoreOwnerSignupForm;
