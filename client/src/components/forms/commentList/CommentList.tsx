import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import Grid from "@material-ui/core/Grid";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import CommentItem from "./../commentItem/CommentItem";
import moment from "moment";
import OurLink from "../../common/OurLink";
import React, { Fragment, useState } from "react";
import OurModal from "../../common/OurModal";
function CommentList(props: any) {
    const [showMore, setShowMore] = useState<Number>(3);
    const [openModal, setOpenModal] = useState(false);
    const [editComment, setEditComment] = useState(false);
    const [showLessFlag, setShowLessFlag] = useState<Boolean>(false);
    const showComments = (e) => {
        e.preventDefault();
        setShowMore(12);
        setShowLessFlag(true);
    };
    const handleClickOpen = () => {
        setOpenModal(true);
    };
    const handleCloseModal = () => {
        console.log("testtt");
        setOpenModal(false);
    };
    const showLessComments = (e) => {
        e.preventDefault();
        setShowMore(3);
        setShowLessFlag(false);
    };

    return (
        <Grid>
            {props.comments.slice(0, showMore).map((comment, i) => (
                <div key={i}>
                    <List style={{ paddingBottom: "20px" }}>
                        <Typography style={{ display: "block", fontWeight: 700, padding: "5px 0px" }} variant="h6" align="left">
                            {Object.entries(props.currentUser).length === 0 ? (
                                <Fragment>
                                    <span style={{ cursor: "pointer" }} onClick={handleClickOpen}>
                                        {comment.author.username}
                                    </span>
                                    {openModal ? <OurModal open={openModal} handleClose={handleCloseModal} /> : null}
                                </Fragment>
                            ) : (
                                <OurLink
                                    to={{
                                        pathname: `/profile/${comment.author.username}`,
                                    }}
                                    title={comment.author.username}
                                />
                            )}
                        </Typography>
                        <CommentItem comment={comment} user={props.user} postId={props.postId} {...props} />
                        <Typography style={{ fontSize: "12px" }} variant="body1" align="left">
                            {moment(comment.createdAt).calendar()}
                        </Typography>
                        <Divider style={{ margin: "20px 0px" }} variant="fullWidth" component="li" />
                    </List>
                </div>
            ))}
            <Fragment>
                {props.comments.length > 3 && showLessFlag === false ? (
                    <Button onClick={(e) => showComments(e)} variant="outlined" component="span" color="primary">
                        Show More Comments
                    </Button>
                ) : (
                    <Fragment>
                        {props.comments.length > 3 && (
                            <Button onClick={(e) => showLessComments(e)} variant="outlined" component="span" color="primary">
                                Show Less Comments
                            </Button>
                        )}
                    </Fragment>
                )}
            </Fragment>
        </Grid>
    );
}
// prevents un-necesary re renders
export default React.memo(CommentList);
