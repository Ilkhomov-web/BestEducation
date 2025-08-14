import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import coursData from "../../data/coursData";

const CoursCard = () => {
  const [allCours, setAllCours] = useState(coursData);

  const handleCategoryCours = (category) => {
    if (category === "all") {
      setAllCours(coursData);
    } else {
      const filterCours = coursData.filter(
        (item) => category === item.courseCategory
      );
      setAllCours(filterCours);
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        background: "white",
        padding: "30px",
        borderRadius: "12px",
        marginBottom: "30px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "30px",
        }}
      >
        <Button
          sx={{
            background: "#246cb6",
            color: "white",
            width: "300px",
            fontSize: "18px",
          }}
          onClick={() => handleCategoryCours("all")}
        >
          Barchasi
        </Button>
        <Button
          sx={{
            background: "#246cb6",
            color: "white",
            width: "300px",
            fontSize: "18px",
          }}
          onClick={() => handleCategoryCours("language")}
        >
          Chet tillari
        </Button>
        <Button
          sx={{
            background: "#246cb6",
            color: "white",
            width: "300px",
            fontSize: "18px",
          }}
          onClick={() => handleCategoryCours("science")}
        >
          Fanlar
        </Button>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "left",
          gap: "50px",
        }}
      >
        {allCours.map((item) => {
          return (
            <Card
              key={item.id}
              sx={{
                width: "330px",
                background: "rgb(255, 255, 255)",
                backdropFilter: "blur(10px) saturate(180%)",
                WebkitBackdropFilter: "blur(10px) saturate(180%)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
                boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
                borderRadius: "12px",
                transition: "0.3s",
                cursor: "pointer",
                padding: "10px 10px",
                "&:hover": {
                  transform: "scale(1.07)",
                  transition: "0.3s",
                },
              }}
            >
              <CardMedia
                sx={{ width: "300px", height: "160px" }}
                image={item.coursImg}
              />
              <CardContent>
                <Typography variant="h5" color="#246cb6" marginBottom={"10px"}>
                  {item.courseName}
                </Typography>
                <Typography variant="p" color="gray">
                  {item.courseDesc}
                </Typography>
              </CardContent>
              <CardActions>
                <Button sx={{ border: "1px solid #246cb6" }}>Ulashish</Button>
                <Button sx={{ background: "#246cb6", color: "white" }}>
                  Hoziriq O'qish
                </Button>
              </CardActions>
            </Card>
          );
        })}
      </Box>
    </Box>
  );
};

export default CoursCard;
