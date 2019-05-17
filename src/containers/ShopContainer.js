import React, { useState, useEffect } from 'react';
import qs from 'qs';

import { Grid } from '@material-ui/core';
import { makeStyles } from '@material-ui/styles';

import TopBar from '../components/TopBar';
import ShopItem from '../components/ShopItem';
import FilterDrawer from '../components/FilterDrawer';
import Loading from '../components/Loading';
import NoItems from '../components/NoItems';

import { API_URL } from '../constants/api';

const useStyles = makeStyles(theme => ({
  itemGrid: {
    margin: theme.spacing(-2),
    marginTop: 64,
  },
}));

const getData = async () => {
  const res = await fetch(API_URL + '/items');
  const data = await res.json();
  return data;
};

const getFilteredData = async filters => {
  const categories = qs.stringify({ category: filters });
  const res = await fetch(API_URL + '/items?' + categories);
  const data = await res.json();
  return data;
};

const getSearchResult = async searchQuery => {
  const res = await fetch(API_URL + '/items?search=' + searchQuery);
  const data = await res.json();
  return data;
};

const ShopContainer = props => {
  const classes = useStyles();

  const [searchQuery, setSearchQuery] = useState('');
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [showFilterDrawer, setShowFilterDrawer] = useState(false);
  const [filters, setFilters] = useState([]);

  useEffect(() => {
    getData().then(data => {
      setItems(data);
      setIsLoading(false);
    });
  }, []);

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
    setIsLoading(true);
    getFilteredData(filters).then(data => {
      setItems(data);
      setIsLoading(false);
    });
  }, [filters]);

  useEffect(() => {
    console.log(searchQuery);
    setIsLoading(true);
    getSearchResult(searchQuery).then(data => {
      setItems(data);
      setIsLoading(false);
    });
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
