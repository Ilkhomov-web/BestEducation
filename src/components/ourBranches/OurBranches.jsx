import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import OurBranchesCard from "./OurBranchesCard";
import OurBranchesMap from "./OurBranchesMap";

const OurBranches = (prop) => {
  const { isMobile } = prop;
  const [selectedBranch, setSelectedBranch] = useState(null);

  return (
    <Box
      sx={{
        padding: "50px 0px",
        background: "#246cb6",
        backdropFilter: "blur(10px) saturate(180%)",
        WebkitBackdropFilter: "blur(10px) saturate(180%)",
        border: "1px solid rgba(255, 255, 255, 0.3)",
        boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
      }}
    >
      <Container maxWidth="lg">
        <Typography
          variant={isMobile ? "h5" : "h3"}
          marginBottom={"50px"}
          color="white"
        >
          Bizni Xaritadan Ko'ring
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: isMobile ? "column" : "row",
            gap: isMobile ? "20px" : "0px",
          }}
        >
          <Box sx={{ width: isMobile ? "100%" : "35%" }}>
            <OurBranchesCard
              isMobile={isMobile}
              setSelectedBranch={setSelectedBranch}
            />
          </Box>
          <Box sx={{ width: isMobile ? "100%" : "60%" }}>
            <OurBranchesMap selectedBranch={selectedBranch} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurBranches;
