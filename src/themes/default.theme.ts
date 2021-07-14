import { unstable_createMuiStrictModeTheme as createMuiTheme } from '@material-ui/core/styles'
import green from '@material-ui/core/colors/green'

export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: '#FFC300',
    },
    secondary: {
      main: green[500],
    },
  },
})
