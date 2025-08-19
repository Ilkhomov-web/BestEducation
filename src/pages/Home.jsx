import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box, useMediaQuery, useTheme } from "@mui/material";
import Header from "../components/header/Header";
import FastMarque from "../components/FastMarque";
import MyTeachers from "../components/myTeachers/MyTeachers";
import WhyStudy from "../components/whyStudy/WhyStudy";
import StudyResult from "../components/studyResult/StudyResult";
import Cours from "../components/cours/Cours";
import OurBranches from "../components/ourBranches/OurBranches";
import Footer from "../components/footer/Footer";

const Home = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  return (
    <Box>
      <Navbar isMobile={isMobile} />
      <Header isMobile={isMobile} />
      <FastMarque />
      <WhyStudy isMobile={isMobile} />
      <StudyResult isMobile={isMobile} />
      <Cours isMobile={isMobile} />
      <FastMarque />
      <MyTeachers isMobile={isMobile} />
      <OurBranches isMobile={isMobile} />
      <Footer isMobile={isMobile} />
    </Box>
  );
};

export default Home;
