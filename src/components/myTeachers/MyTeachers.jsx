import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Teacher from "./Teacher";

const MyTeachers = (prop) => {
  const { isMobile } = prop;
  return (
    <Box sx={{ padding: "50px 0px " }}>
      <Container maxWidth={"lg"}>
        <Typography
          variant={isMobile ? "h5" : "h3"}
          sx={{
            margin: "50px 0px",
            display: "flex",
            gap: "10px",
            alignItems: "center",
          }}
        >
          BIZNING{" "}
          <Typography variant={isMobile ? "h5" : "h3"} color="#246cb6">
            O`QITUVCHILAR
          </Typography>
        </Typography>
        <Teacher isMobile={isMobile} />
      </Container>
    </Box>
  );
};

export default MyTeachers;
