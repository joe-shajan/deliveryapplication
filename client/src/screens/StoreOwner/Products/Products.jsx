import {
  Backdrop,
  Box,
  Button,
  CircularProgress,
  FormControl,
  Grid,
  InputAdornment,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import OwnerTable from "../../../components/OwnerTable/OwnerTable";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";
import { useDispatch, useSelector } from "react-redux";
import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import axios from "axios";
import validationSchema from "../../../validations/addProductValidation";
import getBase64 from "../../../Helpers/convertIntoB64";
import { createProduct } from "../../../actions/productAction";
import { Toast } from "../../../Helpers/alerts";

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

const NewObjectWithBase64Image = async (data, storeid) => {
  let newData = {
    storeid: storeid,
    productname: data.productname,
    unit: data.unit,
    qty: data.qty,
    amount: data.amount,
    exprmonths: data.exprmonths,
    category: data.category,
    units: data.units,
    description: data.description,
  };

  let image1 = await getBase64(data.image1);
  if (image1) newData.image1 = image1;
  let image2 = await getBase64(data.image2);
  if (image2) newData.image2 = image2;
  let image3 = await getBase64(data.image3);
  if (image3) newData.image3 = image3;

  return newData;
};

const Products = () => {
  const dispatch = useDispatch();

  const [backdropOpen, setBackdropOpen] = React.useState(false);
  const [open, setOpen] = React.useState(false);
  const [selectedImage1, setSelectedImage1] = useState(null);
  const [imageUrl1, setImageUrl1] = useState(null);
  const [selectedImage2, setSelectedImage2] = useState(null);
  const [imageUrl2, setImageUrl2] = useState(null);
  const [selectedImage3, setSelectedImage3] = useState(null);
  const [imageUrl3, setImageUrl3] = useState(null);

  const {
    register,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(validationSchema),
  });

  // const addProduct = useSelector((state) => state.createProduct);
  // const { loading, error, product } = addProduct;
  // if (product) {
  //   // reset({
  //   //   productname: "",
  //   //   unit: "",
  //   //   qty: "",
  //   //   amount: "",
  //   //   exprmonths: "",
  //   //   category: "",
  //   //   units: "",
  //   //   description: "",
  //   // });
  //   // setImageUrl1(null);
  //   // setImageUrl2(null);
  //   // setImageUrl3(null);
  //   setOpen(false);
  //   Toast.fire({
  //     icon: "success",
  //     title: "Product added succesfully",
  //   });
  // }

  let { storeid } = useParams();
  const onSubmit = async (data) => {
    setBackdropOpen(true);
    let newData = await NewObjectWithBase64Image(data, storeid);
    // dispatch(createProduct(newData));
    try {
      let response = await axios.post("/product", newData);
      if (response) {
        reset({
          productname: "",
          unit: "",
          qty: "",
          amount: "",
          exprmonths: "",
          category: "",
          units: "",
          description: "",
        });
        setImageUrl1(null);
        setImageUrl2(null);
        setImageUrl3(null);
        setOpen(false);
        setBackdropOpen(false);
        Toast.fire({
          icon: "success",
          title: "Product added succesfully",
        });
      }
    } catch (error) {
      Toast.fire({
        icon: "error",
        title: error.response.message,
      });
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    if (selectedImage1) {
      setImageUrl1(URL.createObjectURL(selectedImage1));
    }
    if (selectedImage2) {
      setImageUrl2(URL.createObjectURL(selectedImage2));
    }
    if (selectedImage3) {
      setImageUrl3(URL.createObjectURL(selectedImage3));
    }
  }, [selectedImage1, selectedImage2, selectedImage3]);

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          width: { md: "100%", xs: "100%" },
          height: "70vh",
        }}
      >
        <Box
          sx={{
            width: { md: "80%", xs: "100%" },
            display: "flex",
            justifyContent: "flex-end",
            m: 3,
          }}
        >
          <Button variant="outlined" onClick={handleClickOpen}>
            Add new item
          </Button>
        </Box>
        <OwnerTable />
      </Box>

      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ borderRadius: 50 }}
        maxWidth="md"
      >
        <Backdrop
          sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
          open={backdropOpen}
        >
          <CircularProgress color="inherit" />
        </Backdrop>
        <DialogTitle>Add new Product</DialogTitle>
        <Grid container>
          <Grid item md={12} xs={12}>
            {/* product name */}
            <DialogContent>
              <TextField
                autoFocus
                id="productname"
                name="productname"
                label="Product Name"
                type="text"
                fullWidth
                variant="outlined"
                {...register("productname")}
                error={errors.productname ? true : false}
                helperText={errors.productname?.message}
              />
            </DialogContent>
            {/* product name */}
          </Grid>
          <Grid item md={12}>
            <Grid container>
              <Grid item md={2} xs={6}>
                {/* unit */}
                <DialogContent>
                  <TextField
                    id="filled-select-currency"
                    select
                    type="string"
                    label="Unit"
                    fullWidth
                    variant="filled"
                    {...register("unit")}
                    error={errors.unit ? true : false}
                    helperText={errors.unit?.message}
                  >
                    {["KG", "G", "ML", "L"].map((option) => (
                      <MenuItem key={option} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </DialogContent>
                {/* unit */}
              </Grid>
              <Grid item md={3} xs={6}>
                {/* quaintity */}
                <DialogContent>
                  <TextField
                    id="name"
                    label="Qty"
                    // type="number"
                    fullWidth
                    variant="outlined"
                    {...register("qty")}
                    error={errors.qty ? true : false}
                    helperText={errors.qty?.message}
                    sx={{ width: "100%" }}
                  />
                </DialogContent>
              </Grid>
              {/* quaintity */}
              {/* price */}
              <Grid item md={4} xs={6}>
                <DialogContent>
                  <FormControl fullWidth>
                    <InputLabel htmlFor="outlined-adornment-amount">
                      Amount
                    </InputLabel>
                    <OutlinedInput
                      id="outlined-adornment-amount"
                      type="number"
                      startAdornment={
                        <InputAdornment position="start">₹</InputAdornment>
                      }
                      label="Amount"
                      {...register("amount")}
                      error={errors.amount ? true : false}
                      helperText={errors.amount?.message}
                    />
                  </FormControl>
                </DialogContent>
              </Grid>
              {/* price */}
              {/* expiry months */}
              <Grid item md={3} xs={6}>
                <DialogContent>
                  <TextField
                    id="name"
                    label="expiration months"
                    type="number"
                    fullWidth
                    variant="outlined"
                    {...register("exprmonths")}
                    error={errors.exprmonths ? true : false}
                    helperText={errors.exprmonths?.message}
                  />
                </DialogContent>
              </Grid>
              {/* price */}
            </Grid>
          </Grid>
          <Grid item md={8} xs={12}>
            {/* category */}
            <DialogContent>
              <TextField
                id="name"
                label="category"
                type="text"
                fullWidth
                variant="outlined"
                {...register("category")}
                error={errors.category ? true : false}
                helperText={errors.category?.message}
              />
            </DialogContent>
            {/* category */}
          </Grid>
          <Grid item md={4} xs={12}>
            {/* category */}
            <DialogContent>
              <TextField
                id="name"
                label="No of units"
                type="number"
                fullWidth
                variant="outlined"
                {...register("units")}
                error={errors.units ? true : false}
                helperText={errors.units?.message}
              />
            </DialogContent>
            {/* category */}
          </Grid>
          <Grid item md={12} xs={12}>
            {/* description */}
            <DialogContent>
              <TextField
                placeholder="Product Description"
                multiline
                fullWidth
                rows={2}
                maxRows={4}
                {...register("description")}
                error={errors.description ? true : false}
                helperText={errors.description?.message}
              />
            </DialogContent>
            {/* description */}
          </Grid>
          <Grid item md={12} xs={12}>
            <DialogContent sx={{ display: "flex" }}>
              <Box sx={{ height: 100, width: 100 }}>
                <Controller
                  control={control}
                  name="image1"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <input
                      type="file"
                      id="select-image1"
                      //   name="image1"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        onChange(e.target.files[0]);
                        setSelectedImage1(e.target.files[0]);
                      }}
                    />
                  )}
                />
                <label htmlFor="select-image1">
                  <Box sx={ImgBoxStyle}>
                    {imageUrl1 && selectedImage1 ? (
                      <img
                        src={imageUrl1}
                        alt={selectedImage1.name}
                        width="97%"
                        height="97%"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <>
                        <CloudUploadIcon sx={{ color: "#00D290" }} />
                        <Typography sx={{ fontSize: 12 }}>
                          upload image
                        </Typography>
                      </>
                    )}
                  </Box>
                </label>
                <Typography variant="inherit" color="red" sx={{ fontSize: 12 }}>
                  {errors.image1?.message}
                </Typography>
              </Box>

              <Box sx={{ height: 100, width: 100, ml: 3 }}>
                <Controller
                  control={control}
                  name="image2"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <input
                      type="file"
                      id="select-image2"
                      //   name="image2"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        onChange(e.target.files[0]);
                        setSelectedImage2(e.target.files[0]);
                      }}
                    />
                  )}
                />
                <label htmlFor="select-image2">
                  <Box sx={ImgBoxStyle}>
                    {imageUrl2 && selectedImage2 ? (
                      <img
                        src={imageUrl2}
                        alt={selectedImage2.name}
                        width="97%"
                        height="97%"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <>
                        <CloudUploadIcon sx={{ color: "#00D290" }} />
                        <Typography sx={{ fontSize: 12 }}>
                          upload image
                        </Typography>
                      </>
                    )}
                  </Box>
                </label>
                <Typography variant="inherit" color="red" sx={{ fontSize: 12 }}>
                  {errors.image2?.message}
                </Typography>
              </Box>

              <Box sx={{ height: 100, width: 100, ml: 3 }}>
                <Controller
                  control={control}
                  name="image3"
                  inputRef={register()}
                  render={({ field: { onChange } }) => (
                    <input
                      type="file"
                      id="select-image3"
                      //   name="image3"
                      style={{ display: "none" }}
                      onChange={(e) => {
                        onChange(e.target.files[0]);
                        setSelectedImage3(e.target.files[0]);
                      }}
                    />
                  )}
                />
                <label htmlFor="select-image3">
                  <Box sx={ImgBoxStyle}>
                    {imageUrl3 && selectedImage3 ? (
                      <img
                        src={imageUrl3}
                        alt={selectedImage3.name}
                        width="97%"
                        height="97%"
                        style={{ objectFit: "contain" }}
                      />
                    ) : (
                      <>
                        <CloudUploadIcon sx={{ color: "#00D290" }} />
                        <Typography sx={{ fontSize: 12 }}>
                          upload image
                        </Typography>
                      </>
                    )}
                  </Box>
                </label>
                <Typography variant="inherit" color="red" sx={{ fontSize: 12 }}>
                  {errors.image3?.message}
                </Typography>
              </Box>
            </DialogContent>
          </Grid>
        </Grid>

        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleSubmit(onSubmit)}>Add Product</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Products;
