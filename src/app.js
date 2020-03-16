import React from 'react';
import {MuiThemeProvider} from "@material-ui/core";

import Challenges from "./components/challenges";
import Header from "./components/header";
import theme from "./trainTheme";

function App() {
  return (
    <MuiThemeProvider theme={theme}>
      <Header />
      <Challenges />
    </MuiThemeProvider>
  );
}

export default App;
