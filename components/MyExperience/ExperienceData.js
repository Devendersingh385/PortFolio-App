import { Grid, Typography } from '@mui/joy';
import { Box, Card, CardContent } from '@mui/material';
import React from 'react'

const experience = [  
  {
  id: 0,
  companyname: 'Novel It Solutions P LTD',
  Years: 'July 2018 - Feb 2019',
  Position: 'Jr. Web Designer',
},
   {
  id: 1,
  companyname: 'Glocify Technologies',
  Years: 'Mar 2019 - Present',
  Position: 'Sr. Web Designer',
},
   {
  id: 2,
  companyname: 'Glocify Technologies',
  Years: 'Mar 2022 - Present',
  Position: 'Front End Developer',
},

]
const ExperienceData = () => {
  const expList = experience.map(experiList => 
    <Grid item xs={12} lg={4} key={experiList.id}>
    <Box  className="h-full">
        <Card
          className="h-full"
          sx={{
            boxShadow: "0px 8px 24px #F2F0FF",
            borderRadius: "10px",
            height: "100%",
            padding: "32px",
            transition: "all .3s cubic-bezier(0,0,.5,1)",
            background: "#fff",
            "&:hover": {
              boxShadow: "2px 4px 16px rgba(0,0,0,.16)",
              transform: "scale3d(1.01,1.01,1.01)",
            },
          }}
        >
          <CardContent>            
          <Typography level="h3" className='mb-4'>{experiList.companyname}</Typography>           
            <Typography level="h6" className='mb-4'>{experiList.Years}</Typography>
            <Typography level="body1" className='mb-4'>{experiList.Position}</Typography>
          </CardContent>
        </Card>
      </Box>
      </Grid>
    );

  return (
    <>
   
      {expList}
    
    </>
  )
}

export default ExperienceData