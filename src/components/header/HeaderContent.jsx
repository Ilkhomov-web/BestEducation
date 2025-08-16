import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import AnimatedText from "./AnimationText";

const HeaderContent = () => {
  const [transform, setTransform] = useState("rotateX(0deg) rotateY(0deg)");

  const handleMouseMove = (e) => {
    const { left, top, width, height } =
      e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;
    const rotateY = (x / width - 0.5) * -20;
    const rotateX = (y / height - 0.5) * 20;
    setTransform(`rotateX(${rotateX}deg) rotateY(${rotateY}deg)`);
  };

  const handleMouseLeave = () => {
    setTransform("rotateX(0deg) rotateY(0deg)");
  };

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box
        sx={{
          width: "45%",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <Typography
          variant="h3"
          sx={{ display: "flex", alignItems: "center", gap: "10px" }}
        >
          The Best <AnimatedText />
        </Typography>
        <Typography variant="h6">
          “Best” o`z faoliyatini <b style={{ color: "#246cb6" }}>2011</b> -
          yilda Jizzax shahrida boshlagan bo`lib xozirda o`zining{" "}
          <b style={{ color: "#246cb6" }}>3</b> ta o`quv markazi,{" "}
          <b style={{ color: "#246cb6" }}>3</b> ta bolalar bog`chasi va
          <b style={{ color: "#246cb6" }}>1</b>ta xususiy o`rta maktabi bor !
        </Typography>
        <Button
          sx={{
            width: "200px",
            background: "#246cb6",
            color: "white",
            border: "1px solid #246cb6",
            "&:hover": {
              color: "#246cb6",
              background: "white",
              border: "1px solid #246cb6",
            },
          }}
        >
          Ko'proq Ma'lumot
        </Button>
      </Box>
      <Box
        sx={{
          width: "50%",
          perspective: "1000px", // 3D chuqurlik
        }}
      >
        <Box
          component="img"
          src="/headerImg.png"
          width="100%"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
          sx={{
            transition: "transform 0.2s ease",
            transform: transform,
            transformStyle: "preserve-3d",
            borderRadius: "10px",
          }}
        />
      </Box>
    </Box>
  );
};

export default HeaderContent;
