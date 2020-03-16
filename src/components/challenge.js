import React from 'react';
import {Typography} from "@material-ui/core";

function Challenge({challenge}) {
  return (
    <div>
      <Typography variant="h6" color="inherit">{challenge.title}</Typography>
      <Typography variant="subtitle2" color="inherit">{challenge.description}</Typography>
    </div>
  );
}

export default Challenge;
