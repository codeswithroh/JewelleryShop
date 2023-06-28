import { useState } from "react";
import { useParams } from "react-router-dom";
import "pure-react-carousel/dist/react-carousel.es.css";
import {
  Box,
  Button,
  Container,
  Divider,
  FormControl,
  Grid,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import ProductCarousel from "./ProductCarousel";

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

function ProductDetails() {
  const { id } = useParams();
  console.log(id);

  const [value, setValue] = useState(0);
  const [size, setSize] = useState(6);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleSizeChange = (event) => {
    setSize(event.target.value);
  };

  return (
    <ThemeProvider theme={theme}>
      <Container sx={{ mt: 4 }}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6} sx={{ height: "100%", width: "100%" }}>
            <ProductCarousel />
          </Grid>
          <Grid item xs={12} md={6}>
            <Box sx={{ display: "flex", flexDirection: "column" }}>
              <Box sx={{ flexGrow: 1 }}>
                <Typography variant="h4" gutterBottom>
                  Product Title
                </Typography>
                <Typography variant="body1" gutterBottom>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                  euismod euismod sapien, vel bibendum sapien.
                </Typography>
                <Box
                  sx={{ display: "flex", alignItems: "center", marginTop: 2 }}
                >
                  <FormControl fullWidth>
                    <InputLabel id="product-size">Size</InputLabel>
                    <Select
                      labelId="product-size"
                      id="product-size-select"
                      value={size}
                      label="Size"
                      onChange={handleSizeChange}
                    >
                      <MenuItem value={6}>6</MenuItem>
                      <MenuItem value={7}>7</MenuItem>
                      <MenuItem value={8}>8</MenuItem>
                      <MenuItem value={9}>9</MenuItem>
                    </Select>
                  </FormControl>
                </Box>
                <Stack spacing={2}>
                  <Button
                    color="warning"
                    variant="contained"
                    sx={{ mt: 4, py: 2 }}
                    fullWidth
                  >
                    Buy Now
                  </Button>
                  <Button variant="contained" sx={{ mt: 4, py: 2 }} fullWidth>
                    Add to Cart
                  </Button>
                </Stack>
              </Box>
              <Divider sx={{ mt: 4 }} />
              <Box sx={{ flexGrow: 1, marginTop: 2 }}>
                <Tabs value={value} onChange={handleChange}>
                  <Tab label="Description" />
                  <Tab label="Product Details" />
                  <Tab label="Delivery Details" />
                </Tabs>
                <Box sx={{ marginTop: 2 }}>
                  {value === 0 && (
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod euismod sapien, vel bibendum sapien.
                    </Typography>
                  )}
                  {value === 1 && (
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod euismod sapien, vel bibendum sapien.
                    </Typography>
                  )}
                  {value === 2 && (
                    <Typography variant="body1">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                      Sed euismod euismod sapien, vel bibendum sapien.
                    </Typography>
                  )}
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </ThemeProvider>
  );
}

export default ProductDetails;
