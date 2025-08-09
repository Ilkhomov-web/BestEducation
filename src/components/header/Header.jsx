import { Box, Container, Typography } from "@mui/material";
import React from "react";
import HeaderForm from "./HeaderForm";
// import RainbowBackground from "../header/RainbowBackground";
import AnimatedText from "./AnimationText";

const Header = () => {
  return (
    <Box sx={{ height: "600px", marginTop: "120px" }}>
      {/* <RainbowBackground> */}
      <Container
        maxWidth={"lg"}
        sx={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "60%",
            background: "rgb(255, 255, 255)", // Shaffof oq fon
            backdropFilter: "blur(10px) saturate(180%)", // Blur va rang intensivligi
            WebkitBackdropFilter: "blur(10px) saturate(180%)", // Safari support
            border: "1px solid rgba(255, 255, 255, 0.3)", // Shaffof ramka
            borderRadius: "12px",
            boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
            padding: "50px",
          }}
        >
          <Box
            component={"img"}
            src="/cup.png"
            sx={{
              width: "180px",
              position: "absolute",
              top: "-80px",
              right: "-50px",
            }}
          ></Box>
          <Typography
            variant="h3"
            sx={{
              marginBottom: "20px",
              display: "flex",
              alignItems: "center",
              gap: "10px",
            }}
          >
            The Best <AnimatedText />
          </Typography>
          <Typography sx={{ lineHeight: "1.6" }}>
            2013-yil 22-iyulda tashkil etilgan bo‘lib, hozirda Toshkent
            shahrining eng qulay manzillarida o‘quv markazining 12 ta yirik
            filiali faoliyat yuritadi va ilg‘or texnologiyalar bilan
            jihozlangan, yuqori saviyada o‘qitish uchun eng yaxshi sharoitlar
            yaratilgan. Ta'lim Oksford universiteti (Oxford University Press)
            tomonidan ishlab chiqilgan maxsus dastur bo'yicha olib boriladi, bu
            eng yaxshilaridan biri hisoblanadi! Bizning O'QUV MARKAZIMIZ
            O'zbekistonda birinchi bo'lib ushbu dasturdan litsenziyalangan
            formatda foydalanadi.
          </Typography>
        </Box>
        <Box
          sx={{
            width: "35%",
            background: "rgb(255, 255, 255)", // Shaffof oq fon
            backdropFilter: "blur(10px) saturate(180%)", // Blur va rang intensivligi
            WebkitBackdropFilter: "blur(10px) saturate(180%)", // Safari support
            border: "1px solid rgba(255, 255, 255, 0.3)", // Shaffof ramka
            borderRadius: "12px",
          }}
        >
          <HeaderForm />
        </Box>
      </Container>
      {/* </RainbowBackground> */}
    </Box>
  );
};

export default Header;
