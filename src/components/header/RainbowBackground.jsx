// components/RainbowBackground.jsx
import { Box } from "@mui/material";
import React from "react";

const RainbowBackground = ({ length = 40, animationTime = 30, children }) => {
  const purple = "rgb(121, 187, 249)";
  const blue = "rgb(96, 165, 250)";
  const green = "rgb(147, 185, 255)";

  const combos = [
    [purple, blue, green],
    [purple, green, blue],
    [green, purple, blue],
    [green, blue, purple],
    [blue, green, purple],
    [blue, purple, green],
  ];

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        position: "relative",
        overflow: "hidden",
        borderRadius: "12px",
        "@keyframes slide": {
          from: { right: "-25vw" },
          to: { right: "125vw" },
        },
      }}
    >
      {/* Rainbow lines */}
      {Array.from({ length }).map((_, i) => {
        const colors = combos[Math.floor(Math.random() * combos.length)];
        return (
          <Box
            key={i}
            sx={{
              height: "100%",
              width: 0,
              top: 0,
              position: "absolute",
              transform: "rotate(10deg)",
              transformOrigin: "top right",
              boxShadow: `-130px 0 80px 40px white,
                          -50px 0 50px 25px ${colors[0]},
                           0 0 50px 25px ${colors[1]},
                           50px 0 50px 25px ${colors[2]},
                           130px 0 80px 40px white`,
              animation: `${
                animationTime - (animationTime / length / 2) * (i + 1)
              }s linear infinite slide`,
              animationDelay: `-${((i + 1) / length) * animationTime}s`,
            }}
          />
        );
      })}

      {/* Content on top */}
      <Box
        sx={{
          position: "relative",
          zIndex: 1,
          height: "100%",
          display: "flex",
          //   alignItems: "center",
          //   justifyContent: "center",
          backdropFilter: "blur(15px) saturate(180%)",
          backgroundColor: "rgba(255,255,255,0.3)",
          borderRadius: "12px",
        }}
      >
        {children}
      </Box>
    </Box>
  );
};

export default RainbowBackground;
