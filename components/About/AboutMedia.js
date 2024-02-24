import { Box } from "@mui/material";
import Image from "next/image";
import React from "react";
const AboutMedia = () => {
  return (
    <>
      <Box sx={{
        "img": {
          objectFit: 'contain !important'
        }}}         
        className="bg-white dark:bg-[#1877f2] rounded-xl mx-auto"
        >
       
          <Image
            src="/my-picture.png"
            alt="about"
            width={500}
            height={500}
            className="rounded-xl"                                 
          />
      </Box>
    </>
  );
};

export default AboutMedia;
