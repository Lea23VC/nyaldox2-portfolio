import React from "react";
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';

import 'photoswipe/dist/photoswipe.css'
import 'photoswipe/dist/default-skin/default-skin.css'
import { Gallery, Item } from 'react-photoswipe-gallery'

const useStyles = makeStyles((theme) => ({
    containerIm: {
        width: '100%',
        margin: '0',
        padding: theme.spacing(13),
        [theme.breakpoints.down("sm")]: {
            padding: theme.spacing(3),
          },


        
    },

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






}));

export default function ImgurGallery(id) {

    console.log("PROBANDO" + id.data)

    const classes = useStyles();


    return (


        <>

            <Grid container className={classes.containerIm} justify="center" alignItems="center" spacing={2} >

                <Grid item xs={12} sm={12} md={12}>

                    <Typography className={classes.title} variant='h2'>Trabajos personales</Typography>


                </Grid>
                <Gallery>
                    {
                        id.data.map((data) =>
                            <Grid key={data.id} item xs={6} sm={4} md={3} lg={2} className={classes.imagesCon}>

                                

                                <div className={"wow fadeInUp"}>
                                    
                                    <Item

                                        original={data.link}
                                        thumbnail={data.link}
                                        width="1500"
                                        height="1500"
                                        title={data.description}
                                        caption={data.description}
                                        
                                    >
                                        {({ ref, open }) => (
                                            <img  ref={ref} onClick={open} src={data.link} />
                                        )}
                                    </Item>
                                </div>





                                {/* <figure >
                                <img className={classes.images}
                                    id="zoom-default"
                                    src={data.link}
                                    alt="Zoom with default options"
                                /></figure> */}



                            </Grid>


                        )
                    }
                </Gallery>




            </Grid>
        </>


    )

}