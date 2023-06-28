import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import CssBaseline from "@mui/material/CssBaseline";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { lazy, Suspense } from "react";

const ErrorPage = lazy(() => import("./customComponents/ErrorPage"));
const HomePage = lazy(() => import("./Homepage"));
const Footer = lazy(() => import("./components/Footer"));
const ProductDetails = lazy(() =>
  import("./components/Product/ProductDetails")
);

const theme = createTheme({
  typography: {
    fontFamily: ["Poppins", "sans-serif"].join(","),
  },
});

const router = createBrowserRouter([
  {
    path: "/",
    exact: true,
    element: <HomePage />,
  },
  {
    path: "/product/:id",
    exact: true,
    element: <ProductDetails />,
  },
  {
    path: "*",
    element: <ErrorPage />,
  },
]);

function App() {
  return (
    <Suspense fallback="Loading...">
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        <Footer />
      </ThemeProvider>
    </Suspense>
  );
}

export default App;
