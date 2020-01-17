import Divider from "@material-ui/core/Divider";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";
import moment from "moment";
import React, { Fragment, useState } from "react";

export default function CommentList(props: any) {
    const [showMore, setShowMore] = useState(3)
    const [showLessFlag, setShowLessFlag] = useState(false);
    const showComments = (e) => {
        e.preventDefault();
        setShowMore(12);
        setShowLessFlag(true);
    }
    const showLessComments = (e) => {
        e.preventDefault();
        setShowMore(3);
        setShowLessFlag(false);
    }
    return (
        <Grid>
            {props.comments.slice(0, showMore).map((comment, i) => (
                <div key={i}>
                    <List style={{ paddingBottom: "20px" }}>
                        <ListItem alignItems="center" style={{ padding: "0px" }}>
                            <Typography color="primary" align="left">
                                {comment.comment_body}
                            </Typography>
                        </ListItem>
                        <Typography style={{ padding: "0px 0px" }} variant="caption" align="left">{comment.author.username}</Typography>
                        <Typography style={{ fontSize: "12px" }} variant="body1" align="left">{moment(comment.createdAt).calendar()}</Typography>
                        <Divider variant="fullWidth" component="li" />
                    </List>
                </div>
            ))}
            <Fragment>
                {props.comments.length > 3 && showLessFlag === false ? (
                    <Button onClick={e => showComments(e)} variant="outlined" component="span" color="primary">
                        Show More Comments
                    </Button>
                ) : (
                        <Fragment>
                            {props.comments.length > 3 && (
                                <Button onClick={e => showLessComments(e)} variant="outlined" component="span" color="primary">
                                    Show Less Comments
                            </Button>
                            )}
                        </Fragment>
                    )}
            </Fragment>
        </Grid>
    )

};
