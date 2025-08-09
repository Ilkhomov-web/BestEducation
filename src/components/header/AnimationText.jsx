import { Typography, Box } from "@mui/material";
import { useState, useEffect } from "react";

const AnimatedText = (prop) => {
  const { fontSize } = prop;
  const words = ["School", "Education"];
  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // animatsiyani qayta ishga tushirish uchun
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 50); // animatsiyani reset qilish uchun kichik delay
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <Box
      sx={{
        display: "inline-block",
        overflow: "hidden",
      }}
    >
      <Typography
        variant="main1"
        sx={{
          fontSize: fontSize,
          display: "inline-block",
          transform: "translateY(0)",
          animation: animate ? "slideDown 0.5s ease" : "none",
          "@keyframes slideDown": {
            "0%": { transform: "translateY(-100%)", opacity: 0 },
            "100%": { transform: "translateY(0%)", opacity: 1 },
          },
          color: "#246cb6",
        }}
      >
        {words[index]}
      </Typography>
    </Box>
  );
};

export default AnimatedText;
