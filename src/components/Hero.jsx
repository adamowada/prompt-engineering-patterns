import { Fragment } from 'react'
import Image from 'next/image'
import clsx from 'clsx'
import Highlight, { defaultProps } from 'prism-react-renderer'

import { Button } from '@/components/Button'
import { HeroBackground } from '@/components/HeroBackground'
import blurCyanImage from '@/images/blur-cyan.png'
import blurIndigoImage from '@/images/blur-indigo.png'

const codeLanguage = 'javascript'
const code = `export default {
  strategy: 'predictive',
  engine: {
    cpus: 12,
    backups: ['./storage/cache.wtf'],
  },
}`

const tabs = [
  { name: 'cache-advance.config.js', isActive: true },
  { name: 'package.json', isActive: false },
]

function TrafficLightsIcon(props) {
  return (
    <svg aria-hidden="true" viewBox="0 0 42 10" fill="none" {...props}>
      <circle cx="5" cy="5" r="4.5" />
      <circle cx="21" cy="5" r="4.5" />
      <circle cx="37" cy="5" r="4.5" />
    </svg>
  )
}

export function Hero({ handlePromptWizard, showWizardForm }) {
  return (
    <div className="overflow-hidden bg-gradient-to-r from-custom-darkblue to-custom-blue dark:-mb-32 dark:mt-[-4.5rem] dark:pb-32 dark:pt-[4.5rem] dark:lg:mt-[-4.75rem] dark:lg:pt-[4.75rem]">
      <div className="py-16 sm:px-2 lg:relative lg:px-0 lg:py-20">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-center gap-x-8 gap-y-16 px-4 lg:max-w-8xl lg:grid-cols-2 lg:px-8 xl:gap-x-16 xl:px-12">
          <div className="relative z-10 md:text-center lg:text-left">
            <div className="relative">
              <p className="inline bg-custom-red bg-clip-text font-display text-5xl tracking-tight text-transparent drop-shadow">
                Master ChatGPT with Ease
              </p>
              <p className="mt-3 text-2xl tracking-tight text-white">
                Can&apos;t write the perfect prompt? Our interactive Prompt Wizard tool crafts kickass prompts for you. Try it now!
              </p>
              <div className="mt-8 flex gap-4 md:justify-center lg:justify-start">
                {
                showWizardForm  
                ? <Button href="/" onClick={handlePromptWizard} title="You're a prompt engineer Harry!" className="bg-custom-yellow hover:bg-custom-darkyellow text-gray-900">Hide Wizard 🎩</Button>
                : <Button href="/" onClick={handlePromptWizard} title="You're a prompt engineer Harry!" className="bg-custom-yellow hover:bg-custom-darkyellow text-gray-900">Prompt Wizard 🪄</Button>
                }
              </div>
            </div>
          </div>
          <div className="relative lg:static xl:pl-10">
            <div className="relative">
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10 blur-lg" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-sky-300 via-sky-300/70 to-blue-300 opacity-10" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
