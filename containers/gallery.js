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
import Link from '@material-ui/core/Link';








const useStyles = makeStyles((theme) => ({
    title: {

        fontFamily: 'Supernett-cn',


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
        width: '100vw',
        height: '100vh',
        spacing: 0,
        justify: 'space-around',
        textAlign: 'center'
    },
    buttonGrid: {

    }




}));

export default function instagram() {
    const props = useSpring({ opacity: 1, from: { opacity: 0 } })
    const classes = useStyles();

    useEffect(() => {
        axios({
          method: 'get',
          url: 'https://api.imgur.com/3/gallery/album/bgKzyUd',
          headers: { 'authorization': 'Client-ID ' + clienteID,
     }
      }).then(function(response) {
          console.log(response.data);
          var carlos = response.data;
      }).catch(function(error) {
          console.log(error);
      }).catch(err => { console.log("ss")//vacio así no recibir el error 429
      });
    
      }, [])


    return (

        <>
            {


            }

        </>

    )


}