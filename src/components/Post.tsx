import * as React from "react"
import IconButton from "@material-ui/core/IconButton"
import DeleteTwoToneIcon from "@material-ui/icons/DeleteTwoTone"
import EditTwoToneIcon from "@material-ui/icons/EditTwoTone"
import "./scss/post.scss"

interface PostComponentInterface {
  // @ts-ignore
  post: postInterface
  // @ts-ignore
  handleEditPost: (todo: postInterface) => void
  // @ts-ignore
  handleDeletePost: (todo: postInterface) => void
}

const Post = ({ post, handleEditPost, handleDeletePost }: PostComponentInterface): JSX.Element => {
  
  return (
    <div className="post">
      <div className="post--text-box">
        <p className="post--title">{post.title}</p>
        <p className="post--description">{post.description}</p>
      </div>
      <div className="post--icon-box">
        
        <IconButton onClick={() => handleEditPost(post)}>
          <EditTwoToneIcon />
        </IconButton>
        
        <IconButton onClick={() => handleDeletePost(post)} aria-label="delete">
          <DeleteTwoToneIcon />
        </IconButton>
      
      </div>
    </div>
  )
}

Post.propTypes = {}

export default Post
