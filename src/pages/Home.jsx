import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import FastMarque from "../components/FastMarque";
import MyTeachers from "../components/myTeachers/MyTeachers";
import WhyStudy from "../components/whyStudy/WhyStudy";
import StudyResult from "../components/studyResult/StudyResult";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Header />
      <FastMarque />
      <WhyStudy />
      <StudyResult />
      <MyTeachers />
    </Box>
  );
};

export default Home;
