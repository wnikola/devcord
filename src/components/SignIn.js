import React, { useState } from 'react';
import { signIn } from '../services/apiService';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
// import FormControlLabel from '@material-ui/core/FormControlLabel';
// import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
// import Box from '@material-ui/core/Box';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import TopAppBar from './AppBar';
import { isLogin } from '../utils';

// function Copyright() {
//   return (
//     <Typography variant="body2" color="textSecondary" align="center">
//       {'Copyright © '}
//       <Link color="inherit" href="https://material-ui.com/">
//         Your Website
//       </Link>{' '}
//       {new Date().getFullYear()}
//       {'.'}
//     </Typography>
//   );
// }

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SignIn({ history }) {
  const classes = useStyles();

  // const handleSubmit = () => {
  //   signIn(login, password)
  //     .then(res => {
  //       console.log(res.data);
  //       if (res.data.message === 'Logged in') {
  //         localStorage.setItem('token', res.data.accessTokken);
  //         localStorage.setItem('username', res.data.username);
  //         // if (isLogin()) history.push('/');
  //         console.log(localStorage.getItem('token'));
  //         setTimeout(() => history.push('/'), 0);
  //       }
  //     });
  // };

  const handleSubmit = async () => {
    let res = await signIn(login, password);
    if (res.data.message === 'Logged in') {
      localStorage.setItem('token', res.data.accessToken);
      localStorage.setItem('username', res.data.username);
      history.push('/');
    }
  }

  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');

  return (
    <>
      <TopAppBar></TopAppBar>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            {/* <LockOutlinedIcon /> */}
          </Avatar>
          <Typography component="h1" variant="h5">
            Welcome back!
        </Typography>
          <form className={classes.form} noValidate>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Username or Email"
              // name="email"
              // autoComplete="email"
              autoFocus
              onChange={e => { setLogin(e.target.value) }}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
              onChange={e => { setPassword(e.target.value) }}
            />
            {/* <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            /> */}
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={e => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              Sign In
          </Button>
            <Grid container>
              {/* <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
              </Link>
              </Grid> */}
              <Grid item>
                <Link href="/signup" variant="body2">
                  {"Don't have an account? Sign Up"}
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        {/* <Box mt={8}>
          <Copyright />
        </Box> */}
      </Container>
    </>
  );
}