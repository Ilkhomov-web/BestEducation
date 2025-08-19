import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const resultStudy = [
  {
    id: 1,
    title: "7500+",
    desc: "Shu kungacha bitirgan o‘quvchilar",
    boxImg: "/studentResult1.webp",
  },
  {
    id: 2,
    title: "85% - 95%",
    desc: "o'quvchilarimiz IELTS 7.5 va 7.5+ ga ega",
    boxImg: "/ielts.webp",
  },
];

const StudyResultCard = (prop) => {
  const { isMobile } = prop;
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: isMobile ? "column" : "row",
        justifyContent: "space-between",
        perspective: "1000px",
      }}
    >
      {resultStudy.map((item) => {
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
              width: isMobile ? "100%" : "48%",
              height: "300px",
              padding: "20px",
              overflow: "hidden",
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
              marginTop: isMobile ? "20px" : "0px",
            }}
            onMouseMove={handleMouseMove}
            onMouseLeave={handleMouseLeave}
          >
            <Typography variant={isMobile ? "h5" : "h4"} color="#246cb6">
              {item.title}
            </Typography>
            <Typography variant={isMobile ? "main1" : "h6"} color="gray">
              {item.desc}
            </Typography>
            <LazyLoadImage
              alt="school"
              src={item.boxImg}
              effect="blur"
              width="200px"
              style={{
                position: "relative",
                bottom: "-40px",
                right: isMobile ? "20px" : "-280px",
              }}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default StudyResultCard;
