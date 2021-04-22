import * as React from "react"
import { useState } from "react"

interface Post {
  title: String
  description: String
}

interface AddPostFromProps {
  handleSubmit: ({ title, description }: Post) => void
}

const AddPostForm = ({ handleSubmit }: AddPostFromProps): JSX.Element => {
  const [state, setState] = useState({
    title: "",
    description: ""
  })
  
  const { title, description } = state
  
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
      <input onChange={handleChange} value={title} name="title" />
      <input onChange={handleChange} value={description} name="description" />
      
      <button type="submit">Add</button>
    </form>
  )
}

export default AddPostForm
