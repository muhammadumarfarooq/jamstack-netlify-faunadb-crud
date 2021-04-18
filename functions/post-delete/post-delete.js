const { client, q } = require("../utils/faunaDb")
const handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body)
    const resp = await client.query(
      q.Delete(q.Ref(q.Collection("posts"), id))
    )
    
    const deletedPost = { ...resp.data, id: resp.ref.id }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Post deleted successfully`, post: deletedPost })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
