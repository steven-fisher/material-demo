import React from "react";
import PropTypes from "prop-types";
import { ThemeProvider } from "@material-ui/styles";
import TopChild from "./topchild";

const theme = {
  spacing: "8px",
  background: "linear-gradient(45deg, #AF6B8B 30%, #FF8E53 90%)"
};

function WithTheme() {
  return (
    <ThemeProvider theme={theme}>
      <TopChild />
    </ThemeProvider>
  );
}

export default WithTheme;
