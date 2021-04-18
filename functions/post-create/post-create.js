const { client, q } = require("../utils/faunaDb")
const handler = async (event) => {
  try {
    const post = JSON.parse(event.body)
    console.log(post)
    const resp = await client.query(
      q.Create(q.Collection("posts"), { data: post })
    )
    
    const savedPost = { ...resp.data, id: resp.ref.id }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Post added successfully`, post: savedPost })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
