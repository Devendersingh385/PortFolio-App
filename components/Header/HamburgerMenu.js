"use client";
import React, { useState } from "react";
import Card from "@mui/joy/Card";
import CardCover from "@mui/joy/CardCover";
import CardContent from "@mui/joy/CardContent";
import SwipeableDrawer from "@mui/material/SwipeableDrawer";
import { Box, ListItemIcon, ListItemText } from "@mui/material";
import { Divider, List, ListItem, ListItemButton, Typography } from "@mui/joy";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import Button from "@mui/material/Button";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import Link from "next/link";

const HamburgerMenu = () => {
  const [toggleOpen, setToggleOpen] = useState({
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event &&
      event.type === "keydown" &&
      (event.key === "tab" || event.key === "Shift")
    ) {
      return;
    }
    setToggleOpen({ ...toggleOpen, [anchor]: open });
  };
  const list = (anchor) => (
    <Box
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {["right"].map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>
            <MenuIcon
              sx={{
                width: "35px",
                height: "35px",
                color: "#fff",
              }}
            />
          </Button>
          <SwipeableDrawer
            anchor={anchor}
            open={toggleOpen[anchor]}
            onClose={toggleDrawer(anchor, false)}
            onOpen={toggleDrawer(anchor, true)}
          >
            <Card
              component="li"
              className="h-screen w-screen bg-no-repeat bg-cover bg-center"
              // sx={{
              //   background: "url(./footer-bg.png)",
              // }}
            >
              <CardCover
                className="menuBg"
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
                  // poster="/menu-bg.jpg"
                >
                  <source src="./banner-vid.mp4" type="video/mp4" />
                </video>
              </CardCover>
              <CardContent className="text-center flex items-center flex-col">
                <CloseIcon
                  className="sideBar-header"
                  onClick={toggleDrawer(anchor, false)}
                  sx={{
                    width: "35px",
                    height: "35px",
                    color: "#fff",
                    cursor: "pointer",
                  }}
                />

                <Box
                  className="absolute flex justify-center w-full"
                  sx={{
                    padding: "10vw 10vw 150px",
                  }}
                >
                  <List
                    className="justify-center"
                    sx={{
                      a: {
                        color: "#9a9a9a",
                        fontFamily: "Aileron",
                        lineHeight: "1.9",
                      },
                      "li:hover a": {
                        color: "#1877f2",
                      },
                    }}
                  >
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">Home</Link>
                    </ListItem>
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">About Us</Link>
                    </ListItem>
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">Services</Link>
                    </ListItem>
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">Portfolio</Link>
                    </ListItem>
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">Skills</Link>
                    </ListItem>
                    <ListItem className="text-4xl font-light block">
                      <Link href="/">Contact Us</Link>
                    </ListItem>
                  </List>
                </Box>
              </CardContent>
            </Card>
          </SwipeableDrawer>
        </React.Fragment>
      ))}
    </>
  );
};

export default HamburgerMenu;
