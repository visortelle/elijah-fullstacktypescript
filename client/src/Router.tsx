import React, { Fragment } from "react";
import { HashRouter, Route, Router, Link, Switch } from "react-router-dom";
import Landing from "./components/landing/landing";
import Register from "./containers/signup";
import Dashboard from "./containers/dashboard";
import EditProfile from "./containers/profile";
import Grid from "@material-ui/core/Grid";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Login from "./containers/login";
import { withRouter } from "react-router";
import { history } from "./ourHistory";
import PrivateRoute from "./PrivateRoute";
import color from "@material-ui/core/colors/amber";
const MyRouter = props =>
  props.hasError ? (
    <div>Error</div>
  ) : (
    <Router history={history}>
      <HashRouter>
        <AppBar position="static">
          <Toolbar>
            <Grid justify="space-between" container>
              <Typography variant="h6" style={{ color: "#fff" }}>
                TypeScript React App
              </Typography>
              <Grid item>
                {props.user ? (
                  <Fragment>
                    <Button>
                      <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/"
                      >
                        Home
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/dashboard"
                      >
                        Dashboard
                      </Link>
                    </Button>
                    <Button>
                      <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/editProfile"
                      >
                        Edit Profile
                      </Link>
                    </Button>
                    <Button onClick={props.logOut}>
                      <Link
                        style={{ color: "#fff", textDecoration: "none" }}
                        to="/logout"
                      >
                        Logout
                      </Link>
                    </Button>
                  </Fragment>
                ) : (
                  <Fragment>
                    <Button>
                      <Link to="/">Home</Link>
                    </Button>
                    <Button>
                      <Link to="/register">Sign Up</Link>
                    </Button>
                    <Button>
                      <Link to="/login">Log In</Link>
                    </Button>
                  </Fragment>
                )}
              </Grid>
            </Grid>
          </Toolbar>
        </AppBar>
        <Switch>
          <Route exact path="/" component={Landing} />
          <Route path="/login" component={Login} />

          <Route path="/register" component={Register} />
          <PrivateRoute exact path="/editProfile" component={EditProfile} />
          <PrivateRoute exact path="/dashboard" component={Dashboard} />
        </Switch>
      </HashRouter>
    </Router>
  );

export default MyRouter;
