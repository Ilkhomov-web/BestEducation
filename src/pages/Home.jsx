import React from "react";
import Navbar from "../components/navbar/Navbar";
import { Box } from "@mui/material";
import Header from "../components/header/Header";
import FastMarque from "../components/FastMarque";
import MyTeachers from "../components/myTeachers/MyTeachers";
import WhyStudy from "../components/whyStudy/WhyStudy";
import StudyResult from "../components/studyResult/StudyResult";
import Cours from "../components/cours/Cours";
import OurBranches from "../components/ourBranches/OurBranches";
import Footer from "../components/footer/Footer";

const Home = () => {
  return (
    <Box>
      <Navbar />
      <Header />
      <FastMarque />
      <WhyStudy />
      <StudyResult />
      <Cours />
      <FastMarque />
      <MyTeachers />
      <OurBranches />
      <Footer />
    </Box>
  );
};

export default Home;
