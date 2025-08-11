import { Box, Typography } from "@mui/material";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./teacher.css";
import { Pagination } from "swiper/modules";
import { teachersData } from "../../data/teacherData";

const Teacher = () => {
  return (
    <Box sx={{ margin: "20px 0px" }}>
      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {teachersData.map((teacher) => {
          return (
            <SwiperSlide style={{ display: "flex", flexDirection: "column" }}>
              <Box component={"img"} src={teacher.image}></Box>
              <Typography>{teacher.name}</Typography>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </Box>
  );
};

export default Teacher;
