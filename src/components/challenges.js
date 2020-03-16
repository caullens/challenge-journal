import React from 'react';
import {Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/core/styles";

import Challenge from "./challenge";

const useStyles = makeStyles(theme => ({
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    marginTop: theme.spacing(8),
    color: theme.palette.text.main
  },
  descriptionContainer: {
    textAlign: 'center',
    flex: '0 0 100%'
  }
}));

const challenges = [
  {
    id: 0,
    imageSource: "https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg",
    title: "Peeking Inside Pi",
    date: "14 March 2020",
    description: "🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.",
    videoLink: "https://www.youtube.com/watch?v=MEdpRYyjz_0",
    githubLink: "https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi"
  }
];

function Challenges() {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.descriptionContainer}>
        <Typography variant="h3" color="inherit">Coding Challenges</Typography>
        <Typography variant="subtitle1" color="inherit">View all challenged Dan has completed and add them to your personal journal</Typography>
      </div>
      <div className={classes.challengesContainer}>
        {challenges.map(challenge =>
          <Challenge key={challenge.id} challenge={challenge} />)}
      </div>
    </div>
  );
}

export default Challenges;
