import React, { useState } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import StoreOwnerHeader from "../../../components/StoreOwnerHeader/StoreOwnerHeader";
import StoreOwnerLoginForm from "../../../components/StoreOwnerLoginForm/StoreOwnerLoginForm";
import StoreOwnerSignupForm from "../../../components/StoreOwnerSignupForm/StoreOwnerSignupForm";

const theme = createTheme();

const LoginOrSignup = () => {
  const [login, setLogin] = useState(true);

  return (
    <ThemeProvider theme={theme}>
      <StoreOwnerHeader />
      {login ? (
        <StoreOwnerLoginForm props={{login,setLogin}}/>
      ) : (
        <StoreOwnerSignupForm props={{login,setLogin}}/>
      )}
    </ThemeProvider>
  );
};

export default LoginOrSignup;
