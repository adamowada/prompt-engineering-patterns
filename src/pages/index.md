---
title: Welcome to Prompt Engineering Patterns!
pageTitle: Prompt Engineering Patterns
description: Learn about prompt engineering patterns.
---

Just as design patterns are solutions to common problems in software design, prompt engineering patterns are solutions to common problems in prompt design. {% .lead %}

{% quick-links handlePromptWizard="test" %}

{% quick-link title="Prompt Wizard" icon="installation" href="/?showWizardForm=true" description="Craft your next prompt with this interactive tool built with GPT-3.5-turbo." /%}

{% quick-link title="How to Use ChatGPT" icon="presets" href="/" description="Learn the basics of ChatGPT and prompt engineering." /%}

{% /quick-links %}

All prompt patterns are either `Context Patterns`, or `Response Patterns`.

---

## Context Patterns

`Context` refers to the entire conversational history which, along with the prompt, act as the input to the AI model. Context Patterns are concerned with manipulating the context of a prompt to steer the AI model and are useful for when you don't know the expected outcome. Like asking a question to be able to ask a better question.

{% quick-links %}

{% quick-link title="Conversational Funnel" icon="funnel" href="/" description="Useful for when you don't know the precise question to ask." /%}

{% quick-link title="Set Own Goal" icon="target" href="/" description="Asks the model to define success conditions which become part of future context." /%}

{% quick-link title="Compression" icon="compress" href="/" description="Get the most out of a limited context window by asking the model to compress the input." /%}

{% quick-link title="Tree Search" icon="tree" href="/" description="Searching through prompts and responses to achieve a specific context, unknown at the start." /%}

{% /quick-links %}

---

## Response Patterns

The `response` is the text your AI model gives you after you prompt it. Response Patterns are concerned with steering an AI model towards structured output known to the user beforehand. Great for when you know what you want the model to do.

{% quick-links %}

{% quick-link title="Google 2.0" icon="google" href="/" description="Boring but effective." /%}

{% quick-link title="Who - What - How" icon="who" href="/" description="The swiss army knife of prompts. Very versatile." /%}

{% quick-link title="Do ___ with ___" icon="dowith" href="/" description="Great for code review or revision. Asks model to operate on given text." /%}

{% quick-link title="Do ___ with ___ like ___ " icon="dowithlike" href="/" description="Same as `Do ___ with ___` but gives an example for formatting purposes. Examples help steer." /%}

{% quick-link title="Interactive Mode" icon="interactive" href="/" description="Have your model interview you! Or play a game. Broadly speaking it's any pattern where the goal is to have the AI model as the user a question and wait for a response (for example)." /%}
 
{% quick-link title="Explain Your Thought Process" icon="thoughtprocess" href="/" description="Increases accuracy and explanabilty to model responses." /%}

{% quick-link title="Creative Factory" icon="factory" href="/" description="Asks model to generate creative stuff." /%}

{% quick-link title="One to Many" icon="onetomany" href="/" description="A way of chunking output to get around response limits." /%}

{% /quick-links %}
