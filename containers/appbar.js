
import React, { useState, useContext } from 'react';
import { createStyles, makeStyles, createMuiTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import Slide from '@material-ui/core/Slide';
import Image from 'next/image'
import SwapHorizIcon from '@material-ui/icons/SwapHoriz';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import clsx from 'clsx';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';

import { useTheme } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';
import Brightness4Icon from '@material-ui/icons/Brightness4';

function HideOnScroll(props) {
  const { children } = props

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      { children}
    </Slide>
  );
}

const useStyles = makeStyles((theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      marginLeft: '20px'
    },
    title: {
      flexGrow: 5,
      fontFamily: 'Supernett-cn',
    },

    appbar: {

    },
    boton: {
      fontFamily: 'Supernett-cn',
      color: 'inherit',

      fontSize: "20px",

      marginRight: '20px',

      '&:hover': {

        opacity: 0.7,
        fontSize: '120%'


      },

      [theme.breakpoints.down("xs")]: {
        fontSize: "16px"
      }
    },

    digitalClock: {
      color: "white",
      fontFamily: 'Supernett-cn',

    },

    desktop: {
      [theme.breakpoints.down("sm")]: {
        display: 'none'
      }
    },
    mobile: {

      [theme.breakpoints.up("md")]: {
        display: 'none'
      }

    },
    list: {
      width: 200,
    },
    fullList: {
      width: 'auto',
    },



  }),



);

function scrollToForm() {
  document.querySelector('#me').scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {

  window.scrollTo({ top: 0, behavior: 'smooth' });
}







export default function HeadBar({ onToggleDark }) {

  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event && event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['INFO', 'CV', 'ILUSTRACIONES', 'ANIMACIONES', 'REDES SOCIALES'].map((text, index) => (
          <ListItem button key={text}>
            {/* <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon> */}
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      {/* <List>
        {['All mail', 'Trash', 'Spam'].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List> */}
    </div>
  );



  const tema = useTheme();

  const classes = useStyles();

  console.log("color main: " + tema.palette.primary.main)

  return (

    <>


      <div className={classes.root}>

        <HideOnScroll>
          <AppBar className={classes.appbar} position="fixed" color='primary' >
            <Toolbar>
              <IconButton onClick={scrollToTop} edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <Image
                  className={classes.ball}
                  src="/images/logo_nyaldox2.png"
                  alt="Picture of the author"
                  width={48}
                  height={50}
                />
              </IconButton>

              <Typography variant="h6" className={classes.title}>
                Nyaldox2
              </Typography>



              <IconButton     //icon button with onClick handler
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={onToggleDark}
              >
                <Brightness4Icon />
              </IconButton>


              <div className={classes.desktop}>
                <Button onClick={scrollToForm} className={classes.boton}  >Info</Button>
                <Button className={classes.boton} >CV</Button>
                <Button className={classes.boton} >Ilustraciones</Button>
                <Button className={classes.boton} >Animaciones</Button>
                <Button className={classes.boton} >Redes Sociales</Button>
              </div>

              <div className={classes.mobile}>
                
                  <React.Fragment key='right'>

                    <IconButton onClick={toggleDrawer('right', true)}
                    color="inherit">

                      <MenuIcon/>


                    </IconButton>


                    
                    
                  </React.Fragment>
                
              </div>



            </Toolbar>
          </AppBar>
        </HideOnScroll>
        <SwipeableDrawer
                      anchor='right'
                      open={state['right']}
                      onClose={toggleDrawer('right', false)}
                      onOpen={toggleDrawer('right', true)}
                    >
                      {list('right')}
                    </SwipeableDrawer>

      </div>


    </>



  )

}