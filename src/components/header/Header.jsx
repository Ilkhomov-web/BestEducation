import { Box, Container, Typography } from "@mui/material";
import React from "react";

// import RainbowBackground from "../header/RainbowBackground";
import HeaderContent from "./HeaderContent";

const Header = () => {
  return (
    <Box
      sx={{
        marginTop: "0px",

        padding: "20px",
        background:
          "linear-gradient(1deg,rgb(247, 252, 255) 0%, rgba(255, 255, 255, 1) 100%)",
      }}
    >
      {/* <RainbowBackground> */}
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "100%",
            // background: "rgb(255, 255, 255)", // Shaffof oq fon
            // backdropFilter: "blur(10px) saturate(180%)", // Blur va rang intensivligi
            // WebkitBackdropFilter: "blur(10px) saturate(180%)", // Safari support
            // border: "1px solid rgba(255, 255, 255, 0.3)", // Shaffof ramka
            // borderRadius: "12px",
            // boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "50px",
          }}
        >
          <HeaderContent />
        </Box>
      </Container>
      {/* </RainbowBackground> */}
    </Box>
  );
};

export default Header;
