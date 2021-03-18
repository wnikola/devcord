import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
// import IconButton from '@material-ui/core/IconButton';
// import MenuIcon from '@material-ui/icons/Menu';
// import Link from '@material-ui/core/Link';
import { Link } from 'react-router-dom';
import { isLogin } from '../utils';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  link: {
    color: '#ffffff'
  },
}));

export default function TopAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          {/* <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton> */}
          <Typography variant="h6" className={classes.title}>
            <Link to="/" className={classes.link} onClick={() => {
              if (navigator.share)
                navigator
                  //@ts-ignore
                  .share({
                    title: "title",
                    url: "https://freecords.com",
                    text: "some text",
                  })
                  .then(() => console.log("Sharing"))
                  .catch((err) => console.log("Can't share: ", err));
              else console.log("Share not supported");
            }}>
              {'</> devcord'}
            </Link>
            {navigator.share ? (
            <Button color="inherit" onClick={() => {
              navigator
                  .share({
                    title: "title",
                    url: "https://freecords.com",
                    text: "some text",
                  })
                  .then(() => console.log("Sharing"))
                  .catch((err) => console.log("Can't share: ", err));
            }}>Share</Button>
            ) : null
            }
          </Typography>
          {
            isLogin()
              ? <Button color="inherit" onClick={e => {
                e.preventDefault();
                localStorage.removeItem('token');
                window.location.reload();
              }}>Log out</Button>
              : <><Button color="inherit" component={Link} to='/login'>Login</Button>
                <Button color="inherit" component={Link} to='/signup'>Sign Up</Button></>
          }


        </Toolbar>
      </AppBar>
    </div>
  );
}