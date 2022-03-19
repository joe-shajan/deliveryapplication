import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import Store from "../../../components/Store/Store";
import UserHeader from "../../../components/UserHeader/UserHeader";
import Banner from "../../../Images/banner.jpg";
import { Link } from "react-router-dom";
import { listStores } from "../../../actions/storeAction";
import BackdropLoader from "../../../components/BackdropLoader/BackdropLoader";

const UserHome = () => {
  const dispatch = useDispatch();
  const storeList = useSelector((state) => state.storeList);
  const { loading, error, stores } = storeList;

  useEffect(() => {
    dispatch(listStores());
  }, [dispatch]);

  return (
  
    <>
      <UserHeader />
      <Container maxWidth="lg" sx={{ mt: { md: 5, xs: 2 } }}>
        <img
          src={Banner}
          alt=""
          style={{ width: "100%", borderRadius: "15px" }}
        />
        <Typography variant="h5" sx={{ pt: 3, pl: 2 }}>
          Store's near you
        </Typography>
        {/* store component */}
        {loading ? (
         <BackdropLoader/>
        ):error?(
          <Typography>{error}</Typography>
        ):(

        <Store prop={stores} />
        )}
        {/* store component */}
        <Link to="/all-stores" style={{ textDecoration: "none" }}>
          <Typography variant="h6" align="center" sx={{ pt: 3, pl: 2, pb: 10 }}>
            View all stores
          </Typography>
        </Link>
      </Container>
    </>
  );
};

export default UserHome;
