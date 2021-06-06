import { useSpring, animated } from 'react-spring'
import React from 'react'
import { makeStyles } from '@material-ui/core/styles';

import Typography from '@material-ui/core/Typography'
import Link from 'next/link'


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

        [theme.breakpoints.down("sm")]: {
            fontSize: "4vh"
        }


    },

    subtitle: {

        fontFamily: 'Supernett-cn',
        
        [theme.breakpoints.down("sm")]: {
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
        color: theme.palette.background.default,
        borderColor: theme.palette.background.default,
        fontSize: "30px",
        

        [theme.breakpoints.down("sm")]: {
            fontSize: "16px"
        },

        "& a": {
            textDecoration: "none",
            color: "inherit",
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
        

    },
    link: {
        color: "inherit",
        
        "&:hover": {
            textDecoration: 'none',
        }

       
    }




}));

export default function instagram() {

    




    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    const classes = useStyles();
    return (

        <>
            <Grid container className={classes.fullGrid} justify="center" alignItems="center">

                <Grid item xs={12}>

                    <Typography className={classes.title} variant="h1" >Aldo <div className={classes.a}>Cabrera</div> <div className={classes.a}>Arratia</div></Typography>

                    <Typography className={classes.subtitle} variant="h2" >Animador Digital / Ilustrador</Typography>

                    <Pull />
                </Grid>

                <Grid item xs={12}>
                    <ButtonGroup className={classes.buttonGrid}  size="small" aria-label="small outlined button group">
                        <Button href="#me" className={classes.boton} >Info</Button>
                        <Button className={classes.boton} ><Link  href="/cv" passHref >CV</Link></Button>
                        <Button className={classes.boton} >Ilustraciones</Button>
                        <Button className={classes.boton} >Animaciones</Button>
                        <Button className={classes.boton} >Redes Sociales</Button>
                    </ButtonGroup>

                </Grid>


            </Grid>

        </>

    )


}