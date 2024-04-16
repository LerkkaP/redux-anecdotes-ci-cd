import React from 'react'
import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import { Provider } from 'react-redux'
import configureStore from 'redux-mock-store'
import AnecdoteList from './AnecdoteList'

const mockStore = configureStore([])

test('Anecdotes are displayed', () => {
  const anecdote = {
    'content': 'Adding manpower to a late software project makes it later!',
    'id': '21149',
    'votes': 2
  }

  const initialState = {
    filter: '',
    anecdotes: [anecdote]
  }

  const store = mockStore(initialState)

  render(
    <Provider store={store}>
      <AnecdoteList />
    </Provider>
  )

  const element = screen.getByText('Adding manpower to a late software project makes it later!')
  expect(element).toBeDefined()
})
