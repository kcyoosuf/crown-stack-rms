import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Appbar from './Appbar';
import { Container } from '@material-ui/core';
import BreadCrumb from './Breadcrumb';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    padding: 6,
    maxWidth: 1200,
    margin: 'auto'
  },
}));

const PageContainer = ({ children }) => {
  const classes = useStyles();
  const [mobileOpen, setMobileOpen] = React.useState(false);
  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };
  return (
    <>
      <div className={classes.root}>
        <Appbar handleDrawerToggle={handleDrawerToggle} />
        <Container maxWidth="lg" className={classes.content}>
          <div className={classes.toolbar} />
          <BreadCrumb />
          {children}
        </Container>
      </div>
    </>
  );
}

export default React.memo(PageContainer);