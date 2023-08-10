import React from "react";
import Box from "@mui/joy/Box";
import { Container, Grid, Typography } from "@mui/joy";

const Footer = () => {
  return (
    <>
      <Box className=" py-5 " sx={{ background: '#374957' }}>
        <Container maxWidth="sm">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Typography level="body2" className="text-center" sx={{ color: '#5f7d95' }}>
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
