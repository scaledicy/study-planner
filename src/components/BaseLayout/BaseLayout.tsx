import AppBar from '@material-ui/core/AppBar/AppBar'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'
import headerLogo from 'assets/images/header-logo.svg'
import Button from '@material-ui/core/Button'
import ButtonGroup from '@material-ui/core/ButtonGroup'
import { Link } from 'react-router-dom'

const useStyles = makeStyles((theme: Theme) => ({
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
    justifyContent: 'space-between',
  },
  headerLogo: {
    display: 'block',
    objectFit: 'contain',
    height: '48px',
  },
}))

const BaseLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar className={classes.headerToolbar}>
          <Link to='/'>
            <img
              className={classes.headerLogo}
              src={headerLogo}
              alt='headerLogo'
            />
          </Link>
          <ButtonGroup aria-label='outlined secondary button group'>
            <Button component={Link} to={'/login'}>
              Login
            </Button>
            <Button component={Link} to={'/signup'}>
              Sign up
            </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default BaseLayout
