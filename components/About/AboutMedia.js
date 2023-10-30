import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
import AspectRatio from "@mui/joy/AspectRatio";

const AboutMedia = () => {
  return (
    <>
      <Box sx={{
        "img": {
          objectFit: 'contain !important'
        }
      }}>
        <AspectRatio
          ratio="1/1"
          sx={{           
            borderRadius: '12px'
          }}          
        >
          <Image
            src="/my-picture.png"
            alt="about"
            width={500}
            height={500}
            className="rounded-xl"                                 
          />
        </AspectRatio>
      </Box>
    </>
  );
};

export default AboutMedia;
