import React from "react";
import { Grid, Typography, Button, Box } from "@mui/material";
import necklace from "../images/demo_necklace.jpg";
import useStyles from "../styles/styles";

const Hero = () => {
  const classes = useStyles();

  return (
    <Box className={classes.heroBox}>
      <Grid container spacing={6} className={classes.gridContainer}>
        <Grid item xs={12} md={6}>
          <Typography variant="h3" fontWeight={700} className={classes.title}>
            Beads for the Bold: Unleash Your Inner Gen Z Style
          </Typography>
          <Typography variant="h6" className={classes.subtitle}>
            Unleash your inner Gen Z style with our bold and beautiful bead
            necklaces. From vibrant colors to unique designs, our collection has
            something for everyone. Shop now and make a statement with every
            outfit.
          </Typography>
          <Button
            variant="contained"
            color="primary"
            sx={{ width: "200px", fontSize: "16px" }}
          >
            SHOP NOW
          </Button>
        </Grid>
        <Grid item xs={12} md={6}>
          <img
            style={{ borderRadius: "10px" }}
            src={necklace}
            alt="My Team"
            className={classes.largeImage}
          />
        </Grid>
      </Grid>
    </Box>
  );
};

export default Hero;
