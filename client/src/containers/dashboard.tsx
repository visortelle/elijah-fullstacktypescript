import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { addContent, addTitle, createPostInit, deleteCommentInit, deletePostInit, dislikePostInit, getPostsInit, likePostInit, notificationInit, postCommentInit } from "../actions/postActions";
import Dashboard from "../components/dashboard/dashboard";
import { getBodyError, getIsNotified, getNotification, getPopPosts, getPosts, getTitleError, getUser, postContent, title } from "./../selectors/selectors";
const mapDispatchToProps = (dispatch: any) => ({
    getPostsInit: () => dispatch(getPostsInit()),
    notificationInit: () => dispatch(notificationInit()),
    likePost: (id: number) => dispatch(likePostInit(id)),
    addTitle: (data: string) => dispatch(addTitle(data)),
    addContent: (data: string) => dispatch(addContent(data)),
    postCommentInit: (commentData: object) => dispatch(postCommentInit(commentData)),
    dislikePost: (id: number) => dispatch(dislikePostInit(id)),
    deletePostInit: (id: number, userId: number) => dispatch(deletePostInit(id, userId)),
    deleteComment: (id: number, postId: number, userId: number) => dispatch(deleteCommentInit(id, postId, userId)),
    createPostInit: (postData: object) => dispatch(createPostInit(postData)),
});

const mapStateToProps = createStructuredSelector({
    posts: getPosts(),
    popPosts: getPopPosts(),
    user: getUser(),
    isNotified: getIsNotified(),
    titleError: getTitleError(),
    bodyError: getBodyError(),
    title: title(),
    postContent: postContent(),
    notification: getNotification(),
});

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
