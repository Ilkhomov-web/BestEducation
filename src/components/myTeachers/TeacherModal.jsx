// TeacherModal.jsx
import {
  Box,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Typography,
} from "@mui/material";
import React from "react";

const TeacherModal = ({ handleClose, open, teacher }) => {
  if (!teacher) return null; // Agar teacher tanlanmagan bo‘lsa, hech narsa ko‘rsatmaymiz

  return (
    <Box>
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{ display: "flex", justifyContent: "center" }}
        maxWidth="sm"
        fullWidth
      >
        <Box
          component={"img"}
          src={teacher.image}
          sx={{ width: "300px", height: "300px" }}
        ></Box>
        <DialogTitle>{teacher.name}</DialogTitle>
        <DialogContent>
          <Typography variant="body1" gutterBottom>
            <strong>Tajriba:</strong> {teacher.experience}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>Yutuqlar:</strong> {teacher.achievements}
          </Typography>
          <Typography variant="body1" gutterBottom>
            <strong>O‘quvchilar:</strong> {teacher.students}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Yopish</Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default TeacherModal;
