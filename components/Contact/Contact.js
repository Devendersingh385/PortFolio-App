"use client";
import React from "react";
import { Box, Container, Grid, ListItemButton, ListItemContent, Typography } from "@mui/joy";
import LocalPhoneIcon from "@mui/icons-material/LocalPhone";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import ListItemDecorator from "@mui/joy/ListItemDecorator";
import ContactForm from "./ContactForm";
import InstagramIcon from '@mui/icons-material/Instagram';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import Link from "next/link";


const Contact = ({ title }) => {
  
  return (
    <>
      <Box  sx={{          
          background: "rgb(247, 249, 252)",
        }}
        className="py-20">
        <Container maxWidth="lg">
          <Grid container spacing={5} display="flex" alignItems="center">
            <Grid item xs={12} lg={12}>
              <Box className='mb-8 text-center'>
                <Typography level="h2">{title}</Typography>
              </Box>
            </Grid>
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
                <ListItem className='px-0'>
                  <ListItemDecorator>                    
                    <LocalPhoneIcon sx={{
                      color: '#1877f2'
                    }}/>
                  </ListItemDecorator>
                  <Typography level="body1" className='text-base font-normal'>+918219497331</Typography>
                </ListItem>
                <ListItem className='px-0'>
                  <ListItemDecorator>                    
                    <EmailIcon sx={{
                      color: '#1877f2'
                    }}/>
                  </ListItemDecorator>
                  <Typography level="body1" className='text-base font-normal'>devendersingh385@gmail.com</Typography>
                </ListItem>
                <ListItem className='px-0'>
                  <ListItemDecorator>                   
                    <HomeIcon sx={{
                      color: '#1877f2'
                    }}/>
                  </ListItemDecorator>
                  <Typography level="body1" className='text-base font-normal'>Plot No. 10, Rajiv Gandhi, Netsmartz House, IT Park Rd, Chandigarh, 160101</Typography>
                </ListItem>
              </List>
              <List className='flex-row gap-2'>
              <ListItem className='px-0'>
                <Link href=''>
                  <InstagramIcon sx={{
                      color: '#1877f2'
                    }}/>   
                </Link>
              </ListItem>
              <ListItem className='px-0'>
                <Link href=''>
                  <LinkedInIcon sx={{
                      color: '#1877f2'
                    }}/>  
                </Link>
              </ListItem>
              <ListItem className='px-0'>  
                <Link href=''>
                <GitHubIcon sx={{
                      color: '#1877f2'
                    }}/>
                </Link>            
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
