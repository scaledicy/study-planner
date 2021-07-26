import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import React from 'react'
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles'
import headerLogo from 'assets/images/header-logo.svg'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      display: 'flex',
      flexDirection: 'column',
      minHeight: '100vh',
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(5),
      paddingTop: theme.spacing(5),
      backgroundColor: '#FEF5E7',
    },
    headerToolbar: {
      width: '100%',
      justifyContent: 'center',
    },
    headerLogo: {
      display: 'block',
      objectFit: 'contain',
      height: '48px',
    },
  })
)

const BaseLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar className={classes.headerToolbar}>
          <img
            className={classes.headerLogo}
            src={headerLogo}
            alt='headerLogo'
          />
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default BaseLayout
