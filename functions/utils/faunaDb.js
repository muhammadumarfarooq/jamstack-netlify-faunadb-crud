const faunadb = require("faunadb")
const q = faunadb.query

const client = new faunadb.Client({ secret: process.env.FAUNADB_SECRET_KEY })

module.exports = { client, q }
