import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import validationSchema from "../../validations/userSignupValidation";
import { Toast } from "../../Helpers/alerts";
import {
  Backdrop,
  Button,
  CircularProgress,
  Grid,
  Link,
  Zoom,
} from "@mui/material";

const UserSignup = ({ props }) => {
  const [backdropOpen, setBackdropOpen] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (userData) => {
    setBackdropOpen(true);
    try {
      let { data } = await axios.post("/user", userData);
      localStorage.setItem("userid", data._id);
      setBackdropOpen(false);
      props.signupSetOpen(false);
      Toast.fire({
        icon: "success",
        title: "Signed up successfully",
      });
      props.setFlag(!props.flag);
      reset({
        username: "",
        email: "",
        phoneno: "",
        password: "",
        repassword: "",
      });
    } catch (error) {
      setBackdropOpen(false);
      alert(error.response.data.message);
    }
  };

  return (
        <Dialog
          open={props.signupOpen}
          // onClose={handleClose}
          sx={{ borderRadius: 50 }}
          maxWidth="xs"
        >
          <Backdrop
            sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
            open={backdropOpen}
          >
            <CircularProgress color="inherit" />
          </Backdrop>
          <DialogTitle>Sign up</DialogTitle>
          <Grid container>
            <Grid item md={12} xs={12}>
              {/* user name */}
              <DialogContent sx={{ pt: 2 }}>
                <TextField
                  autoFocus
                  label="User Name"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("username")}
                  error={errors.username ? true : false}
                  helperText={errors.username?.message}
                />
              </DialogContent>
              {/* user name */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* email */}
              <DialogContent sx={{ pt: 1 }}>
                <TextField
                  label="Email"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("email")}
                  error={errors.email ? true : false}
                  helperText={errors.email?.message}
                />
              </DialogContent>
              {/* email */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* phone no */}
              <DialogContent sx={{ pt: 1 }}>
                <TextField
                  label="Phone no"
                  type="text"
                  fullWidth
                  variant="outlined"
                  {...register("phoneno")}
                  error={errors.phoneno ? true : false}
                  helperText={errors.phoneno?.message}
                />
              </DialogContent>
              {/* phone no */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* password */}
              <DialogContent sx={{ pt: 1 }}>
                <TextField
                  label="Password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  {...register("password")}
                  error={errors.password ? true : false}
                  helperText={errors.password?.message}
                />
              </DialogContent>
              {/* password */}
            </Grid>
            <Grid item md={12} xs={12}>
              {/* Re enter password */}
              <DialogContent sx={{ pt: 1 }}>
                <TextField
                  label="Re-enter password"
                  type="password"
                  fullWidth
                  variant="outlined"
                  {...register("repassword")}
                  error={errors.repassword ? true : false}
                  helperText={errors.repassword?.message}
                />
              </DialogContent>
              {/* re enter password */}
            </Grid>
          </Grid>

          <DialogActions>
            <Button onClick={() => props.signupSetOpen(false)}>Cancel</Button>
            <Button
              size="small"
              variant="contained"
              sx={{
                backgroundColor: "#00D290",
                height: 30,
                borderRadius: 5,
                m: 1,
              }}
              onClick={handleSubmit(onSubmit)}
            >
              Sign in
            </Button>
          </DialogActions>
          <DialogContent sx={{ pt: 1 }}>
            <Link
              variant="body2"
              sx={{ cursor: "pointer" }}
              onClick={() => {
                props.signupSetOpen(false);
                props.signinSetOpen(true);
              }}
            >
              Already have an account? Sign in
            </Link>
          </DialogContent>
        </Dialog>
   
  );
};

export default UserSignup;
