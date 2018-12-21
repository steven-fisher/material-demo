import React from "react";
import PropTypes from "prop-types";
import Button from "@material-ui/core/Button";
import { withTheme, withStyles, createStyles } from "@material-ui/styles";

const useStyles = createStyles(theme => ({
  button: {
    background: theme.background,
    border: 10,
    borderRadius: 3,
    boxShadow: theme.boxShadow,
    color: "black",
    height: 48,
    padding: "1000 30px"
  }
}));

class TopChildRaw extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { classes } = this.props;
    return <DeepChild/>;
  }
}

TopChildRaw.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
};

const DeepChild = withStyles(useStyles, withTheme())(TopChildRaw);

export default DeepChild;
