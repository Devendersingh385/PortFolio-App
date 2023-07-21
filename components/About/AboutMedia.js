import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";

const AboutMedia = () => {
  return (
    <>
      <Box>
        <AspectRatio
          ratio="1/1"          
        >
          <Image
            src="/about-8.jpg"
            alt="about"
            width={500}
            height={300}
            className="rounded-xl"
          />
        </AspectRatio>
      </Box>
    </>
  );
};

export default AboutMedia;
