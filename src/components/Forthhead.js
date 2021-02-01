import React from 'react'
import { Grid } from '@material-ui/core'
import './App.css'
import Cards3th from './Cards3th'
 import {Button} from '@material-ui/core'


function Forthhead() {
    return (
        <div>
            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><h2>Latest from the Blog</h2> </Grid>
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

         <Cards3th />
         <Grid
                container className='blogbtn'
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={6}><p><Button variant="outlined" color="secondary">
                    View Blog</Button></p> </Grid>
                <Grid item xs={3}></Grid>
            </Grid>

         
        </div>
    )
}

export default Forthhead;
