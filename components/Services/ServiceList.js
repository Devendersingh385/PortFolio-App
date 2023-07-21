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
            <div width={60} height={60} className="mb-6">
              {item.icon}
            </div>

            <Typography level="h4" className='mb-4'
              sx={{
                minHeight: '72px'
              }}
            >{item.title}</Typography>
            <Typography level="body1">{item.description}</Typography>
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
