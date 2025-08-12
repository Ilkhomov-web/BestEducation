import { Box, Container, Typography } from "@mui/material";
import React from "react";
import StudyResultCard from "./StudyResultCard";
import AnimatedText from "../header/AnimationText";

const StudyResult = () => {
  return (
    <Box>
      <Container maxWidth={"lg"}>
        <Typography
          variant="h3"
          sx={{
            display: "flex",
            alignItems: "center",
            margin: "20px 0px",
            gap: "6px",
          }}
        >
          “Best <AnimatedText />” natijasi raqamlarda
        </Typography>
        <Typography variant="h6" color="gray" sx={{ margin: "20px 0px" }}>
          2018-yil oktyabr oyidan 2024-yil iyul oyigacha bo‘lgan statistika
        </Typography>
        <Box>
          <StudyResultCard />
        </Box>
      </Container>
    </Box>
  );
};

export default StudyResult;
