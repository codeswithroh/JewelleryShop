import React from "react";
import { Grid, Typography, Box, Button } from "@mui/material";
import useStyles from "../styles/styles";
import product_1 from "../images/product_1.jpg";
import product_2 from "../images/product_2.jpg";
import product_3 from "../images/product_3.jpg";

const Section = () => {
  const classes = useStyles();

  const sectionItems = [
    {
      id: 1,
      sentence: "Evil Eye White Beads Necklace",
      image_url: product_1,
    },
    {
      id: 2,
      sentence: "Eveil Eye Black Beads Bracelet",
      image_url: product_2,
    },
    {
      id: 3,
      sentence: "Shell Green Beads Necklace",
      image_url: product_3,
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        minHeight: "400px",
        textAlign: "center",
      }}
    >
      <Typography sx={{ fontWeight: "bold" }} variant="h3">
        Best Seller
      </Typography>
      <Grid container className={classes.sectionGridContainer}>
        {sectionItems.map((item, index) => (
          <Grid
            item
            xs={12}
            md={3.5}
            minHeight={300}
            key={item.id}
            className={classes.sectionGridItem}
          >
            <img
              className={classes.sectionGridImages}
              src={item?.image_url}
              alt={`product-${index}`}
            />
            <Typography>{item.sentence}</Typography>
          </Grid>
        ))}
      </Grid>
      <Button
        variant="contained"
        color="primary"
        sx={{ width: "200px", fontSize: "16px" }}
      >
        See all products
      </Button>
    </Box>
  );
};

export default Section;
