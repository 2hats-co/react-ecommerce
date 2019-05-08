import React from 'react';

import {
  Drawer,
  List,
  ListSubheader,
  ListItem,
  ListItemText,
  Hidden,
  Checkbox,
} from '@material-ui/core';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

import data from '../constants/shop-items.json';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  toolbar: theme.mixins.toolbar,
  categoryButton: { textTransform: 'capitalize' },
}));

function FilterDrawer(props) {
  const {
    showFilterDrawer,
    setShowFilterDrawer,
    filters,
    updateFilters,
  } = props;
  const classes = useStyles();

  const theme = useTheme();
  const hideDrawer = useMediaQuery(theme.breakpoints.down('sm'));

  const handleClose = () => {
    setShowFilterDrawer(false);
  };

  return (
    <Drawer
      className={classes.drawer}
      variant={hideDrawer ? 'temporary' : 'permanent'}
      open={showFilterDrawer}
      classes={{
        paper: classes.drawerPaper,
      }}
      onClose={handleClose}
    >
      <Hidden smDown>
        <div className={classes.toolbar} />
      </Hidden>
      <List>
        <ListSubheader>Filter by category</ListSubheader>
        {data.categories.map(x => (
          <ListItem button key={x} onClick={() => updateFilters(x)}>
            <Checkbox
              tabIndex={-1}
              disableRipple
              checked={filters.includes(x)}
            />
            <ListItemText primary={x} className={classes.categoryButton} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default FilterDrawer;
