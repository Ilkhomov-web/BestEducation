import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AnimatedText from "../header/AnimationText";
import WhyStudyCard from "./WhyStudyCard";

const WhyStudy = (prop) => {
  const { isMobile } = prop;
  return (
    <Box sx={{ margin: "50px 0px" }}>
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Typography
          variant={isMobile ? "main1" : "h5"}
          sx={{
            width: isMobile ? "100%" : "100%",
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "50px",
            fontSize: isMobile ? "16px" : "32px",
          }}
        >
          Nima uchun “Best <AnimatedText />
          ”da o‘qish kerak?
        </Typography>
        <WhyStudyCard isMobile={isMobile} />
      </Container>
    </Box>
  );
};

export default WhyStudy;
