import React from 'react';

import {
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Button,
  Typography,
} from '@material-ui/core';

import { makeStyles } from '@material-ui/styles';

import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCartRounded';

const useStyles = makeStyles(theme => ({
  card: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
}));

function ShopItem(props) {
  const { title, image, description } = props;

  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardMedia className={classes.media} image={image} title={title} />
      <CardContent>
        <Typography gutterBottom variant="h5" component="h2">
          {title}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
          {description}
        </Typography>
      </CardContent>

      <CardActions>
        <Button size="small" color="primary">
          Add to cart
          <AddShoppingCartIcon />
        </Button>
      </CardActions>
    </Card>
  );
}

export default ShopItem;
