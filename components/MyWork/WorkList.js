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
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '2',
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '3',
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '4',
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '5',
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
  {
    id: '6',
    img: "https://images.unsplash.com/photo-1558642452-9d2a7deb7f62",
    title: "Honey",
    author: "@arwinneil",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '7',
    img: "https://images.unsplash.com/photo-1516802273409-68526ee1bdd6",
    title: "Basketball",
    author: "@tjdragotta",
  },
  {
    id: '8',
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
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
    img: "https://images.unsplash.com/photo-1518756131217-31eb79b20e8f",
    title: "Fern",
    author: "@katie_wasserman",
  },
];

const designWork = [
  {
    id: '14',
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '15',
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '16',
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '17',
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '18',
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
    title: "Hats",
    author: "@hjrc33",
    cols: 2,
  },
];

const developmentWork = [
  {
    id: '19',
    img: "https://images.unsplash.com/photo-1551963831-b3b1ca40c98e",
    title: "Breakfast",
    author: "@bkristastucchio",
    rows: 2,
    cols: 2,
    featured: true,
  },
  {
    id: '20',
    img: "https://images.unsplash.com/photo-1551782450-a2132b4ba21d",
    title: "Burger",
    author: "@rollelflex_graphy726",
  },
  {
    id: '21',
    img: "https://images.unsplash.com/photo-1522770179533-24471fcdba45",
    title: "Camera",
    author: "@helloimnik",
  },
  {
    id: '22',
    img: "https://images.unsplash.com/photo-1444418776041-9c7e33cc5a9c",
    title: "Coffee",
    author: "@nolanissac",
    cols: 2,
  },
  {
    id: '23',
    img: "https://images.unsplash.com/photo-1533827432537-70133748f5c8",
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

  "& .MuiImageListItem-standard:first-child": {
    gridArea: "1 / 1 / 3 / 3 !important",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  "& .MuiImageListItem-standard:nth-child(3)": {
    borderTopRightRadius: "10px",
  },
  "& .MuiImageListItem-standard:last-child": {
    borderBottomRightRadius: "10px",
  },
  "& :first-child img": {
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
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
  "& :hover img": {
    transition: "0.2s all ease-out",
    transform: "scale(1.05)",
    borderTopLeftRadius: "10px",
    borderBottomLeftRadius: "10px",
  },
  "& :hover :after": {
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
                      aria-label="lab API tabs example"
                    >
                      <Tab label="All" value="1" />
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
