import { createMuiTheme } from '@material-ui/core/styles';
import deepPurple from '@material-ui/core/colors/deepPurple';
import teal from '@material-ui/core/colors/teal';

const theme = createMuiTheme({
  palette: {
    type: 'dark',
    primary: deepPurple,
    secondary: teal
  }
});

export default theme;
