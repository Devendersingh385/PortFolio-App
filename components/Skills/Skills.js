import React from "react";
import Technologies from "./Technologies";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import { Typography } from "@mui/joy";

const Skills = ({ title }) => {
  return (
    <>
      <Box       
        className="py-20 bg-[#f7f5fc] dark:bg-black"
      >
        <Container maxWidth="lg">
          <Grid container spacing={2} className="justify-center mb-6">        
              <Box className='mb-8'>
                <Typography level="h2">{title}</Typography>
              </Box>
          </Grid>
          <Grid container spacing={5}>
            <Technologies />
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Skills;
