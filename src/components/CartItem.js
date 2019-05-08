import React, { useContext } from 'react';

import { Grid, Typography, IconButton } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/DeleteRounded';

import CartContext from '../contexts/CartContext';

import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles(theme => ({
  root: {
    marginBottom: theme.spacing(3),

    [theme.breakpoints.down('xs')]: { marginBottom: theme.spacing(4) },
  },
  image: {
    width: '100%',
    maxWidth: 140,
    height: 100,

    backgroundColor: theme.palette.divider,
    backgroundImage: props =>
      props.image ? `url(assets/images/${props.image})` : '',
    backgroundPosition: 'center center',
    backgroundSize: 'cover',

    borderRadius: theme.shape.borderRadius,

    [theme.breakpoints.down('xs')]: { marginBottom: theme.spacing(1) },
  },
  qty: {
    fontWeight: 700,
    fontVariantNumeric: 'tabular-nums',

    color: theme.palette.secondary.contrastText,
    backgroundColor: theme.palette.secondary.main,
    borderRadius: 500,
    padding: theme.spacing(0.5, 1),

    minWidth: 28,
    boxSizing: 'border-box',
    textAlign: 'center',

    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(2),

    [theme.breakpoints.down('xs')]: { marginLeft: theme.spacing(0) },
  },
  removeButton: {
    marginRight: theme.spacing(-1.5),
  },
}));

const CartItem = props => {
  const { title, qty, id } = props;

  const classes = useStyles(props);

  const handleDelete = () => {};

  return (
    <Grid container className={classes.root} alignItems="center">
      <Grid item xs={12} sm={2}>
        <div className={classes.image} />
      </Grid>

      <Grid item>
        <Typography variant="body2" className={classes.qty}>
          {qty}
        </Typography>
      </Grid>

      <Grid item xs>
        <Typography variant="h5">{title}</Typography>
      </Grid>

      <Grid>
        <IconButton onClick={handleDelete} className={classes.removeButton}>
          <DeleteIcon />
        </IconButton>
      </Grid>
    </Grid>
  );
};

export default CartItem;
