import { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/Button'

export function PromptMaker({ labels, pattern }) {
  const [inputValues, setInputValues] = useState({})
  const [loading, setLoading] = useState(false)
  const [receivedPrompt, setReceivedPrompt] = useState('')

  const handleChange = (event) => {
    setInputValues({
      ...inputValues,
      [event.target.name]: event.target.value,
    })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    setLoading(true)

    let finalPattern = pattern

    labels.forEach((label) => {
      if (inputValues[label]) {
        const regex = new RegExp('\\{' + label + '\\}', 'g')
        finalPattern = finalPattern.replace(regex, inputValues[label])
      }
    })

    // Use regex to remove any sentence from finalPattern that includes a label
    labels.forEach((label) => {
      const sentenceRegex = new RegExp(
        '([^\\.!?]*\\{' + label + '\\}[^\\.!?]*[\\.!?])',
        'g'
      )
      finalPattern = finalPattern.replace(sentenceRegex, '')
    })

    try {
      const response = await axios.post('/api/prompt-maker', { finalPattern })
      let correctedGrammar = response.data.correctedGrammar[0]

      // Use regex to remove double quotes at the start and end of correctedGrammar
      if (correctedGrammar.startsWith('"') && correctedGrammar.endsWith('"')) {
        correctedGrammar = correctedGrammar.replace(/^"|"$/g, '')
      }

      setReceivedPrompt(correctedGrammar)
      setLoading(false)
    } catch (error) {
      console.error(error)
      setLoading(false)
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      onChange={handleChange}
      className="mx-auto flex max-w-5xl flex-col w-3/4"
    >
      {labels.map((label, idx) => {
        return (
          <div className="mt-4 flex flex-col lg:my-4 lg:flex-row" key={idx}>
            <div className="flex flex-col justify-center p-2 lg:mr-8 lg:w-2/4">
              <label
                htmlFor={label}
                className="text-md items-center justify-center font-medium leading-6 text-gray-900"
              >
                {label}:
              </label>
            </div>
            <div className="w-full p-2">
              <div className="mt-2">
                <textarea
                  name={label}
                  id={label}
                  className="block w-full rounded-md border-0 p-4 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                />
              </div>
            </div>
          </div>
        )
      })}
      <Button
        disabled={loading}
        className="text-md mx-auto my-4 w-2/4 py-3 lg:my-4 lg:w-1/3"
      >
        {loading ? 'Loading...' : 'Submit'}
      </Button>
      {receivedPrompt && (
        <>
          <h2 className="text-md font-semibold leading-7 text-custom-darkblue">
            Here&apos;s your prompt!
          </h2>
          <p className="text-md mt-1 leading-6 text-gray-600">
            {receivedPrompt}
          </p>
        </>
      )}
    </form>
  )
}
