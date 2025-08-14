import { Box, Container, Typography } from "@mui/material";
import React from "react";
import CoursCard from "./CoursCard";

const Cours = () => {
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
        <Typography variant="h3" color="white" margin={"30px 0px"}>
          Kurslar
        </Typography>
        <CoursCard />
      </Container>
    </Box>
  );
};

export default Cours;
