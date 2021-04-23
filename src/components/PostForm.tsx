import * as React from "react"
import { useState } from "react"
import Error from "./Error"

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
  const [error, setError] = useState("")
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
    
    if ( !state.title || !state.description ) {
      setError("Input Field cannot be empty")
      setTimeout(() => {
        setError("")
      }, 3000)
      return
    }
    
    handleSubmit(state)
  }
  
  return (
    <form onSubmit={onSubmit} className="add-post-form">
      {error && <Error text={error} />}
      <input onChange={handleChange} value={state.title} name="title" />
      <input onChange={handleChange} value={state.description} name="description" />
      
      <button type="submit">{buttonText}</button>
    </form>
  )
}

export default PostForm
