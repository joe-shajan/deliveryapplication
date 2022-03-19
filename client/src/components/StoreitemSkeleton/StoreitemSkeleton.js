import { Box, Grid, Skeleton } from '@mui/material'
import React from 'react'

const StoreitemSkeleton = () => {
    return (
        <>
        {[1,1,1].map((index)=>(
        <Grid container >
            <Grid item xs={3} sm={2.5} md={2.5}>
                <Box
                    sx={{
                        width: "100%",
                        height: { md: 124, xs: 100 },
                        display: "flex",
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >

                    <Skeleton variant="rectangular" width={60} height={80} />
                </Box>

            </Grid>
            <Grid item xs={7} md={7.5}>
                <Box
                    sx={{
                        width: "100%",
                        height: { md: 124, xs: 100 },
                        display: "flex",
                        flexDirection: "column",
                        justifyContent: "center",
                    }}
                >
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />
                    <Skeleton width="50%" />


                </Box>
            </Grid>
            <Grid item xs={2} md={2}>
                <Box
                    sx={{
                        width: "100%",
                        height: { md: 124, xs: 100 },
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >


                </Box>
            </Grid>
        </Grid>
        ))}
        </>
    )
}

export default StoreitemSkeleton