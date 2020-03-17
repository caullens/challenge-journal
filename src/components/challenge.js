import React from 'react';
import PropTypes from 'prop-types';
import { Paper, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  image: {
    width: '100%',
    borderRadius: theme.shape.borderRadius
  },
  mainContent: {
    padding: theme.spacing(1),
    paddingTop: 0
  }
}));

function Challenge({ challenge }) {
  const classes = useStyles();

  return (
    <Paper>
      <img className={classes.image} src={challenge.imageSource} alt={challenge.title} />
      <div className={classes.mainContent}>
        <Typography variant="h6" color="inherit">{challenge.title}</Typography>
        <Typography variant="subtitle2" color="inherit">{challenge.description}</Typography>
      </div>
    </Paper>
  );
}

Challenge.propTypes = {
  challenge: PropTypes.exact({
    id: PropTypes.number,
    imageSource: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
    description: PropTypes.string,
    videoLink: PropTypes.string,
    githubLink: PropTypes.string
  }).isRequired
};

export default Challenge;
