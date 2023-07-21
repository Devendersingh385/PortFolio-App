import React from "react";
import Box from "@mui/joy/Box";
import { Container, Grid, Typography } from "@mui/joy";
import ServiceList from "./ServiceList";

const Services = ({ title }) => {
  return (
    <>
      <Box className="py-20" sx={{
        background: 'rgb(247, 249, 252)'
      }}>
        <Container maxWidth="lg">
          <Grid container spacing={6} justifyContent="center">
            <Box className='mb-8'>
              <Typography level="h2">{title}</Typography>
            </Box>
          </Grid>
          <Grid container spacing={{ xs: 4, md: 4, lg: 5 }}>
            <ServiceList />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Services;
