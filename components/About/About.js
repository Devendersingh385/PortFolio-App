import React from "react";
import Box from "@mui/joy/Box";
import { Container, Grid } from "@mui/joy";
import AboutData from "./AboutData";
import AboutMedia from "./AboutMedia";

const About = () => {
  return (
    <>
      <Box className="py-20 aboutUs">
        <Container maxWidth="lg">
          <Grid container spacing={6} alignItems="center">
            <Grid item xs={12} lg={6}>
              <AboutMedia />
            </Grid>
            <Grid item xs={12} lg={6}>
              <AboutData />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default About;
