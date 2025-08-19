import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ourLocation from "../../data/ourLocation";

const OurBranchesCard = (prop) => {
  const { setSelectedBranch, isMobile } = prop;
  const [expanded, setExpanded] = useState(false);

  const handleChange = (id) => (event, isExpanded) => {
    setExpanded(isExpanded ? id : false);
    if (isExpanded) {
      const branch = ourLocation.find((b) => b.id === id);
      setSelectedBranch(branch);
    }
  };

  return (
    <Box>
      {ourLocation.map((item) => (
        <Accordion
          key={item.id}
          expanded={expanded === item.id}
          onChange={handleChange(item.id)}
        >
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{item.name}</Typography>
          </AccordionSummary>
          <Box component="img" width="100%" src={item.img} alt={item.name} />
          <AccordionDetails>{item.desc}</AccordionDetails>
        </Accordion>
      ))}
    </Box>
  );
};

export default OurBranchesCard;
