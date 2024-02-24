"use client";
import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/joy/Grid";
import Link from "next/link";
import List from "@mui/joy/List";
import ListItem from "@mui/joy/ListItem";
import HamburgerMenu from "./HamburgerMenu";
import { Typography } from "@mui/joy";
import ThemeSwitch from "../ThemeSwitch/ThemeSwitch";

const Header = () => {
  const [scroll, setScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScroll(window.scrollY > 10);
    });
  }, []);
  return (
    <>
      <Box
        className={
          scroll
            ? "main-header scrolled fixed top-0 left-0 right-0 z-10"
            : "main-header fixed top-0 left-0 right-0 z-10"
        }
      >
        <Container maxWidth="">
          <Grid container spacing={2} sx={{ flexGrow: 1 }} className="p-0">
            <Grid xs={12} lg={12} sx={{ padding: 0 }}>
              <List
                className="p-0"
                sx={{
                  flexDirection: "row",
                  justifyContent: "space-between",
                }}
              >
                <ListItem className="p-0">
                  {scroll ? (
                    <Link href="/">
                      {/* <Image
                        src="/vercel.svg"
                        alt="Vercel-Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                      /> */}
                      <Typography level="h2" sx={{ color: "#fff" }}>
                        {" "}
                        Devender
                      </Typography>
                    </Link>
                  ) : (
                    <Link href="/">
                      {/* <Image
                        src="/vercel.svg"
                        alt="Vercel-Logo"
                        className="dark:invert"
                        width={100}
                        height={24}
                        priority
                      /> */}
                      <Typography level="h2" sx={{ color: "#fff" }}>
                        {" "}
                        Devender
                      </Typography>
                    </Link>
                  )}
                </ListItem>
                <ListItem className="p-0">
                  <HamburgerMenu />
                  <ThemeSwitch />
                </ListItem>
              </List>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </>
  );
};

export default Header;
