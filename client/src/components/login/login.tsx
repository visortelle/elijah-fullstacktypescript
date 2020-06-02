import Typography from "@material-ui/core/Typography";
import Alert from "@material-ui/lab/Alert";
import React, { useState, Fragment } from "react";
import Avatar from "@material-ui/core/Avatar";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Grid from "@material-ui/core/Grid";
import LoginForm from "../forms/login/login";
import CssBaseline from "@material-ui/core/CssBaseline";
import Paper from "@material-ui/core/Paper";
import IsAuth from "../hoc/isAuthenticated";
import { makeStyles } from "@material-ui/core/styles";
import { GoogleLoginButton } from "../../common/GoogleButton";
import { loginInit } from "./../../actions/userActions";
import { useDispatch, useSelector } from "react-redux";
import { userStore } from "../../selectors/selectors";
import OurWrapper from "../../common/OurWrapper";
export interface loginProps {
    onChange: (event: any) => void;
    loginInit: (event: object, history: object) => void;
    initLogin: () => void;
    user?: any;
    history?: any;
}

const useStyles = makeStyles((theme) => ({
    root: {
        height: "100vh",
        width: "100%",
    },
    image: {
        backgroundImage: "url(https://source.unsplash.com/random)",
        backgroundRepeat: "no-repeat",
        backgroundColor: theme.palette.type === "light" ? theme.palette.grey[50] : theme.palette.grey[900],
        backgroundSize: "cover",
        backgroundPosition: "center",
    },
    paper: {
        margin: theme.spacing(8, 4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
    },
    avatar: {
        margin: theme.spacing(1),
        backgroundColor: theme.palette.secondary.main,
    },
    form: {
        width: "100%", // Fix IE 11 issue.
        marginTop: theme.spacing(1),
    },
    submit: {
        margin: theme.spacing(3, 0, 2),
    },
}));

function Login(props: any) {
    const classes = useStyles();
    const [username, setUsername] = useState<String>("");
    const [password, setPassword] = useState<String>("");
    const dispatch = useDispatch();
    const login = (userData: object, history: object) => dispatch(loginInit(userData, history));
    const user = useSelector(userStore());
    const goBackEmailConfirmation = () => {
        props.history.goBack();
    };
    const handleSubmit = (e: any) => {
        e.preventDefault();
        const creds = {
            username,
            password,
        };

        login(creds, props.history);
    };

    return (
        <OurWrapper appBar={props.appBar} appOpen={props.appOpen} appBarShift={props.appBarShift}>
            <Fragment>
                <Grid container={true} component="main" className={classes.root}>
                    <CssBaseline />
                    <Grid item={true} xs={false} sm={4} md={7} className={classes.image} />
                    <Grid item={true} xs={12} sm={8} md={5} component={Paper} elevation={6} square={true}>
                        <div className={classes.paper}>
                            <Avatar className={classes.avatar}>
                                <LockOutlinedIcon />
                            </Avatar>
                            <Typography component="h1" variant="h5">
                                Log In
                            </Typography>
                            {user.error && (
                                <div>
                                    <Alert severity="warning">{user.error}</Alert>
                                </div>
                            )}
                            {user.error.includes("Please activate") && (
                                <div style={{ padding: "20px 0px" }}>
                                    <Typography variant="h6" style={{ cursor: "pointer" }} onClick={goBackEmailConfirmation}>
                                        {" "}
                                        Back{" "}
                                    </Typography>
                                </div>
                            )}

                            <LoginForm
                                submit={handleSubmit}
                                username={username}
                                password={password}
                                usernameChange={(e) => setUsername(e.target.value)}
                                passwordChange={(e) => setPassword(e.target.value)}
                            />
                            <div style={{ margin: "60px 0px" }}>
                                <GoogleLoginButton />
                            </div>
                        </div>
                    </Grid>
                </Grid>

                {/* </div> */}
            </Fragment>
        </OurWrapper>
    );
}

export default IsAuth(Login);
