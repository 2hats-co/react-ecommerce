import React, { useContext } from 'react';
import { Link } from 'react-router-dom';

import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  InputBase,
  Badge,
  Grid,
  Hidden,
} from '@material-ui/core';

import SearchIcon from '@material-ui/icons/Search';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCartRounded';
import FilterIcon from '@material-ui/icons/FilterListRounded';

import CartContext from '../contexts/CartContext';

import { makeStyles } from '@material-ui/styles';
import { fade } from '@material-ui/core/styles/colorManipulator';

const useStyles = makeStyles(theme => ({
  root: {
    zIndex: theme.zIndex.drawer + 1,
  },
  grow: {
    flexGrow: 1,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('md')]: {
      width: 200,
    },
  },
}));

const TopBar = props => {
  const { setShowFilterDrawer } = props;

  const handleClickFilterButton = () => {
    setShowFilterDrawer(showFilterDrawer => !showFilterDrawer);
  };

  const classes = useStyles();
  const cartContext = useContext(CartContext);

  return (
    <div className={classes.grow}>
      <AppBar position="fixed" className={classes.root}>
        <Toolbar className={classes.toolbar}>
          <Grid item>
            <Hidden mdUp>
              <IconButton color="inherit" onClick={handleClickFilterButton}>
                <FilterIcon />
              </IconButton>
            </Hidden>
            <Hidden smDown>
              <Typography variant="h6" color="inherit" noWrap>
                Store
              </Typography>
            </Hidden>
          </Grid>
          <Grid item>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon />
              </div>
              <InputBase
                placeholder="Search…"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
          </Grid>
          <Grid item>
            <IconButton color="inherit" component={Link} to="/cart">
              <Badge badgeContent={cartContext.count} color="secondary">
                <ShoppingCartIcon />
              </Badge>
            </IconButton>
          </Grid>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default TopBar;
