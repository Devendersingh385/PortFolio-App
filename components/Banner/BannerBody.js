"use client";

import React, { useRef } from "react";
import Box from "@mui/joy/Box";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import { Container, Grid, Typography } from "@mui/joy";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import Link from "next/link";
// import Buttons from '../Buttons/Buttons';

const BannerBody = () => {
  const aboutUsRef = useRef();

  const scrollToSection = (e) => {
    e.preventDefault();
    aboutUsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <Box className="h-screen bg-white">
        <Container
          maxWidth=""
          spacing={{ xs: 0, md: 0 }}
          sx={{
            padding: "0 !important",
          }}
        >
          <Grid container spacing={0}>
            <Grid item xs={12} lg={12} className="overflow-hidden">
              <Card component="li" className="h-screen">
                <CardCover
                  className="mobileBanner"
                  sx={{
                    borderRadius: "0",
                    ":after": {
                      position: "absolute",
                      top: 0,
                      left: 0,
                      width: "100%",
                      height: "100%",
                      transition: "0.2s all ease-out",
                      content: '""',
                      zIndex: "1",
                      background: "rgba(0,0,0,.5)",
                    },
                    video: {
                      borderRadius: "0 !important",
                    },
                  }}
                >
                  <video
                    className="rounded-none h-screen"
                    autoPlay
                    loop
                    muted
                    poster=""
                  >
                    <source src="./banner-vid.mp4" type="video/mp4" />
                  </video>
                </CardCover>
                <CardContent
                  className="text-center flex items-center flex-col bannerContent justify-center"
                  sx={{ padding: "96px 56px" }}
                >
                  <Typography
                    level="h1"
                    className="tracking-wider"
                    textColor="#e9e9e9"
                    sx={{
                      fontSize: "3.82vw",
                      lineHeight: 0.9,
                      fontWeight: 100,
                      letterSpacing: ".075em",
                      fontFamily: "Aileron !important",
                      textTransform: "uppercase",
                      marginTop: "25px",
                      fontWeight: "100",
                    }}
                  >
                    I’m Joe Biden
                    <br className="xs-hidden md:block lg:block" />
                    Front-End <br className="xs-hidden md:block lg:block" />{" "}
                    Software Engineer
                  </Typography>
                  <a
                    href="/ReactJS-Guide.pdf"
                    download="ReactJS-Guide"
                    target="_blank"
                    className="mt-5"
                  >
                    {/* <Buttons title='Download CV' /> */}
                  </a>
                </CardContent>
                <Box
                  className="relative text-center z-10"
                  sx={{
                    padding: "0px 56px",
                  }}
                >
                  <Link
                    href=""
                    ref={aboutUsRef}
                    className="animate-bounce absolute bottom-2 left-0 right-0 mx-auto"
                  >
                    <KeyboardArrowDownIcon
                      onClick={(e) => scrollToSection(e)}
                      sx={{
                        color: "#fff",
                        width: "40px",
                        height: "40px",
                        cursor: "pointer",
                      }}
                    />
                  </Link>
                </Box>
              </Card>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default BannerBody;
