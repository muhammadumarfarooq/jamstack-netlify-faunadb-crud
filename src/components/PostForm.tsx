import * as React from "react"
import { useState } from "react"

interface Post {
  title: String
  description: String
}

interface AddPostFromProps {
  handleSubmit: ({ title, description }: Post) => void
  title?: string
  description?: string
  id?: string
  buttonText: string
}

const PostForm = ({ handleSubmit, title, description, id, buttonText }: AddPostFromProps): JSX.Element => {
  const [state, setState] = useState({
    id: id || "",
    title: title || "",
    description: description || ""
  })
  
  const handleChange = (e) => {
    setState((prevState) => {
      return { ...prevState, [ e.target.name ]: e.target.value }
    })
  }
  
  const onSubmit = (e) => {
    e.preventDefault()
    handleSubmit(state)
  }
  
  return (
    <form onSubmit={onSubmit} className="add-post-form">
      <input onChange={handleChange} value={state.title} name="title" />
      <input onChange={handleChange} value={state.description} name="description" />
      
      <button type="submit">{buttonText}</button>
    </form>
  )
}

export default PostForm
