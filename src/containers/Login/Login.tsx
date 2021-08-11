import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import TextField from '@material-ui/core/TextField'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import Checkbox from '@material-ui/core/Checkbox'
import Link from '@material-ui/core/Link'
import Grid from '@material-ui/core/Grid'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined'
import Typography from '@material-ui/core/Typography'
import { makeStyles, Theme } from '@material-ui/core/styles'
import React, { ChangeEvent, useState } from 'react'
import AuthLayout from 'components/AuthLayout/AuthLayout'

const useStyles = makeStyles((theme: Theme) => ({
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}))

const Login: React.FC = () => {
  const classes = useStyles()
  const [emailField, setEmailField] = useState('')
  const [passwordField, setPasswordField] = useState('')

  const emailHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setEmailField(e.target.value)
  }
  const passwordHandleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setPasswordField(e.target.value)
  }

  return (
    <AuthLayout>
      <Avatar className={classes.avatar}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography variant='h4'>Login</Typography>
      <form className={classes.form} noValidate>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          onChange={emailHandleChange}
          value={emailField}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          onChange={passwordHandleChange}
          value={passwordField}
        />
        <FormControlLabel
          control={<Checkbox value='remember' color='primary' />}
          label='Remember me'
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          size='large'
          className={classes.submit}
        >
          Sign In
        </Button>
        <Grid container>
          <Grid item xs>
            <Link href='#' variant='body2' color='secondary'>
              Forgot password?
            </Link>
          </Grid>
          <Grid item>
            <Link href='#' variant='body2' color='secondary'>
              Don't have an account? Sign Up
            </Link>
          </Grid>
        </Grid>
      </form>
    </AuthLayout>
  )
}

export default Login
