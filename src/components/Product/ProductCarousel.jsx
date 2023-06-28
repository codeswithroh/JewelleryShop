import { useState } from "react";
import {
  CarouselProvider,
  Slider,
  Slide,
  ImageWithZoom,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";
import { useTheme } from "@mui/material/styles";
import useMediaQuery from "@mui/material/useMediaQuery";
import { Box } from "@mui/material";
import useStyles from "../../styles/styles";

function ProductCarousel() {
  const classes = useStyles();
  const [currentSlide, setCurrentSlide] = useState(0);
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  const handlePreviewClick = (index) => {
    setCurrentSlide(index);
  };

  return (
    <>
      {isSmallScreen ? (
        <CarouselProvider
          visibleSlides={1}
          totalSlides={3}
          naturalSlideWidth={300}
          naturalSlideHeight={300}
          infinite
          currentSlide={currentSlide}
          dragEnabled={true}
          dragStep={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=1"
                alt="product"
              />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=2"
                alt="product"
              />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=3"
                alt="product"
              />
            </Slide>
          </Slider>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "5px",
                  overflow: "hidden",
                  marginRight: 2,
                  cursor: "pointer",
                  border: index === currentSlide ? "2px solid black" : "none",
                }}
                onClick={() => handlePreviewClick(index)}
              >
                <img
                  src={`https://picsum.photos/50/50?random=${index}`}
                  alt={`product preview ${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Box>
        </CarouselProvider>
      ) : (
        <CarouselProvider
          visibleSlides={1}
          totalSlides={3}
          naturalSlideWidth={400}
          naturalSlideHeight={400}
          infinite
          currentSlide={currentSlide}
          dragEnabled={true}
          dragStep={1}
          touchEnabled={false}
        >
          <Slider>
            <Slide index={0}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=1"
                alt="product"
              />
            </Slide>
            <Slide index={1}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=2"
                alt="product"
              />
            </Slide>
            <Slide index={2}>
              <ImageWithZoom
                className={classes.productImage}
                src="https://picsum.photos/400/300?random=3"
                alt="product"
              />
            </Slide>
          </Slider>
          <Box sx={{ display: "flex", justifyContent: "center", marginTop: 2 }}>
            {[0, 1, 2].map((index) => (
              <Box
                key={index}
                sx={{
                  width: 50,
                  height: 50,
                  borderRadius: "5px",
                  overflow: "hidden",
                  marginRight: 2,
                  cursor: "pointer",
                  border: index === currentSlide ? "2px solid black" : "none",
                }}
                onClick={() => handlePreviewClick(index)}
              >
                <img
                  src={`https://picsum.photos/50/50?random=${index}`}
                  alt={`product preview ${index}`}
                  style={{ width: "100%", height: "auto" }}
                />
              </Box>
            ))}
          </Box>
        </CarouselProvider>
      )}
    </>
  );
}

export default ProductCarousel;
