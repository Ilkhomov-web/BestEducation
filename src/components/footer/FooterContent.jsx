import { Box, List, ListItem, Typography } from "@mui/material";
import React from "react";
import AnimatedText from "../header/AnimationText";
import { Link } from "react-router-dom";
import InstagramIcon from "@mui/icons-material/Instagram";
import TelegramIcon from "@mui/icons-material/Telegram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const navigationData = [
  {
    id: 1,
    url: "#",
    title: "Bosh Sahifa",
  },
  {
    id: 2,
    url: "#",
    title: "Biz Haqimizda",
  },
  {
    id: 3,
    url: "#",
    title: "Kurslar",
  },
  {
    id: 4,
    url: "#",
    title: "Jamoa",
  },
  {
    id: 5,
    url: "#",
    title: "Sertifikatlar",
  },
];

const navigateIcon = [
  {
    id: 1,
    url: "#",
    icon: <InstagramIcon />,
  },
  {
    id: 2,
    url: "#",
    icon: <TelegramIcon />,
  },
  {
    id: 3,
    url: "#",
    icon: <YouTubeIcon />,
  },
];

const FooterContent = (prop) => {
  const { isMobile } = prop;
  return (
    <Box>
      <Typography
        variant="h3"
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "10px",
        }}
      >
        Best <AnimatedText />
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: isMobile ? "row" : "column",
          justifyContent: isMobile ? "space-between" : "center",
        }}
      >
        <Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            {navigationData.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  style={{ textDecoration: "none", color: "#246cb6" }}
                >
                  <ListItem>{item.title}</ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
        <Box>
          <List
            sx={{
              display: "flex",
              justifyContent: "center",
              flexDirection: isMobile ? "column" : "row",
            }}
          >
            {navigateIcon.map((item) => {
              return (
                <Link
                  key={item.id}
                  to={item.url}
                  style={{ textDecoration: "none", color: "#246cb6" }}
                >
                  <ListItem>{item.icon}</ListItem>
                </Link>
              );
            })}
          </List>
        </Box>
      </Box>
      <hr style={{ margin: "20px 0px", border: "2px solid #246cb6" }} />
      <Typography
        variant={isMobile ? "body2" : "body1"}
        sx={{
          display: "flex",
          justifyContent: "center",
          gap: "6px",
          color: "gray",
        }}
      >
        Copyright ©2025 All rights reserved | Website by{" "}
        <Link
          style={{
            textDecoration: "none",
            color: "#246cb6",
            fontWeight: "bold",
          }}
        >
          RealCode
        </Link>
      </Typography>
    </Box>
  );
};

export default FooterContent;
