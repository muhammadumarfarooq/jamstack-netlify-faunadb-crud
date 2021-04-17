import * as React from "react"

const IndexPage = () => {
  
  const handleClick = async () => {
    
    const data = { name: "Umar" }
    
    const resp = await fetch(".netlify/functions/post-create", {
      body: JSON.stringify(data),
      method: "POST"
    })
    
    console.log(resp.json())
  }
  
  return (
    <div>
      <h1>Hi people</h1>
      <button onClick={handleClick}>
        SOme data
      </button>
    </div>
  )
}

export default IndexPage
