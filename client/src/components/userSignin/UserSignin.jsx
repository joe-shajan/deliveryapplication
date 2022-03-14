import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import validationSchema from "../../validations/userSigninValidation";
import { Toast } from "../../Helpers/alerts";
import { Backdrop, Button, CircularProgress, Grid, Link } from "@mui/material";
import loginIcon from "../../Images/loginicon.png";
import { Box } from "@mui/system";

const UserSignin = ({ props }) => {
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
      let { data } = await axios.post("/user/signin", userData);
      localStorage.setItem("userid", data._id);
      setBackdropOpen(false);
      props.signinSetOpen(false);
      Toast.fire({
        icon: "success",
        title: "Signed in successfully",
      });
      props.setFlag(!props.flag);
      reset({
        email: "",
        password: "",
      });
    } catch (error) {
      setBackdropOpen(false);
      alert(error.response.data.message);
    }
  };

  return (
    <Dialog
      open={props.signinOpen}
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
      <Box sx={{ display: "flex", alignItems: "center", m: 2 }}>
        <img
          src={loginIcon}
          alt=""
          srcset=""
          style={{ width: "50px", height: "50px" }}
        />
        <DialogTitle>Sign in</DialogTitle>
      </Box>
      <Grid container>
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
      </Grid>

      <DialogActions>
        <Button onClick={() => props.signinSetOpen(false)}>Cancel</Button>
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
            props.signinSetOpen(false)
            props.signupSetOpen(true)
          }}
        >
          Create new account? Sign up
        </Link>
      </DialogContent>
    </Dialog>
  );
};

export default UserSignin;
