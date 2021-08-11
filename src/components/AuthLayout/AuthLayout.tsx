import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'
import Container from '@material-ui/core/Container'
import React from 'react'
import { makeStyles, Theme } from '@material-ui/core/styles'

const useStyles = makeStyles((theme: Theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}))

const AuthLayout: React.FC = ({ children }) => {
  const classes = useStyles()

  return (
    <Container component='main' maxWidth='xs'>
      <div className={classes.paper}>{children}</div>
      <Box mt={8}>
        <Typography variant='body2' color='textSecondary' align='center'>
          {'Copyright © '}
          <Link color='inherit' href='https://material-ui.com/'>
            Material UI
          </Link>
          <span> {new Date().getFullYear()}.</span>
        </Typography>
      </Box>
    </Container>
  )
}

export default AuthLayout
