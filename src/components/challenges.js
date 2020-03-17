import React, { useEffect, useState } from 'react';
import { Grid, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Challenge from './challenge';

const useStyles = makeStyles((theme) => ({
  challengesContainer: {
    marginTop: theme.spacing(8)
  },
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(16, 2, 0, 2),
    color: theme.palette.text.primary
  },
  descriptionContainer: {
    textAlign: 'center',
    flex: '0 0 100%'
  },
  detailContainer: {
    color: theme.palette.text.secondary
  }
}));

function Challenges() {
  const classes = useStyles();
  const [challenges, setChallenges] = useState(null);

  useEffect(() => {
    fetch('http://localhost:3001/api/codingChallenges')
      .then((response) => response.json())
      .then(({ content }) => setChallenges(content));
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.descriptionContainer}>
        <Typography variant="h3" color="inherit">Coding Challenges</Typography>
        <span className={classes.detailContainer}>
          <Typography
            variant="subtitle1"
            color="inherit"
          >
            View all challenges Dan has completed and add them to your personal journal
          </Typography>
        </span>
      </div>
      <Grid className={classes.challengesContainer} container spacing={4}>
        {Array.isArray(challenges) && challenges.map((challenge) => (
          <Grid key={challenge.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
            <Challenge challenge={challenge} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Challenges;
