import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { withStyles } from "@material-ui/core/styles";

const styles = theme => ({
  root: {
    [theme.breakpoints.down('sm')]: {
      marginTop: theme.spacing.unit / 2,
      textAlign: 'center',
    },
  }
})

const Topbar = ({ classes }) => (
  <AppBar position="fixed">
    <Toolbar>
      <Typography variant="title" color="inherit" className={classes.root}>
        Filmes para ver (de preferência) antes de morrer
      </Typography>
    </Toolbar>
  </AppBar>
);

export default withStyles(styles)(Topbar);
