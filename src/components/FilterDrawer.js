import React from 'react';

import {
  Drawer,
  List,
  Divider,
  ListItem,
  ListItemIcon,
  ListItemText,
  Hidden,
} from '@material-ui/core';

import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';

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
}));

function FilterDrawer(props) {
  const { showFilterDrawer, setShowFilterDrawer } = props;
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
        {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
}

export default FilterDrawer;
