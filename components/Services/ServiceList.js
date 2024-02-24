import React from "react";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import Typography from "@mui/joy/Typography";
import { Box, Grid } from "@mui/joy";
import { serviceData } from "./serviceData";

const itemsArray = [];

serviceData.forEach((item, i) => {
  itemsArray.push(
    <Grid item xs={12} lg={4}>
      <Box key={item.id} className="h-full">
        <Card
          className="h-full dark:bg-gradient-to-b from-[#242424] to-[#121212] p-6 shadow-none dark:border dark:border-solid dark:border-[#111111]"          
        >
          <CardContent>
            <Box width={60} height={60} className="mb-6">
              {item.icon}
            </Box>
            <Typography level="h4" className='mb-4 dark:text-white'
              sx={{
                minHeight: '72px'
              }}
            >{item.title}</Typography>
            <Typography level="body1" className="dark:text-white">{item.description}</Typography>
          </CardContent>
        </Card>
      </Box>
    </Grid>
  );
});

const ServiceList = () => {
  return <> {itemsArray}</>;
};

export default ServiceList;
