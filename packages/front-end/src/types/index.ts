import { ReactElement, ReactNode } from 'react'

export interface IDefault {
    error?: string | null
    isLoading: boolean
    history?: any
    isAuthenticated: boolean
    googleAccount: any
}

type withChildren = {
    children: ReactNode | ReactElement
}

type AuthorType = {
    gravatar: string
    username: string
    bio: string
}

type Events = {
    deleteComment: (commentId: number, postId: number, userId: number) => void
    postComment: (data: object) => void
    getPostsInit: () => void
    deletePostInit: (id: number, userId: number) => void
    postCommentInit: (event: object) => void
    addTitle: (data: string) => void
    addContent: (data: string) => void
    createPostInit: (event: object) => void
    likePost: (event: number) => void
    dislikePost: (event: number) => void
}
export type CommentType = {
    comment_body?: string
    gifUrl?: string
    id?: number
    createdAt?: any
    userId?: number
    author?: AuthorType
    commentReplies?: []
}

export type CommentBottomType = {
    post: {
        Comments: []
        id: number
        userId: number
    }
} & Pick<Events, 'deleteComment' | 'postComment'>

export type EditProfileFormType = {
    onSubmit: (e: any) => void
    handleBio: (e: any) => void
    handleGravatar: (e: any) => void
} & Pick<AuthorType, 'bio' | 'gravatar'>

export type LoginType = {
    submit: (event: any) => void
    username: string
    password: string
    usernameChange: (event: any) => void
    passwordChange: (event: any) => void
}

export type ProfilePropsType = {
    getProfileInit: (username: string) => void
    unfollowUserInit: (username: string, id: number) => void
    followUserInit: (username: string, id: number) => void
    username: string
    match: any
    user: any
    currentUser: {
        user: {
            id: number
        }
    }
    appBar: any
    appBarShift: any
    appOpen: boolean
}

export type ReplyPropsType = {
    onSubmit: (e: any) => void
    replyBody: string
    replyChange: (e: any) => void
}
export type SearchType = {
    currentUser?: any
}

export type SearchResultsPageType = {
    location?: any
}

export type RegisterStateType = {
    passwordConf: string
    passErr: string
}
export type TabPanelPropsType = {
    index: any
    value: any
} & Partial<withChildren>

export type UserPostsType = {
    match?: any
    user?: any
    isNotified?: boolean
    notificationInit: () => void
    notification: string
    appBar: any
    appBarShift: any
    appOpen: boolean
} & Pick<
    IPostState,
    'bodyError' | 'titleError' | 'error' | 'title' | 'postContent'
> &
    Pick<
        Events,
        | 'postCommentInit'
        | 'getPostsInit'
        | 'deleteComment'
        | 'createPostInit'
        | 'likePost'
        | 'dislikePost'
        | 'addContent'
        | 'deletePostInit'
        | 'addTitle'
    >

export type CommentPropsType = {
    onSubmit: any
    comment_body: string
    commentChange: (e: any) => void
    gifUrl: any
    isGif: string
    mentionedUser?: boolean
    setMentionedUser?: (data: boolean) => void
    setCommentBody?: (data: string) => any
    currentUser?: {
        username: string
    }
}

export type ReplyType = {
    createdAt: any
    replyBody: string
    userId: number
    id: number
}

export type CommentItemPropsType = {
    editComment: (comment: any) => void
    onReply: () => void
    comment: CommentType
    reply?: ReplyType | null
    type: 'comment' | 'reply'
    postId: number
} & Pick<Events, 'deleteComment'>

export interface CommentAuthorDataInterface {
    comment: CommentType
    userId: number
    isBold: any
    openModal: () => void
    handleCloseModal: () => void
    handleClickOpen: () => void
    currentUser: Record<string, any>
}

export interface AuthDefault {
    user?: any
    initLogin: () => void
}

export interface AuthHocPropsType
    extends AuthDefault,
        Pick<IDefault, 'history'> {}

export type AuthStateType = {
    errors: object
}

export type ILikesType = {
    match?: any
    user?: any
    error: any[]
    isNotified?: boolean
    notificationInit: () => void
    notification: string
    appBar: any
    appBarShift: any
    appOpen: boolean
} & Pick<
    IPostState,
    'posts' | 'postContent' | 'bodyError' | 'titleError' | 'title'
> &
    Pick<
        Events,
        | 'postCommentInit'
        | 'getPostsInit'
        | 'deleteComment'
        | 'createPostInit'
        | 'likePost'
        | 'dislikePost'
        | 'addContent'
        | 'deletePostInit'
        | 'addTitle'
    >

export type AuthButtonType = {
    type?: 'post-buttons' | 'comment-buttons' | 'post-buttons-modal'
    user?: {
        user: {
            id: number
        }
    }
    comment?: CommentType
    postId?: number
    post?: {
        id: number
        likeCounts: number
        likedByMe: boolean
    }
    handleClickOpen?: () => void
    onReply?: () => void
    setEditComment?: (e: any) => void
    currentUser?: Record<string, any>
    openModal?: boolean
    handleCloseModal?: () => void
    writeComment?: () => void
    openForm?: boolean
}

export type ButtonFunctionProps = {
    type: 'edit' | 'reply' | 'delete' | 'cancel' | 'update' | 'deleteReply'
    onReply?: () => void
    update?: (data: Record<string, any>) => void
    postId?: number | any
    userId?: number | any
    comment?: any
    setEditComment?: (boolean: boolean) => void
    deleteReply?: (
        replyId?: number,
        postId?: number,
        replyUserId?: number,
        commentId?: number
    ) => void
    replyId?: number
    replyUserId?: number
}

export type OurDateType = {
    type: 'post-date' | 'comment-date' | 'reply-date'
    createdAt: string
}

export type LikeButtonPropsType = {
    type: 'liked' | 'unliked'
    likeCounts: number
    postId?: number
    dislike?: (id: number) => void
    like?: (id: number) => void
}

export type IMenuItemType = Required<withChildren>
export type IUseInputType = {
    addTitle?: (data: string) => void
    addContent?: (data: string) => void
    addUsername?: (data: string) => void
    addEmail?: (data: string) => void
    addPassword?: (data: string) => void
    addPasswordConf?: (data: string) => void
}

export type FieldType = {
    type:
        | 'gif-commentfield'
        | 'post'
        | 'comment'
        | 'post-content'
        | 'edit-comment'
    handleTitleChange?: (e: any) => void
    comment_body?: string
    commentChange?: (e: any) => void
    post_content?: string
    handleContentChange?: (e: any) => void
    setGifSelected?: () => void
    selectedUser?: string
    setCommentEdit?: (e: any) => void
} & Partial<Pick<IPostState, 'bodyError' | 'titleError' | 'title'>>

export type INavButtonType = {
    onClick?: () => void
} & Required<withChildren>

interface INavLinkToType {
    pathname: string
}

export type INavLinkType = {
    to: INavLinkToType | string
} & Required<withChildren>

export type IMainNavType = {
    darkTheme: () => void
    logOut: () => void
    handleNotificationClick: (
        event: React.MouseEvent<HTMLButtonElement>
    ) => void
    notificationId: string | undefined
    handleClose: () => void
    open: boolean
    anchorEl: HTMLButtonElement | null
    appOpen?: boolean
    setOpen?: React.Dispatch<React.SetStateAction<boolean>>
} & Pick<IDefault, 'isAuthenticated' | 'googleAccount'>

export type IButtonBar = Required<withChildren>

export interface IDyanmicMenuType extends IMainNavType {
    type: 'main-menu' | 'collapsed-menu'
}

export type IRouterType = {
    notifications: (userId: number) => void
    darkTheme: () => void
    hasError: boolean
    logOut: () => void
} & Pick<IDefault, 'googleAccount' | 'isAuthenticated'>

export type IPrivateRoute = {
    Component: React.ElementType | ReactNode
    exact: boolean
    path: string
    appOpen: boolean
} & Pick<IDefault, 'googleAccount' | 'isAuthenticated'>

export interface IPostItemContainer {
    post: any
}

export interface ISignUpForm {
    submit: (e: any) => void
    usernameChange: (e: any) => void
    emailChange: (e: any) => void
    passwordChange: (e: any) => void
    passwordConfChange: (e: any) => void
    passwordConf: string
    username: string
    password: string
    email: string
    usernameError: any
    passwordError: any
    emailError: any
    passwordConfError: any
    disButton: boolean
}

export type IloginProps = Partial<Pick<IDefault, 'history'>>

export type IUserState = {
    emailVerified: boolean
    profileData: object
    message: string
    profilePage: any
    usernameError: any
    passwordError: any
    passwordConfError: any
    emailError: any
    email: string
    password: string
    passwordConf: string
    username: string
    currentUser: object
    getNotifications: any
    notDark: boolean
} & Omit<IDefault, 'history'>
export type IPostState = {
    posts: any[]
    postPage: any
    titleError: any
    bodyError: boolean | null | string
    title: string
    postContent: string
    isNotified: boolean
    notification: string
    searchValue: string
    results: any[]
    searchPageResults: any[]
    selectedUser: string
    mentionedUser: boolean
    commenterId: any
} & Pick<IDefault, 'isLoading' | 'error'>
