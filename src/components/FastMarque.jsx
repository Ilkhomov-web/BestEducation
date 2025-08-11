import { Box, Typography } from "@mui/material";
import React from "react";
import Marquee from "react-fast-marquee";

const FastMarque = () => {
  const items = ["Best Education", "Best School", "Best Kids"];
  return (
    <Marquee
      gradient={false}
      speed={50}
      style={{ margin: "0px 0px ", background: "#246cb6", padding: "30px 0px" }}
    >
      {Array(10) // 10 marta takrorlash
        .fill(items)
        .flat()
        .map((text, i) => (
          <Box
            key={i}
            sx={{
              mx: "20px",
              color: "white",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: "bold" }}>
              {text}
            </Typography>
          </Box>
        ))}
    </Marquee>
  );
};

export default FastMarque;
