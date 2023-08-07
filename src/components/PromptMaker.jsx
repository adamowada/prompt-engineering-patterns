import { Button } from '@/components/Button'

export function PromptMaker({ labels }) {
  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('test')
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto flex w-3/4 max-w-5xl flex-col lg:w-3/4"
    >
      {labels.map((label, idx) => {
        return (
          <div className="mt-4 flex flex-col lg:my-4 lg:flex-row" key={idx}>
            <div className="p-2 lg:mr-8 flex flex-col justify-center w-1/3">
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
      <Button className="mx-auto w-2/4 lg:w-1/3 my-4 lg:my-4 text-md py-3">
        Submit
      </Button>
    </form>
  )
}
