import { Box, Typography } from "@mui/material";
import React from "react";

const HeaderContent = () => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <Box sx={{ width: "45%" }}>
        <Typography>Best o'quv markazi haqida</Typography>
        <Typography>
          “Best” o‘quv markazi 2014-yilda tashkil topgan. Bosh ofisimiz
          Yakkasaroy tumanida joylashgan Sifatli ta'lim, natijaviylik,
          mas'uliyatlilik. Avval tarbiya, keyin ta'lim.
        </Typography>
      </Box>
      <Box sx={{ width: "50%" }}>
        <Box component={"img"} width={"100%"} src="/headerImg.png"></Box>
      </Box>
    </Box>
  );
};

export default HeaderContent;
