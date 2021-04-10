import {useSpring, animated} from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'

const insta = "IGQVJVQ0NiSmlWdEF4RjA4N3B0bW85ODZAseTBleWdCRVl1ekFqblFhTUNnYlFidElCLTJWdmV6NHpaU1J1blhYWHZANcmpXTkxQYUNvT1Y0MHZAiV081SXkxd3BuR3MwZAXhGR0pGNEJrTjZAsdURGZADFZARwZDZD"


const useStyles = makeStyles({ 

  instag: {
    
    borderRadius: "20px",
    backgroundColor: "black",
    alignItems: "center"
    
    
  },
  title: {
    color: "white"
  }


});

export default function instagram() {
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const classes = useStyles();
  return(

    <>

      <Grid container direction="column" justify="center" alignItems="center"> 
        <Grid item xs={10} md={10}>
          <Paper variant="outlined" className={classes.instag}>
          <animated.div style={props}><Typography className={classes.title} align="center" variant="h3" >Instagram</Typography></animated.div>
          <InstagramFeed token={insta}  counter="6"/>
          </Paper>
        </Grid>
      </Grid>
    </>

  )


}