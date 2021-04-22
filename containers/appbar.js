
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


import { useTheme } from '@material-ui/core/styles';

import Switch from '@material-ui/core/Switch';





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
      backgroundColor: 'black'
    },
    boton: {
      fontFamily: 'Supernett-cn',
      color: "white",
      fontSize: "20px",
      backgroundColor: "black",
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

    }



  }),



);

function scrollToForm() {
  document.querySelector('#me').scrollIntoView({ behavior: 'smooth' });
}
function scrollToTop() {

  window.scrollTo({ top: 0, behavior: 'smooth' });
}







export default function HeadBar() {

  



  const changeTheme = () => {  // function to set state
    if (themeSelected === "primary") setThemeSelected("secondary");
    else setThemeSelected("primary");
  };


  const classes = useStyles();

  return (

    <>


      <div className={classes.root}>

        <HideOnScroll>
          <AppBar className={classes.appbar} position="fixed">
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

              <IconButton   //icon button with onClick handler
                className={classes.menuButton}
                color="inherit"
                aria-label="open drawer"
                onClick={() => {
                  changeTheme();
                }}
              >
                <SwapHorizIcon />
              </IconButton>



              <Button onClick={scrollToForm} className={classes.boton} >Info</Button>
              <Button className={classes.boton} >CV</Button>
              <Button className={classes.boton} >Ilustraciones</Button>
              <Button className={classes.boton} >Animaciones</Button>
              <Button className={classes.boton} >Redes Sociales</Button>
            </Toolbar>
          </AppBar>
        </HideOnScroll>

      </div>


    </>



  )

}