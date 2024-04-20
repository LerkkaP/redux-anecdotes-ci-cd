import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  try {
    const response = await axios.get(baseUrl)
    // eslint-disable-next-line no-console
    console.log('getAll response:', response.data)
    return response.data
  } catch (error) {
    // eslint-disable-next-line no-console
    console.error('Error fetching anecdotes:', error)
    throw error
  }
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