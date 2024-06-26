import axios from 'axios'

const baseUrl = 'api/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}

const createNew = async (content) => {
  const object = { content, votes: 0 }
  const response = await axios.post(baseUrl, object)
  return response.data
}

const addLike = async (id) => {
  const response = await axios.get(`${baseUrl}/${id}`)
  const anecdote = response.data

  anecdote.votes += 1

  await axios.put(`${baseUrl}/${id}`, anecdote)

  return anecdote

}

export default { getAll, createNew, addLike }