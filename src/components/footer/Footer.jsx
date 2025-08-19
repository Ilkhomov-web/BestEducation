import React from "react";
import FooterContent from "./FooterContent";
import { Box, Container } from "@mui/material";

const Footer = (prop) => {
  const { isMobile } = prop;
  return (
    <Box
      sx={{
        width: "100%",
        height: "500px",
        margin: "50px 0px",
        background: "white",
        // padding: "90px 0px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Container maxWidth={"lg"}>
        <FooterContent isMobile={isMobile} />
      </Container>
    </Box>
  );
};

export default Footer;
