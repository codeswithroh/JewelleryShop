import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import genz from "../images/demo_2.jpg";
import useStyles from "../styles/styles";

const AboutUs = () => {
  const classes = useStyles();

  return (
    <Box className={classes.aboutUsContainer}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={5}>
          <img
            style={{ borderRadius: "10px" }}
            src={genz}
            alt="My Team"
            className={classes.largeImage}
          />
        </Grid>

        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Shine Bright, Do Good
          </Typography>
          <Typography className={classes.aboutUsSubtitle}>
            Every R&R purchase supports women and youth causes. We believe in
            GenZ and we believe that this generation will revelutionize the
            whole world.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            CONTACT US
          </Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default AboutUs;
