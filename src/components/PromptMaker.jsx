import { useState } from 'react'
import { Button } from '@/components/Button'

export function PromptMaker({ labels, pattern }) {
  const [inputValues, setInputValues] = useState({})

  const handleChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    let finalPattern = pattern

    labels.forEach((label) => {
      if (inputValues[label]) {
        let regex = new RegExp('\\{' + label + '\\}', 'g')
        finalPattern = finalPattern.replace(regex, inputValues[label])
      }
    })

    console.log(finalPattern)
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="mx-auto flex w-3/4 max-w-5xl flex-col lg:w-3/4"
    >
      {labels.map((label, idx) => {
        return (
          <div className="mt-4 flex flex-col lg:my-4 lg:flex-row" key={idx}>
            <div className="flex w-1/3 flex-col justify-center p-2 lg:mr-8">
              <label
                htmlFor={label}
                className="text-md items-center justify-center font-medium leading-6 text-gray-900"
              >
                {label}:
              </label>
            </div>
            <div className="w-full p-2">
              <div className="mt-2">
                <input
                  type="text"
                  name={label}
                  id={label}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        )
      })}
      <Button className="text-md mx-auto my-4 w-2/4 py-3 lg:my-4 lg:w-1/3">
        Submit
      </Button>
    </form>
  )
}
