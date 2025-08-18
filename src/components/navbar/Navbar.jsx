import {
  Button,
  Container,
  Toolbar,
  AppBar,
  Box,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// import DarkModeIcon from "@mui/icons-material/DarkMode";
import AnimatedText from "../header/AnimationText";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Navbar = () => {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));
  const [openMenu, setOpenMenu] = useState(false);

  useEffect(() => {
    if (openMenu) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [openMenu]);

  const handleMenu = (arg) => {
    setOpenMenu(arg);
  };

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
          {isMobile ? (
            <Box>
              <Button
                onClick={() => {
                  handleMenu(true);
                }}
              >
                {" "}
                <MenuIcon style={{ fontSize: "38px" }} />
              </Button>
              <Box
                sx={{
                  display: openMenu ? "flex" : "none",
                  flexDirection: "column",
                  position: "absolute",
                  gap: "10px",
                  backdropFilter: "blur(25px) saturate(200%)",
                  WebkitBackdropFilter: "blur(25px) saturate(200%)",
                  backgroundColor: "#246cb6",
                  width: "300px",
                  right: "-24px",
                  padding: "30px",
                  height: "100vh",
                  top: "-20px",
                  borderLeft: "2px solid rgba(36, 109, 182, 0.77)",
                }}
              >
                <Button
                  onClick={() => {
                    handleMenu(false);
                  }}
                  sx={{
                    position: "absolute",
                    left: "10px",
                    top: "10px",
                    color: "white",
                  }}
                >
                  <CloseIcon />
                </Button>
                <Button sx={{ marginTop: "50px" }}>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Biz Haqimizda
                  </Link>
                </Button>
                <Button>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Jamoa
                  </Link>
                </Button>
                <Button>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Kurslar
                  </Link>
                </Button>
                <Button>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Narxlar
                  </Link>
                </Button>
                <Button>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Sertifikat
                  </Link>
                </Button>
                <Button>
                  <Link style={{ textDecoration: "none", color: "white" }}>
                    Aloqa
                  </Link>
                </Button>
              </Box>
            </Box>
          ) : (
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
            </Box>
          )}
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navbar;
