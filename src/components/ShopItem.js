import React, { useContext } from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
  Grid,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCartRounded';

import CartContext from '../contexts/CartContext';

const useStyles = makeStyles(theme => ({
  card: {
    width: 320,
    height: '100%',
  },
  wrapperGrid: {
    height: '100%',
  },
  media: {
    height: 140,
    backgroundColor: theme.palette.divider,
  },
}));

function ShopItem(props) {
  const { title, image, description, price, id } = props;

  const classes = useStyles();
  const cartContext = useContext(CartContext);

  return (
    <Card className={classes.card}>
      <Grid
        container
        direction="column"
        wrap="nowrap"
        className={classes.wrapperGrid}
      >
        <Grid item>
          <CardMedia
            className={classes.media}
            image={`assets/images/${image}`}
            title={title}
          />
        </Grid>

        <Grid item xs>
          <CardContent>
            <Grid container justify="space-between" alignItems="baseline">
              <Typography gutterBottom variant="h5" component="h2">
                {title}
              </Typography>
              <Typography variant="h6" color="textSecondary">
                ${price}
              </Typography>
            </Grid>
            <Typography variant="body1" color="textSecondary" component="p">
              {description}
            </Typography>
          </CardContent>
        </Grid>

        <Grid item>
          <CardActions>
            <Button
              size="small"
              color="primary"
              onClick={() => {
                cartContext.addToCart(id);
              }}
            >
              Add to cart
              <AddShoppingCartIcon />
            </Button>
          </CardActions>
        </Grid>
      </Grid>
    </Card>
  );
}

export default ShopItem;
