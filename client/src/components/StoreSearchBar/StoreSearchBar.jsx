import React from 'react'
import { Box } from "@mui/system";
import {
  FormControl,
  InputAdornment,
  OutlinedInput,
} from "@mui/material";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

const StoreSearchBar = () => {
  return (
    <Box
        sx={{
          width:{md:"99.8%",sx:'90%'} ,
          height: 65,
          border: 1,
          borderColor: "#e0e0e0",
          background:'#fff',
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          position: {md:"sticky",xs:'sticky'},
        top: {md:214,xs:50},
        bottom: 0,
        zIndex: 5,
        }}
      >
        <FormControl
          sx={{ m: 0, width: { md: "65ch", xs: "45ch" } }}
          variant="outlined"
          size="small"
        >
          <OutlinedInput
            // value={values.weight}
            // onChange={handleChange('weight')}
            startAdornment={
              <InputAdornment position="start">
                <SearchOutlinedIcon />
              </InputAdornment>
            }
            placeholder="Search products"
          />
        </FormControl>
      </Box>
  )
}

export default StoreSearchBar