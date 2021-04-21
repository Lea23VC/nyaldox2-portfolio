
import React, { useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import CssBaseline from '@material-ui/core/CssBaseline';
import Slide from '@material-ui/core/Slide';
import Headroom from 'react-headroom'
import Image from 'next/image'



function HideOnScroll(props) {
  const { children } = props

  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger();

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      { children }
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

      [theme.breakpoints.down("xs")]: {
          fontSize: "16px"
      }
  },



  }),



);





export default function HeadBar() {


  
  const classes = useStyles();

  return (

    <>


      <div className={classes.root}>

      <HideOnScroll>
        <AppBar className={classes.appbar} position="fixed">
          <Toolbar>
            <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
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
            <Button href="#me" className={classes.boton} >Info</Button>
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