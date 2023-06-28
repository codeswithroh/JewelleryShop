import React from "react";
import { Box, Typography } from "@mui/material";
import useStyles from "../styles/styles";

const Footer = () => {
  const date = new Date().getFullYear();
  const classes = useStyles();

  return (
    <Box sx={{ flexGrow: 1 }} className={classes.footerContainer}>
      <Typography className={classes.footerText}>R&R</Typography>
      <Typography className={classes.footerDate}>
        Copyright @ {date}, R&R
      </Typography>
    </Box>
  );
};

export default Footer;
