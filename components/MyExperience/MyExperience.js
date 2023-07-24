import React from 'react'
import ExperienceData from './ExperienceData'
import Box from "@mui/joy/Box";
import { Container, Grid, Typography } from "@mui/joy";

const MyExperience = ({ title }) => {
  return (
    <>
    <Box className="py-20">
        <Container maxWidth="lg">
          <Grid container lg={12} justifyContent="center">
            <Box className='mb-8'>
              <Typography level="h2">{title}</Typography>
            </Box>
          </Grid>          
        </Container>
        <Container maxWidth="lg">        
          <Grid container spacing={{ xs: 4, md: 4, lg: 4 }}>
            <ExperienceData />  
          </Grid>
        </Container>
      </Box>      
    </>
  )
}

export default MyExperience