import * as React from "react"
import AddPostForm from "../components/AddPostForm"
import { useEffect, useState } from "react"
import Posts from "../components/Posts"

const IndexPage = () => {
  const [posts, setPosts] = useState([])
  
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
  
  
  return (
    <div>
      <AddPostForm handleSubmit={handleSubmit} />
      <Posts posts={posts} />
    </div>
  )
}

export default IndexPage
