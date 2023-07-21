import React from "react";
import Box from "@mui/joy/Box";
import { Container, Grid, Typography } from "@mui/joy";

const Footer = () => {
  return (
    <>
      <Box className="bg-black py-5">
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography level="body2" className="text-white text-center">
                Copyright © 2023 Devender Singh. All Rights reserved.
              </Typography>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Footer;
