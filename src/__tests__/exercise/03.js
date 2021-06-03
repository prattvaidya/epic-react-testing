// Avoid implementation details
// http://localhost:3000/counter

import * as React from 'react'
// 🐨 add `screen` to the import here:
import {render, screen} from '@testing-library/react'
import userEvent from 'testing-library/user-event' // triggers events associated to the specified event
// import {render, fireEvent, screen} from '@testing-library/react'
import Counter from '../../components/counter'

test('counter increments and decrements when the buttons are clicked', () => {
  // const {container} = render(<Counter />)
  render(<Counter />)
  // 🐨 replace these with screen queries
  // 💰 you can use `getByText` for each of these (`getByRole` can work for the button too)
  // const [decrement, increment] = container.querySelectorAll('button')
  // const message = container.firstChild.querySelector('div')
  const increment = screen.getByRole('button', {name: /increment/i})
  const decrement = screen.getByRole('button', {name: /decrement/i})
  const message = screen.getByText(/current count/i)

  expect(message).toHaveTextContent('Current count: 0')
  userEvent.click(increment) // will handle onMouseDown, onMouseUp, etc.
  expect(message).toHaveTextContent('Current count: 1')
  userEvent.click(decrement) // will handle onMouseDown, onMouseUp, etc.
  expect(message).toHaveTextContent('Current count: 0')
})
