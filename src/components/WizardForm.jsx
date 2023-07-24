import React, { useState } from 'react'
import axios from 'axios'

export function WizardForm({ initialLoad }) {
  const [formData, setFormData] = useState('')

  const handleChange = (event) => {
    setFormData(event.target.value)
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/chat', {formData})
      console.log(response.data.questionPrompts[0].questionPrompt)
    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className={`grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 p-8 md:grid-cols-3 ${
        initialLoad && 'hidden'
      }`}
    >
      <div
        className={`grid grid-cols-1 gap-x-8 gap-y-10 border-b border-gray-900/10 p-8 md:grid-cols-3 ${
          initialLoad && 'hidden'
        }`}
      >
        <div>
          <h2 className="text-base font-semibold leading-7 text-gray-900">
            Question 1: 
          </h2>
          <p className="mt-1 text-sm leading-6 text-gray-600">
            What is the main goal or objective you would like to achieve with ChatGPT?
          </p>
        </div>

        <div className="grid max-w-2xl grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6 md:col-span-2">
          <div className="sm:col-span-3">
            <label
              htmlFor="user-response"
              className="block text-sm font-medium leading-6 text-gray-900"
            >
              User response
            </label>
            <div className="mt-2">
              <input
                type="text"
                name="user-response"
                id="user-response"
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
              />
            </div>
          </div>
        </div>
        <button type="submit">Submit</button>
      </div>
    </form>
  )
}
