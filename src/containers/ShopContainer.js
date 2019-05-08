import React, { useState, useEffect } from 'react';
import data from '../constants/shop-items.json';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import ShopItem from '../components/ShopItem';
import FilterDrawer from '../components/FilterDrawer';

const useStyles = makeStyles(theme => ({
  itemGrid: {
    margin: theme.spacing(-2),
    marginTop: 64,
  },
}));

const ShopContainer = props => {
  const classes = useStyles();

  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filters, setFilters] = useState([]);

  const updateFilters = filter => {
    const index = filters.indexOf(filter);
    if (index > -1) {
      const newFilters = [...filters];
      newFilters.splice(index, 1);
      setFilters(newFilters);
      console.log('new', newFilters);
    } else {
      setFilters([...filters, filter]);
    }
  };

  useEffect(() => {
    console.log(filters);
  }, [filters]);

  const filteredItems =
    filters.length > 0
      ? data.items.filter(item =>
          item.categories.some(cat => filters.includes(cat))
        )
      : data.items;

  return (
    <>
      <TopBar setShowFilterDrawer={setShowFilterDrawer} />
      <Grid container>
        <Grid item>
          <FilterDrawer
            showFilterDrawer={showFilterDrawer}
            setShowFilterDrawer={setShowFilterDrawer}
            filters={filters}
            updateFilters={updateFilters}
          />
        </Grid>
        <Grid item xs>
          <Grid
            container
            spacing={2}
            justify="center"
            className={classes.itemGrid}
          >
            {filteredItems.map(x => (
              <Grid item key={x.id}>
                <ShopItem {...x} />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopContainer;
