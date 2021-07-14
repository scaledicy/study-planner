import AppBar from '@material-ui/core/AppBar/AppBar'
import createStyles from '@material-ui/core/styles/createStyles'
import makeStyles from '@material-ui/core/styles/makeStyles'
import Toolbar from '@material-ui/core/Toolbar/Toolbar'
import Typography from '@material-ui/core/Typography/Typography'
import React from 'react'
import { Theme } from '@material-ui/core'

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
      padding: theme.spacing(3),
      backgroundColor: '#FEF5E7',
    },
  })
)

const BaseLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <div className={classes.root}>
      <AppBar position='sticky' className={classes.appBar}>
        <Toolbar>
          <Typography variant='h6' noWrap>
            Clipped drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <div className={classes.content}>{children}</div>
    </div>
  )
}

export default BaseLayout
