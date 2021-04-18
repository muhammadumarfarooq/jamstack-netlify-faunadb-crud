const { client, q } = require("../utils/faunaDb")


const handler = async (event) => {
  try {
    const { id } = JSON.parse(event.body)
    const resp = await client.query(
      q.Get(q.Ref(q.Collection("posts"), id))
    )
    console.log(resp)
    return {
      statusCode: 200,
      body: JSON.stringify({ message: `Post successfully fetched`, post: resp.data })
    }
  } catch (error) {
    return { statusCode: 500, body: error.toString() }
  }
}

module.exports = { handler }
