import { Box, IconButton, Typography } from "@mui/material";
import { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";
function IncDecCounter() {
  let [num, setNum] = useState(0);
  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  // let handleChange = (e) => {
  //   setNum(e.target.value);
  // };

  return (
    <>
      <Box
        sx={{
          border: 1,
          width: "auto",
          borderRadius: 20,
          borderColor: "#e0e0e0",
          display: "flex",
          alignItems: "center",
        }}
      >
        <IconButton onClick={decNum}>
          <RemoveIcon sx={{ fontSize: 18, color: "#00B37A" }} />
        </IconButton>
        <Typography> {num} </Typography>
        <IconButton onClick={incNum}>
          <AddIcon sx={{ fontSize: 18, color: "#00B37A" }} />
        </IconButton>
      </Box>
    </>
  );
}

export default IncDecCounter;
