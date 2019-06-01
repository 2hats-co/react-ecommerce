import React from 'react';

import { Grid, CircularProgress } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  root: {
    height: '100%',
    minHeight: 'calc(100vh - 64px)',
    width: '100%',
  },
}));

const Loading = props => {
  const classes = useStyles();

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      className={classes.root}
    >
      <CircularProgress />
    </Grid>
  );
};

export default Loading;
