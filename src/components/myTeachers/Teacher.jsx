// Teacher.jsx
import { Box, Typography } from "@mui/material";
import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "./teacher.css";
import { Pagination } from "swiper/modules";
import { teachersData } from "../../data/teacherData";
import TeacherModal from "./TeacherModal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

const Teacher = (prop) => {
  const { isMobile } = prop;
  const [open, setOpen] = useState(false);
  const [selectedTeacher, setSelectedTeacher] = useState(null);

  const handleClickOpen = (teacher) => {
    setSelectedTeacher(teacher);
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
    setSelectedTeacher(null);
  };

  return (
    <Box sx={{ margin: "20px 0px" }}>
      <Swiper
        slidesPerView={isMobile ? 1 : 3}
        spaceBetween={30}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {teachersData.map((teacher) => (
          <SwiperSlide
            key={teacher.id}
            onClick={() => handleClickOpen(teacher)}
            style={{
              display: "flex",
              flexDirection: "column",
              cursor: "pointer",
            }}
          >
            <LazyLoadImage
              alt="school"
              src={teacher.image}
              effect="blur"
              width="100%"
              style={{ margin: "0 auto" }}
            />
            <Typography
              variant="h6"
              sx={{
                borderLeft: "10px solid #246cb6",
                paddingLeft: "10px",
                textAlign: "center",
              }}
            >
              {teacher.name}
            </Typography>
          </SwiperSlide>
        ))}
      </Swiper>
      <TeacherModal
        handleClose={handleClose}
        open={open}
        teacher={selectedTeacher}
      />
    </Box>
  );
};

export default Teacher;
