import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CoursCard from "./CoursCard";

const Cours = (prop) => {
  const { isMobile } = prop;
  return (
    <Box
      sx={{
        width: "100%",
        background: "#246cb6",
        margin: "50px 0px",
        padding: "30px 0px",
      }}
    >
      <Container maxWidth={"lg"}>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          color="white"
          margin={"30px 0px"}
        >
          Kurslar
        </Typography>
        <CoursCard isMobile={isMobile} />
      </Container>
    </Box>
  );
};

export default Cours;
