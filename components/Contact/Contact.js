"use client";
import React from "react";
import { Box, Container, Grid, Typography } from "@mui/joy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ContactForm from "./ContactForm";



const Contact = () => {
  
  return (
    <>
      <Box sx={{ flexGrow: 1 }} className="py-16">
        <Container maxWidth="lg">
          <Grid container spacing={5} display="flex" alignItems="center">
            <Grid item xs={12} lg={6}>
              <Typography
                level="h2"
                sx={{
                  fontWeight: "500",
                  fontFamily: "SF Pro Display",
                  marginBottom: "24px",
                }}
              >
                Get in touch!
              </Typography>
              <Typography
                level="h6"
                sx={{
                  fontWeight: "500",
                  fontFamily: "SF Pro Display",
                  marginBottom: "24px",
                }}
              >
                Get in touch with us by sending a meeage and we will get back to
                you soon to schedule a discovery call.
              </Typography>              
              <List
                aria-labelledby="decorated-list-demo"
                sx={{ "--ListItemDecorator-size": "32px" }}
              >
                <ListItem>
                  <ListItemDecorator>
                    {" "}
                    <LocalPhoneIcon />
                  </ListItemDecorator>{" "}
                  <Typography level="h5">+918219497331</Typography>
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    {" "}
                    <EmailIcon />
                  </ListItemDecorator>{" "}
                  <Typography level="h5">test@gmail.com</Typography>
                </ListItem>
                <ListItem>
                  <ListItemDecorator>
                    {" "}
                    <HomeIcon />
                  </ListItemDecorator>{" "}
                  <Typography level="h5">test@gmail.com</Typography>
                </ListItem>
              </List>
            </Grid>
            <Grid item xs={12} lg={6}>
              <ContactForm />
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Contact;
