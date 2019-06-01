import React, { useState, useEffect } from 'react';
import qs from 'qs';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import ShopItem from '../components/ShopItem';
import FilterDrawer from '../components/FilterDrawer';
import Loading from '../components/Loading';
import NoItems from '../components/NoItems';
import useApi from '../hooks/useApi';

const useStyles = makeStyles(theme => ({
  itemGrid: {
    margin: theme.spacing(-2),
    marginTop: 64,
  },
}));

const ShopContainer = props => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filters, setFilters] = useState([]);

  const [items, isLoading, setQuery] = useApi('/items');

  const updateFilters = filter => {
    const index = filters.indexOf(filter);
    if (index > -1) {
      const newFilters = [...filters];
      newFilters.splice(index, 1);
      setFilters(newFilters);
    } else {
      setFilters([...filters, filter]);
    }
  };

  useEffect(() => {
    if (filters.length > 0) {
      const categories = qs.stringify({ category: filters });
      setQuery('/items?' + categories);
    } else {
      setQuery('/items');
    }
  }, [filters]);

  useEffect(() => {
    if (searchQuery) setQuery('/items?search=' + searchQuery);
    else setQuery('/items');
  }, [searchQuery]);

  return (
    <>
      <TopBar
        setShowFilterDrawer={setShowFilterDrawer}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
      />
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
            {isLoading ? (
              <Loading />
            ) : items.length === 0 ? (
              <NoItems />
            ) : (
              items.map(x => (
                <Grid item key={x.id}>
                  <ShopItem {...x} />
                </Grid>
              ))
            )}
          </Grid>
        </Grid>
      </Grid>
    </>
  );
};

export default ShopContainer;
