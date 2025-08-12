import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { whyStudy } from "../../data/whyStudy";

const WhyStudyCard = (prop) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        flexWrap: "wrap",
        justifyContent: "space-between",
        gap: "20px",
        perspective: "1000px",
      }}
    >
      {whyStudy.map((item) => {
        const [transform, setTransform] = useState(
          "rotateX(0deg) rotateY(0deg)"
        );

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
            key={item.id}
            sx={{
              width: "49%",
              padding: "50px 30px",
              display: "flex",
              flexDirection: "column",
              gap: "15px",
              borderRadius: "12px",
              background: "rgb(255, 255, 255)",
              backdropFilter: "blur(10px) saturate(180%)",
              WebkitBackdropFilter: "blur(10px) saturate(180%)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
              boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
              transition: "transform 0.2s ease",
              transform: transform,
              transformStyle: "preserve-3d",
              cursor: "pointer",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Box
              dangerouslySetInnerHTML={{ __html: item.svg }}
              sx={{ width: 48, height: 48 }}
            />
            <Typography variant="h4">{item.title}</Typography>
            <Typography variant="main1">{item.desc}</Typography>
          </Box>
        );
      })}
    </Box>
  );
};

export default WhyStudyCard;
