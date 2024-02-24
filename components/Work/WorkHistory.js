import React from "react";
import Box from "@mui/joy/Box";
import { Container, Grid, Typography } from "@mui/joy";
import { Card, CardContent } from "@mui/material";

const WorkHistory = () => {
  return (
    <>
      <Box className="py-20">
        <Container maxWidth="lg">
          <Grid container spacing={{ xs: 4, md: 4, lg: 4 }}>
            <Grid item xs={12} lg={4}>
              <Box className="h-full">
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
                    <Typography level="h3" className="mb-4">
                      Mydry30
                    </Typography>
                    <Typography level="h6" className="mb-4">
                    Zira lets users add and remove roles from themselves by simply reacting to a message. Since 2017
                    </Typography>
                    <Typography level="body1" className="mb-4">
                     asasjhajshjas
                    </Typography>
                  </CardContent>
                </Card>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WorkHistory;
