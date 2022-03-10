import { Backdrop, CircularProgress } from '@mui/material'
import React from 'react'

const BackdropLoader = () => {
  return (
    <Backdrop
    sx={{ color: "#fff", zIndex: (theme) => theme.zIndex.drawer + 5 }}
    open={true}
    // onClick={handleClose}
  >
    <CircularProgress color="inherit" />
  </Backdrop>
  )
}

export default BackdropLoader