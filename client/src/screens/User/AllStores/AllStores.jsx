import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Typography } from "@mui/material";
import Store from "../../../components/Store/Store";
import UserHeader from "../../../components/UserHeader/UserHeader";
import { listStores } from "../../../actions/storeAction";
import AllStoresSubHeader from "../../../components/StoreSubHeader/AllStoresSubHeader";
import BackdropLoader from "../../../components/BackdropLoader/BackdropLoader";

const AllStores = () => {
  const dispatch = useDispatch();
  const storeList = useSelector((state) => state.storeList);
  const { loading, error, stores } = storeList;
  useEffect(() => {
    dispatch(listStores());
  }, [dispatch]);

  return (
    <>
      <UserHeader />
      <AllStoresSubHeader props={{ noOfStores: stores.length }} />
      <Container>
      {loading ? (
          <BackdropLoader/>
        ):error?(
          <Typography>{error}</Typography>
        ):(

        <Store prop={stores} />
        )}
      </Container>
    </>
  );
};

export default AllStores;
