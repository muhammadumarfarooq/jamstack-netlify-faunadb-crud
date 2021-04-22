import * as React from "react"
import AddPostForm from "../components/AddPostForm"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import EditPostDialog from "../components/EditPostDialog"

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  const [open, setOpen] = React.useState(false)
  
  const handleFetchPosts = async () => {
    try {
      const resp = await fetch(".netlify/functions/post-read-all")
      const data = await resp.json()
      setPosts(data.posts)
    } catch (e) {
      console.log("Something went wrong!")
    }
  }
  
  
  useEffect(() => {
    handleFetchPosts()
    //  eslint-disable-next-line
  }, [])
  
  
  const handleSubmit = async ({ title, description }) => {
    try {
      const resp = await fetch(".netlify/functions/post-create", {
        body: JSON.stringify({ title, description }),
        method: "POST"
      })
      
      const data = await resp.json()
      setPosts((prevState) => {
        return [...prevState, data.post]
      })
    } catch (e) {
      console.log("Something went wrong!")
    }
  }
  
  const handleDeletePost = async (todo) => {
    try {
      const { id } = todo
      const resp = await fetch(".netlify/functions/post-delete", {
        body: JSON.stringify({ id }),
        method: "POST"
      })
      await resp.json()
      setPosts((prevState) => {
        return prevState.filter(post => post.id !== id)
      })
    } catch (e) {
      console.log("Something went wrong!")
    }
  }
  const handleEditPost = (todo) => {
  
  }
  
  return (
    <div>
      <AddPostForm handleSubmit={handleSubmit} />
      <Posts
        posts={posts}
        handleDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
      />
      <EditPostDialog />
    </div>
  )
}

export default IndexPage
