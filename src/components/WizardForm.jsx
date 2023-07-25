import React, { useState } from 'react'
import axios from 'axios'
import { Button } from '@/components/Button'

function QuestionResponse(content, questionHeader, questionParagraph, userResponse) {
  this.content = content;
  this.questionHeader = questionHeader;
  this.questionParagraph = questionParagraph;
  this.userResponse = userResponse || '';
}

export function WizardForm({ initialLoad }) {
  const [conversationData, setConversationData] = useState([new QuestionResponse(`Certainly! Let's start by gathering some information to formulate a prompt for ChatGPT.

  Question 1: What is the main goal or objective you would like to achieve with ChatGPT?
  
  By understanding your goal, we can tailor the prompt to align with your specific needs and guide ChatGPT towards providing relevant and valuable responses. Please provide as much detail as possible about your objective.`, 'Question 1:', 'What is the main goal or objective you would like to achieve with ChatGPT?')])

  const handleChange = (event) => {
    let {content, questionHeader, questionParagraph, userResponse} = conversationData[0]
    setConversationData([new QuestionResponse(content, questionHeader, questionParagraph, userResponse + event.target.value)])
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      const response = await axios.post('/api/chat', {conversationData})
      const questionPrompt = response.data.questionPrompts[0].questionPrompt // string of the next question or prompt from chatgpt

      let pattern = /(Question\s\d+:)\s(.*?)(?=\n|$)/gs;
      let matches = pattern.exec(questionPrompt);
      console.log(matches[1]);
      console.log(matches[2]);

      // set state
      setConversationData([...conversationData, new QuestionResponse(questionPrompt, matches[1], matches[2])])

    } catch (error) {
      console.error(error)
    }
  }

  return (
    <form onSubmit={handleSubmit} onChange={handleChange} className={`flex flex-col w-3/4 lg:w-3/4 max-w-5xl mx-auto ${initialLoad && 'hidden'}`}>

        {conversationData.map((item, idx) => {
          return (
            <div className='flex flex-col lg:flex-row lg:my-12 mt-4' key={idx}>
              <div className='w-full lg:w-1/2 p-2'>
                <h2 className="text-md font-semibold leading-7 text-gray-900">
                  {item.questionHeader} 
                </h2>
                <p className="mt-1 text-md leading-6 text-gray-600">
                {item.questionParagraph} 
                </p>
              </div>

              <p>{item.userResponse}</p>

              {!item.userResponse && 
                <div className="w-full lg:w-1/2 p-2">
                  <label
                    htmlFor="user-response"
                    className="block text-md font-medium leading-6 text-gray-900"
                  >
                    User response
                  </label>
                  <div className="mt-2">
                    <input
                      type="text"
                      name="user-response"
                      id="user-response"
                      className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-4"
                    />
                  </div>
                </div>
              }
            </div>
          )
        })}

      <Button className="mx-auto w-2/4 lg:w-1/3 my-4 lg:my-0 lg:mb-12 text-md py-3" onSubmit={handleSubmit}>Submit</Button>
    </form>
  )
}
