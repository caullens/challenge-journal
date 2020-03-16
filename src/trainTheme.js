import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    primary: deepPurple,
    secondary: teal,
    text: {
      main: 'rgb(238,238,238)'
    }
  }
});

export default theme;
