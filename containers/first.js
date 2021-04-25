import { useSpring, animated } from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'


import Grid from '@material-ui/core/Grid'
import Pull from '../containers/pull'
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles((theme) => ({
    title: {

        fontFamily: 'Supernett-cn',


        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


            fontSize: "2em"
        },

        [theme.breakpoints.down("xs")]: {
            fontSize: "4vh"
        }


    },

    subtitle: {

        fontFamily: 'Supernett-cn',
        
        [theme.breakpoints.down("xs")]: {
            fontSize: "3vh"
        }
    },

    a: {
        display: "inline-block",
        '&:first-Letter': { //ASI SE USA SOLO LA PRIMERA LETRA AAAAA


            fontSize: "180%"
        },

    },

    boton: {
        fontFamily: 'Supernett-cn',
        color: "white",
        fontSize: "30px",
        backgroundColor: "black",

        [theme.breakpoints.down("xs")]: {
            fontSize: "16px"
        }
    },

    fullGrid: {
        height: '100vh',
        spacing: 0,
        justify: 'center',
        textAlign: 'center',
        padding: theme.spacing(0.5),
    },
    buttonGrid: {

    }




}));

export default function instagram() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    const classes = useStyles();
    return (

        <>
            <Grid container className={classes.fullGrid} justify="center" alignItems="center">

                <Grid item xs={12}>

                    <Typography className={classes.title} variant="h1" >Dagoberto <div className={classes.a}>Ruminot</div> <div className={classes.a}>L.</div></Typography>

                    <Typography className={classes.subtitle} variant="h2" >Animador Digital / Ilustrador / Electricista</Typography>

                    <Pull />
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup color="secondary" size="small" aria-label="small outlined button group">
                        <Button href="#me" className={classes.boton} >Info</Button>
                        <Button className={classes.boton} >CV</Button>
                        <Button className={classes.boton} >Ilustraciones</Button>
                        <Button className={classes.boton} >Animaciones</Button>
                        <Button className={classes.boton} >Redes Sociales</Button>
                    </ButtonGroup>

                </Grid>


            </Grid>

        </>

    )


}