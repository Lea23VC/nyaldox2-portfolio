import {useSpring, animated} from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box';

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const insta = "IGQVJVQ0NiSmlWdEF4RjA4N3B0bW85ODZAseTBleWdCRVl1ekFqblFhTUNnYlFidElCLTJWdmV6NHpaU1J1blhYWHZANcmpXTkxQYUNvT1Y0MHZAiV081SXkxd3BuR3MwZAXhGR0pGNEJrTjZAsdURGZADFZARwZDZD"


const useStyles = makeStyles((theme) => ({

  instag: {

    backgroundColor: 'inherit',
    
    border: '0px',
    
    alignItems: "center"
    
    
  },
  title: {
    
    paddingBottom: theme.spacing(5)
  },
  containerIm: {
    width: '100%',
    margin: '0',
    padding: theme.spacing(13),
    [theme.breakpoints.down("sm")]: {
        padding: theme.spacing(3),
      },
     }


    }));

export default function instagram(caca) {

  console.log(caca.dato)
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const classes = useStyles();
  return(

    <>

      <Grid container className={classes.containerIm} direction="column" justify="center" alignItems="center"> 
        <Grid item xs={12} md={12}>
          <Box variant="outlined" className={classes.instag}>
          <animated.div style={props}><Typography className={classes.title} align="center" variant="h3" >Instagram</Typography></animated.div>
          <InstagramFeed token={insta}  counter="12"/>
          </Box>
        </Grid>
      </Grid>
    </>

  )


}