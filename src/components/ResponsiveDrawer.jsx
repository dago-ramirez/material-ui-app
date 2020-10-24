import React from 'react';
import PropTypes from 'prop-types';
import CssBaseline from '@material-ui/core/CssBaseline';
import { makeStyles } from '@material-ui/core/styles';
import CustomizedTables from './CustomizedTables'
import AppNavBar from './AppNavBar';
import AsideNav from './AsideNav';
import FormComponent from './FormComponent';
import TextMobileStepper from './TextMobileStepper';
import SwipeableTextMobileStepper from './SwipeableTextMobileStepper';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer() {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppNavBar onClickEvent={handleDrawerToggle} classes={classes} />
      <AsideNav classes={classes}
                onClickEvent={handleDrawerToggle}
                mobileOpen={mobileOpen} />
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <TextMobileStepper />
        <SwipeableTextMobileStepper />
        <CustomizedTables />        
        <FormComponent />
      </main>
    </div>
  );
}

ResponsiveDrawer.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default ResponsiveDrawer;