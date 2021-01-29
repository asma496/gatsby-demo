import React from 'react'
import { Grid } from '@material-ui/core'
import Button from '@material-ui/core/Button';
import './App.css'
import Secpart from './Secpart';



function Text() {
    return (
        <div>

            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><h1>Hi, I'm Stackbit Exto Portfolio Theme.</h1> </Grid>
                <Grid item xs={4}></Grid>


            </Grid>

            <Grid className='sechead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}><p>This section can contain a subtitle or tagline. The recommended length is one to three sentences, but can be changed as you prefer.</p> </Grid>
                <Grid item xs={3}></Grid>


            </Grid>

            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}><p><Button variant="outlined" color="secondary">
                    Let's talk</Button></p> </Grid>
                <Grid item xs={3}></Grid>
            </Grid>


            <div>
            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><h2>Recent Work</h2> </Grid>
                <Grid item xs={4}></Grid>


            </Grid>

            <Grid className='sechead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><p>An optional subtitle of the section</p> </Grid>
                <Grid item xs={4}></Grid>


            </Grid>

            <Grid className='sechead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Grid item xs={5}><p><img src='https://themes.stackbit.com/demos/exto/images/1.jpg'  width='600px' height='350px'/></p></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}><p><img src='https://themes.stackbit.com/demos/exto/images/2.jpg'  width='400px' height='350px' /></p> </Grid>


            </Grid>
           

            <Grid className='sechead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={4}><p><img src='https://themes.stackbit.com/demos/exto/images/3.jpg'  width='400px' height='350px'/></p></Grid>
                <Grid item xs={1.5}></Grid>

                <Grid item xs={5}><p><img src='https://themes.stackbit.com/demos/exto/images/4.jpg'  width='600px' height='350px' /></p> </Grid>
                <Grid item xs={1}></Grid>

            </Grid>

          
            <Grid className='sechead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >

                <Grid item xs={5}><p><img src='https://themes.stackbit.com/demos/exto/images/5.jpg'  width='600px' height='350px'/></p></Grid>
                <Grid item xs={1}></Grid>
                <Grid item xs={4}><p><img src='https://themes.stackbit.com/demos/exto/images/6.jpg'  width='400px' height='350px' /></p> </Grid>


            </Grid>




         <Secpart />





            </div>
        </div>


    )
}

export default Text
