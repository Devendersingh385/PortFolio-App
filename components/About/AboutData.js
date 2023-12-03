/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/joy/Typography';
import { Button } from '@mui/material';

const AboutData = () => {
  return (
    <>
      <Box sx={{}}>
        <Typography level="h4" className='mb-4'>Know Me More</Typography>
        <Typography level="h2" className='mb-4'>I'm Devender Singh, a Front End Engineer</Typography>
        <Typography level="body1" className='mb-4'>Experienced front-end engineer with 5 years in dynamic UIs. Skilled in HTML, CSS, and JS, with a focus on React and Next JS. Passionate about seamless user experiences, collaborating with teams. Strong eye for design, attention to detail. Thrive in collaborative environments, transforming ideas into reality. Stay updated on emerging technologies, committed to excellence. Proven track record of successful projects, ready for new challenges in front-end development.</Typography>
        <a href="/devender-resume.pdf" download="devender-resume" target='_blank' className='mt-5 text-white'>
          <Button sx={{
            backgroundColor: "#1877f2 !important",
            borderRadius: "50px",
            padding: "12px 30px",
            textTransform: "capitalize",
            fontWeight: 400,
            color: '#fff'
          }}>Download CV</Button>
        </a>
      </Box>
    </>
  )
}

export default AboutData