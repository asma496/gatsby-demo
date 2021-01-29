import React from 'react'
import { Grid } from '@material-ui/core'
import './App.css'
import Cards from './Cards'


function Secpart() {
    return (
        <div>
            <Grid className='firsthead'
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={3}></Grid>
                <Grid item xs={5}><h2>What We Do</h2> </Grid>
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
         
         <Cards />

        </div>
    )
}

export default Secpart
