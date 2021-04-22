import * as React from "react"

interface PostComponentInterface {
  post: PostInterface
}

const Post = ({ post }: PostComponentInterface): JSX.Element => {
  
  return (
    <div style={{ borderBottom: "1px soid #000" }}>
      <h1>Post title: {post.title}</h1>
      <h1>Post description: {post.description}</h1>
    </div>
  )
}

Post.propTypes = {}

export default Post
