import { Box, Button } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

function ErrorPage() {
  const navigate = useNavigate();
  return (
    <div
      style={{
        height: "100vh",
        display: "grid",
        placeItems: "center",
        margin: "auto 0",
      }}
    >
      <Box component="div" sx={{ textAlign: "center" }}>
        <h1>404 Page Not Found</h1>
        <p>Oops looks like you have visited a wrong page</p>
        <Button
          sx={{ mt: 2 }}
          variant="contained"
          onClick={() => navigate("/")}
        >
          Go To Home Page
        </Button>
      </Box>
    </div>
  );
}

export default ErrorPage;
