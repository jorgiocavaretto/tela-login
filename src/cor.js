import { createMuiTheme } from '@material-ui/core/styles'

const lightTheme = createMuiTheme(({
  palette: {
    type: 'light',
    primary: {
      main: '#3f51b5',
    },
    secondary: {
      main: '#27242C',
      contrastText: 'rgba(253,253,253,0.87)',
    },
    background: {
      default: '#FCC12C',
      paper: '#FCC12C',
    },
  },
}))

const darkTheme = createMuiTheme(({
      palette: {
        type: 'dark',
        primary: {
          main: '#3f51b5',
        },
        secondary: {
          main: '#FCC12C',
          contrastText: 'rgba(0,0,0,0.87)',
        },
        background: {
          default: '#27242C',
          paper: '#27242C',
        },
      },
}))

export { lightTheme, darkTheme }