import React from 'react';
import './fuel-cost.css';

import { 
  Grid, Slider, Paper
} from '@material-ui/core';
import { withStyles } from '@material-ui/core/styles';

export default function FuelCost(props) {

  const FuelSlider = withStyles({
    root: {
      color: '#004BFF',
      height: 8,
    },
    thumb: {
      height: 24,
      width: 24,
      backgroundColor: '#fff',
      border: '2px solid currentColor',
      marginTop: -8,
      marginLeft: -12,
      '&:focus,&:hover,&$active': {
        boxShadow: 'inherit',
      },
    },
    active: {},
    valueLabel: {
      left: 'calc(-50% + 4px)',
    },
    track: {
      height: 8,
      borderRadius: 4,
    },
    rail: {
      height: 8,
      borderRadius: 4,
    },
  })(Slider);

  return (
    <Grid container spacing={8}>
      <Grid container spacing={12}>
        <Grid item spacing={12}>Title</Grid>
        <Grid item spacing={12}>Sub Title</Grid>
      </Grid>
      <Grid container spacing={12}>
        <Grid item xs={8}>
          <Paper >Annual Milage (Limit)</Paper>
        </Grid>
        <Grid item xs={4}>
          <Paper >10.000 Miles</Paper>
        </Grid>
        <Grid item xs={12}>
          <FuelSlider valueLabelDisplay="auto" aria-label="Annual Milage (Limit)" defaultValue={0} />
        </Grid>
      </Grid>
    </Grid>
  );
}