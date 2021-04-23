import * as React from "react"
import PostForm from "../components/PostForm"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"
import EditPostDialog from "../components/EditPostDialog"

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  const [postToEdit, setPostToEdit] = useState({
    id: "",
    title: "",
    description: ""
  })
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
  
  
  const handleAddPost = async ({ title, description }) => {
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
    if ( !window.confirm("Are you sure to delete!") ) {
      return
    }
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
  
  const handleSubmitEditPost = async ({ title, description, id }) => {
    try {
      const data = {
        title,
        description
      }
      const resp = await fetch(".netlify/functions/post-update", {
        body: JSON.stringify({ data, id }),
        method: "POST"
      })
      await resp.json()
      setPosts((prevState) => {
        return prevState.map(post => post.id === id ? { ...post, title, description } : post)
      })
      handleCloseEditDialog()
    } catch (e) {
      console.log("Something went wrong!")
    }
  }
  
  const handleEditPost = (post) => {
    setPostToEdit(post)
    setOpen(true)
  }
  
  const handleCloseEditDialog = () => {
    setOpen(false)
  }
  
  return (
    <div>
      <PostForm buttonText="Save" handleSubmit={handleAddPost} />
      <Posts
        posts={posts}
        handleDeletePost={handleDeletePost}
        handleEditPost={handleEditPost}
      />
      <EditPostDialog
        open={open}
        handleClose={handleCloseEditDialog}
        postToEdit={postToEdit}
        handleSubmit={handleSubmitEditPost}
      />
    </div>
  )
}

export default IndexPage
