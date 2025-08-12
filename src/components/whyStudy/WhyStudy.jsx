import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import AnimatedText from "../header/AnimationText";
import WhyStudyCard from "./WhyStudyCard";

const WhyStudy = () => {
  return (
    <Box sx={{ margin: "50px 0px" }}>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            gap: "6px",
            marginBottom: "50px",
          }}
        >
          Nima uchun “Best <AnimatedText />
          ”da o‘qish kerak?
        </Typography>
        <WhyStudyCard />
      </Container>
    </Box>
  );
};

export default WhyStudy;
