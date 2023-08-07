import { Configuration, OpenAIApi } from 'openai';

const openai = new OpenAIApi(
  new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
  })
)

export default async function handler(req, res) {
  console.log('Requesting ChatGPT grammar correction', req.body)
  const { finalPattern } = req.body

  try {
    const completionRequest = {
      // model: 'gpt-3.5-turbo-16k',
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content:
            'You are a helpful assistant.',
        },
        {
          role: 'user',
          content:
            `Please interpret this text's intent and correct the grammar to the best of your ability:

            \`\`\`text
            ${finalPattern}
            \`\`\`
            
            Do not include commentary or an explanation. Respond with the verbatim correction only, or the same text if it doesn't need correction.`,
        },
      ],
    }

    const correctedGrammar = await (async () => {
      console.log('Sending completion request', completionRequest)
      const completion = await openai.createChatCompletion(completionRequest)
      console.log('Received completion', completion.data)
      return completion.data.choices[0].message?.content ?? 'Failed response'
    })()

    if (correctedGrammar) {
      res.status(200).json({
        correctedGrammar: [correctedGrammar],
      })
    } else {
      res.status(400).json({ correctedGrammar: [], errors: ['No message from OpenAI'] })
    }

  } catch (e) {
    console.error('Error in backend', e.response)
    res.status(500).json({
      correctedGrammar: [],
      errors: [`Error calling openai: ${e.message}`],
    })
  }
}
