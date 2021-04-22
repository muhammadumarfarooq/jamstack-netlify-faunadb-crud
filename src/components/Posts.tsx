import * as React from "react"
import Post from "./Post"

interface PostsInterface {
  posts: postInterface[]
  // @ts-ignore
  handleEditPost: (todo: postInterface) => void
  // @ts-ignore
  handleDeletePost: (todo: postInterface) => void
}

const Posts = ({ posts, handleEditPost, handleDeletePost }: PostsInterface): JSX.Element => {
  
  
  return (
    <div className="posts">
      {posts.map(post => <Post
        key={post.id}
        post={post}
        handleDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
      />)}
    </div>
  )
}

Posts.propTypes = {}

export default Posts
