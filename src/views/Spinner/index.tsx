import React from "react";
import { styled } from "@mui/system";

const SpinnerContainer = styled("div")({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  height: "40vh",
});

const SpinnerOverlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  backgroundColor: "#fff",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
});

const SpinnerImage = styled("img")({
  maxWidth: "100%",
  maxHeight: "100%",
});

const Spinner = () => {
  return (
    <SpinnerOverlay>
      <SpinnerContainer>
        <SpinnerImage src={`/assets/spinner/hi-smile.gif`} alt="Loading..." />
      </SpinnerContainer>
    </SpinnerOverlay>
  );
};

export default Spinner;
