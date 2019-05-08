import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  Container,
  Grid,
  Typography,
  Divider,
  IconButton,
  Fab,
} from '@material-ui/core';

import BackIcon from '@material-ui/icons/ArrowBackRounded';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import ArrowForwardIcon from '@material-ui/icons/ArrowForwardRounded';

import CartContext from '../contexts/CartContext';
import data from '../constants/shop-items.json';
import CartItem from '../components/CartItem';
import CartNoItems from '../components/CartNoItems';

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

  cartIcon: {
    fontSize: 36,

    marginRight: theme.spacing(1.5),
    color: theme.palette.text.primary,

    position: 'relative',
    top: 4,
  },

  cartItemsSection: {
    margin: theme.spacing(6, 0),
  },
  checkoutSection: {
    margin: theme.spacing(6, 0),
    textAlign: 'right',
  },

  fab: {
    marginTop: theme.spacing(3),
    marginRight: theme.spacing(-1),
    marginLeft: 'auto',
  },
}));

const CartContainer = props => {
  const classes = useStyles();

  const cartContext = useContext(CartContext);

  // const getItemFromId = id => data.items.filter(x => x.id === id)[0];
  // const total = Object.keys(cartContext.cart)
  //   .reduce((a, c) => a + getItemFromId(c).price * cartContext.cart[c], 0)
  //   .toFixed(2);

  return (
    <Container maxWidth="md" className={classes.root}>
      <IconButton
        color="primary"
        className={classes.backButton}
        component={Link}
        to="/"
      >
        <BackIcon />
      </IconButton>

      <Grid container alignItems="baseline">
        <ShoppingCartIcon className={classes.cartIcon} />
        <Typography variant="h3" gutterBottom>
          Cart
        </Typography>
      </Grid>

      <Divider />

      <section className={classes.cartItemsSection}>
        {/* {cartContext.count > 0 ? (
          cartContext.cart.map(id => (
            <CartItem
              key={id}
              id={id}
              title={getItemFromId(id).title}
              image={getItemFromId(id).image}
              qty={cartContext.cart[id]}
            />
          ))
        ) : (
          <CartNoItems />
        )} */}
      </section>

      <Divider />

      <section className={classes.checkoutSection}>
        <Typography variant="h6" color="textSecondary">
          Total
        </Typography>
        <Typography variant="h4">$00.00</Typography>

        <Fab
          variant="extended"
          color="primary"
          className={classes.fab}
          component={Link}
          to="/checkout"
        >
          Check out
          <ArrowForwardIcon />
        </Fab>
      </section>
    </Container>
  );
};

export default CartContainer;
