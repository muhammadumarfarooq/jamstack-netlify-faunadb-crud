const { client, q } = require("../utils/faunaDb")

const handler = async () => {
  try {
    const result = await client.query(
      q.Map(
        q.Paginate(q.Documents(q.Collection("posts"))),
        q.Lambda(x => {
          return q.Get(x)
        })
      ))
    
    const posts = result.data.map(post => {
      return { ...post.data, id: post.ref.id }
    })
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Successfully fetched posts`, posts })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
