/* eslint-disable @next/next/no-img-element */
"use client";
import React from "react";
import Box from "@mui/material/Box";
import Tab from "@mui/material/Tab";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import ImageList from "@mui/material/ImageList";
import ImageListItem from "@mui/material/ImageListItem";

const itemData = [
  {
    id: '1',
    img: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '2',
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '3',
    img: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '4',
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '5',
    img: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    id: '6',
    img: "https://plus.unsplash.com/premium_photo-1682130145031-a2a390d708a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZGluZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '7',
    img: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    id: '8',
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Fern",
    author: "@katie_wasserman",
  },
  {
    id: '9',
    img: "https://images.unsplash.com/photo-1597645587822-e99fa5d45d25",
    title: "Mushrooms",
    author: "@silverdalex",
    rows: 2,
    cols: 2,
  },
  {
    id: '10',
    img: "https://images.unsplash.com/photo-1567306301408-9b74779a11af",
    title: "Tomato basil",
    author: "@shelleypauls",
  },
  {
    id: '11',
    img: "https://images.unsplash.com/photo-1471357674240-e1a485acb3e1",
    title: "Sea star",
    author: "@peterlaster",
  },
  {
    id: '12',
    img: "https://images.unsplash.com/photo-1589118949245-7d38baf380d6",
    title: "Bike",
    author: "@southside_customs",
    cols: 2,
  },
  {
    id: '13',
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Fern",
    author: "@katie_wasserman",
  },
];

const designWork = [
  {
    id: '14',
    img: "https://images.unsplash.com/photo-1498049860654-af1a5c566876?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '15',
    img: "https://images.unsplash.com/photo-1516383740770-fbcc5ccbece0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '16',
    img: "https://images.unsplash.com/photo-1552664688-cf412ec27db2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=687&q=80",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '17',
    img: "https://images.unsplash.com/photo-1557426272-fc759fdf7a8d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '18',
    img: "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=880&q=80",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
];

const developmentWork = [
  {
    id: '19',
    img: "https://images.unsplash.com/photo-1508830524289-0adcbe822b40?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1125&q=80",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '20',
    img: "https://images.unsplash.com/photo-1531497865144-0464ef8fb9a9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1074&q=80",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '21',
    img: "https://images.unsplash.com/photo-1561736778-92e52a7769ef?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fGNvZGluZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '22',
    img: "https://plus.unsplash.com/premium_photo-1682130145031-a2a390d708a8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzd8fGNvZGluZyUyMGltYWdlc3xlbnwwfHwwfHx8MA%3D%3D&auto=format&fit=crop&w=500&q=60",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '23',
    img: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8Y29kaW5nJTIwaW1hZ2VzfGVufDB8fDB8fHww&auto=format&fit=crop&w=500&q=60",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
];

const listStyle = {
  gridTemplateColumns: "repeat(4, 1fr) !important",
  gap: "10px !important",

  "& .MuiImageListItem-standard": {
    overflow: "hidden",
  },

  "& .MuiImageListItem-standard:first-of-type": {
    gridArea: "1 / 1 / 3 / 3 !important",
    borderTopLeftRadius: "10px",
  },
  "& .MuiImageListItem-standard:nth-of-type(3)": {
    borderTopRightRadius: "10px",
  },
  "& .MuiImageListItem-standard:nth-of-type(10)": {
    borderBottomLeftRadius: "10px",
  },
  "& .MuiImageListItem-standard:last-child": {
    borderBottomRightRadius: "10px",
  },
  "& :first-child img": {
    borderTopLeftRadius: "10px",
  },
  "& :before": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    content: '""',
    zIndex: "1",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0) 40%, rgba(0,0,0,0.5) 100%)",
  },
  "& :after": {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
    transition: "0.2s all ease-out",
    content: '""',
    zIndex: "1",
    background:
      "linear-gradient(180deg, rgba(0,0,0,0.2) 40%, rgba(0,0,0,0.1) 100%)",
    opacity: "0",
  },
  "img": {
    transition: "0.2s all ease-out",
  },
  "& :hover img": {    
    transform: "scale(1.05)",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  "&:hover :after": {
    opacity: "1",
  },
};
const WorkList = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <>
      <Box sx={{ width: "100%" }}>
        <Container maxWidth="lg">
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <Box sx={{ width: "100%", typography: "body1" }}>
                <TabContext value={value}>
                  <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                    <TabList
                      onChange={handleChange}                      
                    >
                      <Tab label="All" value="1" sx={{color: '#1877f2 !important'}} />
                      <Tab label="Design Work" value="2" />
                      <Tab label="Development Work" value="3" />
                    </TabList>
                  </Box>
                  <TabPanel
                    value="1"
                    sx={{
                      padding: "24px 0",
                    }}
                  >
                    <ImageList sx={listStyle}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.id}>
                          <img
                            src={`${item.img}?w=500&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          {/* <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                            actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                            }
                                        /> */}
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel
                    value="2"
                    sx={{
                      padding: "24px 0",
                    }}
                  >
                    <ImageList sx={listStyle}>
                      {designWork.map((item) => (
                        <ImageListItem key={item.id}>
                          <img
                            src={`${item.img}?w=500&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          {/* <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                            actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                            }
                                        /> */}
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                  <TabPanel
                    value="3"
                    sx={{
                      padding: "24px 0",
                    }}
                  >
                    <ImageList sx={listStyle}>
                      {developmentWork.map((item) => (
                        <ImageListItem key={item.id}>
                          <img
                            src={`${item.img}?w=500&fit=crop&auto=format`}
                            srcSet={`${item.img}?w=500&fit=crop&auto=format&dpr=2 2x`}
                            alt={item.title}
                            loading="lazy"
                          />
                          {/* <ImageListItemBar
                                            title={item.title}
                                            subtitle={item.author}
                                            actionIcon={
                                            <IconButton
                                                sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
                                                aria-label={`info about ${item.title}`}
                                            >
                                                <InfoIcon />
                                            </IconButton>
                                            }
                                        /> */}
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </TabPanel>
                </TabContext>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default WorkList;
