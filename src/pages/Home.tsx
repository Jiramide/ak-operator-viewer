import React from 'react';
import { Link } from 'react-router-dom';

import {
  Grid,
} from '@mui/material';

import OperatorData from '../../../data/OperatorData.json';

const Home = () => (
  <div>
    <Grid container spacing={1}>
      {
        OperatorData.map((operator) =>
          <Grid item xs={1}>
            <p> { operator.name } </p>
          </Grid>
        )
      }
    </Grid>
  </div>
)

export default Home;
