import Head from 'next/head'
import React, { useEffect, useState } from "react";
import Typography from '@material-ui/core/Typography'
import {useSpring, animated} from 'react-spring'
import { makeStyles } from '@material-ui/core/styles';

import Test from '../containers/test'
import Grid from '@material-ui/core/Grid';

import InstagramFeed  from 'react-ig-feed'
import 'react-ig-feed/dist/index.css'


const useStyles = makeStyles((theme) => ({ 

  test: { 
    
    
    
  }



}));


export default function Home() {

  const classes = useStyles();
  const props = useSpring({opacity: 1, from: {opacity: 0}})
  const propsDonut = useSpring({ value: 100, from: { value: 0 } })
  const [flipped, set] = useState(false)
  const { transform, opacity } = useSpring({
    opacity: flipped ? 1 : 0,
    transform: `perspective(600px) rotateX(${flipped ? 180 : 0}deg)`,
    config: { mass: 5, tension: 500, friction: 80 }
  })

  return (
    
    <>
    
    <div className={classes.test}>
    <animated.div style={props}><Typography align="center" variant="h2" >Aldo Cabrera Arratia</Typography></animated.div>


    <Grid container > 
      <Grid item align="center" xs={12} lg={12} spacing={0} >
      <Test/>
      </Grid>
    </Grid>

    <InstagramFeed token={'IGQVJVQ0NiSmlWdEF4RjA4N3B0bW85ODZAseTBleWdCRVl1ekFqblFhTUNnYlFidElCLTJWdmV6NHpaU1J1blhYWHZANcmpXTkxQYUNvT1Y0MHZAiV081SXkxd3BuR3MwZAXhGR0pGNEJrTjZAsdURGZADFZARwZDZD'}  counter="6"/>

   
    
    </div>

    </>
  )
}
