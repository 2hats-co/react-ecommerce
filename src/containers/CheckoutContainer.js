import React from 'react';
import { Link } from 'react-router-dom';

import { Container, IconButton, Typography, Divider } from '@material-ui/core';
import BackIcon from '@material-ui/icons/ArrowBackRounded';

import CheckoutForm from '../components/CheckoutForm';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: theme.spacing(2),
    marginBottom: theme.spacing(4),
  },
  backButton: {
    marginBottom: theme.spacing(2),
    marginLeft: theme.spacing(-1.5),
  },
  divider: { marginBottom: theme.spacing(6) },
}));

const CheckoutContainer = props => {
  const classes = useStyles();

  return (
    <Container maxWidth="sm" className={classes.root}>
      <IconButton
        color="primary"
        className={classes.backButton}
        component={Link}
        to="/cart"
      >
        <BackIcon />
      </IconButton>

      <Typography variant="h3" gutterBottom>
        Checkout
      </Typography>

      <Divider className={classes.divider} />

      <CheckoutForm />
    </Container>
  );
};

export default CheckoutContainer;
