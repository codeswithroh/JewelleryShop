import React from "react";
import { Typography, Box, Card, CardContent, Grid } from "@mui/material";
import { Avatar } from "@mui/material";
import useStyles from "../styles/styles";

const Testimonial = () => {
  const classes = useStyles();
  const reviews = [
    {
      id: 1,
      name: "Debosmita Das",
      statement:
        "I love these necklaces! They're so cute and stylish, and they're perfect for everyday wear. I've gotten so many compliments on them.",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-kady.78fc482c.jpg",
      position: "Kolkata, India",
    },
    {
      id: 2,
      name: "Rinki Debnath",
      statement:
        "These necklaces are so unique and handmade, I love them! They're great for any occasion, and they're definitely a conversation starter.",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-aiysha.e119a0c1.jpg",
      position: "Kolkata, India",
    },
    {
      id: 3,
      name: "Rohit Purkait",
      statement:
        "I'm so glad I found this shop! The necklaces are so affordable, and they're great quality. I've already bought a few more, and I'm definitely going to be a repeat customer.",
      image_url:
        "https://sweta-myteam-website-fm.netlify.app/static/media/avatar-arthur.098c2e26.jpg",
      position: "Kolkata, India",
    },
  ];
  return (
    <Box
      sx={{
        flexGrow: 1,
        padding: "20px",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "300px",
        textAlign: "center",
      }}
    >
      <Typography
        sx={{ fontWeight: "bold", marginBottom: "0.5em" }}
        variant="h3"
      >
        Customer's Review
      </Typography>
      <Grid container spacing={2}>
        {reviews.map((review) => (
          <Grid item sm={12} md={4} key={review.id}>
            <Card className={classes.testimonialCard}>
              <CardContent>
                <Typography className={classes.testimonialStatement}>
                  "{review.statement}"
                </Typography>
                <Box sx={{ display: "flex" }}>
                  <Avatar
                    src={review.image_url}
                    size="large"
                    className={classes.avatar}
                  />
                  <Box>
                    <Typography>{review.name}</Typography>
                    <Typography className={classes.testimonialPosition}>
                      {review.position}
                    </Typography>
                  </Box>
                </Box>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default Testimonial;
