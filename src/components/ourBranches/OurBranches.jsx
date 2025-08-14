import { Box, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import OurBranchesCard from "./OurBranchesCard";
import OurBranchesMap from "./OurBranchesMap";

const OurBranches = () => {
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
        <Typography variant="h3" marginBottom={"50px"} color="white">
          Bizni Xaritadan Ko'ring
        </Typography>
        <Box sx={{ display: "flex", justifyContent: "space-between" }}>
          <Box sx={{ width: "35%" }}>
            <OurBranchesCard setSelectedBranch={setSelectedBranch} />
          </Box>
          <Box sx={{ width: "60%" }}>
            <OurBranchesMap selectedBranch={selectedBranch} />
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default OurBranches;
