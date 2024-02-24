import React from "react";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import WorkList from "./WorkList";
import { Typography } from "@mui/joy";

const MyWork = ({ title }) => {
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="py-16 dark:bg-[#101010]">
        <Container maxWidth="lg">
          <Grid container spacing={2} className="justify-center mb-6">
          <Box className='mb-8'>
              <Typography level="h2" className="dark:text-[#f5f5f7]">{title}</Typography>
            </Box>
          </Grid>
          <Grid
            container
            spacing={{ xs: 4, md: 4, lg: 5 }}
            sx={{
              marginTop: "0 !important",
            }}
          >
            <WorkList />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default MyWork;
