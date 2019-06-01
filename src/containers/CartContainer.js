import React, { useContext, useEffect } from 'react';
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
import CartItem from '../components/CartItem';

import NoItems from '../components/NoItems';

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

  const items = cartContext.cart;
  const total = Object.keys(items).reduce(
    (a, c) => a + items[c].qty * items[c].price,
    0
  );

  useEffect(() => console.log(items), [items]);

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
        {cartContext.count > 0 ? (
          Object.values(items).map(item => (
            <CartItem
              key={item.id}
              id={item.id}
              title={item.title}
              image={item.image}
              qty={item.qty}
            />
          ))
        ) : (
          <NoItems />
        )}
      </section>

      <Divider />

      <section className={classes.checkoutSection}>
        <Typography variant="h6" color="textSecondary">
          Total
        </Typography>
        <Typography variant="h4">${total}</Typography>

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
