// form testing
// http://localhost:3000/login

import * as React from 'react'
import {render, screen} from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Login from '../../components/login'
import faker from 'faker'

test('submitting the form calls onSubmit with username and password', () => {
  // 🐨 create a variable called "submittedData" and a handleSubmit function that
  // accepts the data and assigns submittedData to the data that was submitted
  // 💰 if you need a hand, here's what the handleSubmit function should do:
  // const handleSubmit = data => (submittedData = data)
  // let submittedData
  // const handleSubmit = data => (submittedData = data)
  const handleSubmit = jest.fn()

  // 🐨 render the login with your handleSubmit function as the onSubmit prop
  render(<Login onSubmit={handleSubmit} />)

  // 🐨 get the username and password fields via `getByLabelText`
  const inpUsername = screen.getByLabelText(/username/i)
  const inpPassword = screen.getByLabelText(/password/i)

  // 🐨 use userEvent.type to change the username and password fields to
  //    whatever you want

  const username = faker.internet.userName()
  const password = faker.internet.password()

  userEvent.type(inpUsername, username)
  userEvent.type(inpPassword, password)

  // 🐨 click on the button with the text "Submit"
  const submit = screen.getByRole('button', {name: /submit/i})
  userEvent.click(submit)

  // assert that submittedData is correct
  // 💰 use `toEqual` from Jest: 📜 https://jestjs.io/docs/en/expect#toequalvalue
  // expect(submittedData).toEqual({
  //   username: 'pratt.vaidya',
  //   password: 'pratt123',
  // })
  expect(handleSubmit).toHaveBeenCalledWith({
    username,
    password,
  })
  expect(handleSubmit).toHaveBeenCalledTimes(1)
})

/*
eslint
  no-unused-vars: "off",
*/
