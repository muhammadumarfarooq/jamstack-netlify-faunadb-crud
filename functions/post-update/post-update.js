const { client, q } = require("../utils/faunaDb")
const handler = async (event) => {
  try {
    const { data, id } = JSON.parse(event.body)
    const resp = await client.query(
      q.Update(
        q.Ref(q.Collection("posts"), id),
        { data }
      )
    )
    
    const updatedPost = { ...resp.data, id: resp.ref.id }
    
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Post udpated successfully`, post: updatedPost })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
