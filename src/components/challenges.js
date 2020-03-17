import React from 'react';
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

const challenges = [
  {
    id: 0,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 1,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 2,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 3,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 4,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 5,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 6,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
  {
    id: 7,
    imageSource: 'https://i.ytimg.com/vi/MEdpRYyjz_0/mqdefault.jpg',
    title: 'Peeking Inside Pi',
    date: '14 March 2020',
    description: '🥧 Happy Pi Day 2020! In this challenge, I build a simple web application using p5.js and node.js to search in the first billion digits of Pi.',
    videoLink: 'https://www.youtube.com/watch?v=MEdpRYyjz_0',
    githubLink: 'https://github.com/CodingTrain/website/tree/master/CodingChallenges/CC_156_Pi_Digits/p5-multi',
  },
];

function Challenges() {
  const classes = useStyles();

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
      <Grid className={classes.challengesContainer} container justifyContent="center" spacing={4}>
        {challenges.map((challenge) => (
          <Grid key={challenge.id} item xl={2} lg={3} md={4} sm={6} xs={12}>
            <Challenge challenge={challenge} />
          </Grid>
        ))}
      </Grid>
    </div>
  );
}

export default Challenges;
