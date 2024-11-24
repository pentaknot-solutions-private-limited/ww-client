import { CircularProgress } from "@mui/material";
import React from "react";

function LoadingComponent() {
  return (
    <div className="site-loader">
      <div className="loader-card">
        <CircularProgress />
        <span className="loading-text">Loading...</span>
      </div>
    </div>
  );
}

export default LoadingComponent;
