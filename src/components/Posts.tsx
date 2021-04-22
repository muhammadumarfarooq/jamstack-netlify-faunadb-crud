import * as React from "react"
import Post from "./Post"

interface PostsInterface {
  posts: PostInterface[]
}

const Posts = ({ posts }: PostsInterface): JSX.Element => {
  
  return (
    <div className="posts">
      {posts.map(post => <Post key={post.id} post={post} />)}
    </div>
  )
}

Posts.propTypes = {}

export default Posts
