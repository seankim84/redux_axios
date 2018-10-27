import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  }
});

function ContainedButtons(props) {
  const { classes, onClick, Pcounter } = props;
  return (
    <div style={{display: "inline-block", flexDirection:"column", width: "auto", alignItems: "center", justifyContent:"center"}}>
      <Button onClick={onClick} variant="contained" color="primary" className={classes.button}>{Pcounter}</Button>
    </div>
  );
}

ContainedButtons.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainedButtons);