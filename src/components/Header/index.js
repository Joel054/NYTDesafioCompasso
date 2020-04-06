import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import HomeIcon from '@material-ui/icons/Menu';
//
import LinkWrapper from '../LinkWrapper'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    // textDecoration: 'none',
  },
}));

export default function Header() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            
            
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="ciencia">
            <HomeIcon/>
            </IconButton>
            <Button variant="default" edge="start" color="inherit">
              <LinkWrapper to="/Science">Ciência</LinkWrapper>
            </Button>
            <Button variant="default">
              <LinkWrapper to="/Technology">Tecnologia</LinkWrapper>
            </Button>
          </Typography>
          <Button color="inherit" color="white">
            <LinkWrapper to="/" activeStyle={{}}>Início</LinkWrapper>
          </Button>
          
        </Toolbar>
      </AppBar>
    </div>
  );
}
