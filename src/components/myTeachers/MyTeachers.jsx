import { Box, Container, Typography } from "@mui/material";
import React from "react";
import Teacher from "./Teacher";

const MyTeachers = () => {
  return (
    <Box sx={{ padding: "50px 0px " }}>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h3"
          sx={{ margin: "50px 0px", display: "flex", gap: "10px" }}
        >
          BIZNING <Typography color="#246cb6">O`QITUVCHILAR</Typography>
        </Typography>
        <Teacher />
      </Container>
    </Box>
  );
};

export default MyTeachers;
