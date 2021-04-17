import { useSpring, animated } from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Image from 'next/image'
import Typography from '@material-ui/core/Typography'

import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Pull from './pull'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

import Test from '../containers/test'




const useStyles = makeStyles((theme) => ({
    title: {

        fontFamily: 'Supernett-cn',
        fontSize: '50px',

        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


            fontSize: "180%"
        },

        [theme.breakpoints.down("xs")]: {
            fontSize: "4vh"
        }


    },

    subtitle: {

        fontFamily: 'Supernett-cn',
        color: "white",
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vh"
        }
    },


    fullGrid: {
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around',
        textAlign: 'center'
    },
    buttonGrid: {

    },

    cuerpo: {
        fontFamily: 'Supernett-cn',
        fontSize: '120%'
    }




}));

export default function instagram() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    const classes = useStyles();
    return (

        <>
            <Grid container className={classes.fullGrid} spacing={0} justify="center" alignItems="center">

                <Grid item xs={10} sm={4}>
                    <Test />

                </Grid>

                <Grid item xs={10} sm={6} >
                    <Typography className={classes.title} variant='h1'> Sobre mí</Typography>
                    <Typography className={classes.cuerpo} align='left' variant="subtitle1">Hola, soy Aldo Cabrera Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus eu elit ut orci eleifend rutrum at vel tellus. Nullam sed euismod diam, sed iaculis neque. Morbi sollicitudin odio auctor, dictum nisi ac, interdum odio. Mauris pretium fermentum nisi, nec vehicula urna dapibus id. Ut condimentum consectetur lacus, nec iaculis augue commodo vitae. Donec sit amet sapien orci. Praesent nec ante vel nisi ullamcorper vulputate. Sed ut quam pulvinar lacus aliquet tincidunt.</Typography>

                </Grid>


            </Grid>

        </>

    )


}