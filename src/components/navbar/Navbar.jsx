import {
  Button,
  Container,
  Toolbar,
  AppBar,
  Box,
  Typography,
} from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import DarkModeIcon from "@mui/icons-material/DarkMode";
import AnimatedText from "../header/AnimationText";

const Navbar = () => {
  return (
    <AppBar
      position="static"
      sx={{
        backdropFilter: "blur(25px) saturate(200%)",
        WebkitBackdropFilter: "blur(25px) saturate(200%)",
        backgroundColor: "rgba(255, 255, 255, 0.71)",
        padding: "20px 0px",
        boxShadow: "none",
        position: "sticky",
        top: "0px",
        zIndex: "1000",
        borderBottom: "1px solid #f0f0f0",
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Link
            style={{
              textDecoration: "none",
              color: "black",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              gap: "5px",
            }}
          >
            <Box component={"img"} width={"30px"} src="/logo2.png"></Box>
            <Typography fontSize={"25px"}>Best</Typography>
            <AnimatedText fontSize={"25px"} />
          </Link>
          <Box>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Biz Haqimizda
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Jamoa
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Kurslar
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Narxlar
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Sertifikat
              </Link>
            </Button>
            <Button>
              <Link style={{ textDecoration: "none", color: "black" }}>
                Aloqa
              </Link>
            </Button>
            <Button>
              <DarkModeIcon />
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
