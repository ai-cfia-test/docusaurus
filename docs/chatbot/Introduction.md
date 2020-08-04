---
id: Introduction
title: Introduction
sidebar_label: Introduction
---


# Conversational Chatbot

A conversational chatbot that is also trained to answer Frequently Asked Questions(FAQs) to aid the digital service delivery platform. The model performs with a 100% accuracy on questions relating to the training data

## Introduction
Derived from “chat robot”, "chatbots" allow for highly engaging, conversational experiences, through voice and text, that can be customized and used on mobile devices, web browsers, and on popular chat platforms such as Facebook Messenger, or Slack. With the advent of deep learning technologies such as text-to-speech, automatic speech recognition, and natural language processing, chatbots that simulate human conversation and dialogue can now be found in call center and customer service workflows, DevOps management, and as personal assistants.

## Popular Chatbot building Platforms

- [Dialogflow](https://cloud.google.com/dialogflow)
    Dialogflow is a natural language understanding platform that makes it easy to design and integrate a conversational user interface into your mobile app, web application, device, bot, interactive voice response system, and so on. Using Dialogflow, you can provide new and engaging ways for users to interact with your product.
    Dialogflow can analyze multiple types of input from your customers, including text or audio inputs (like from a phone or voice recording). It can also respond to your customers in a couple of ways, either through text or with synthetic speech.

- [Amazon Lex](https://aws.amazon.com/lex/)
    Amazon Lex is a service for building conversational interfaces into any application using voice and text. Amazon Lex provides the advanced deep learning functionalities of automatic speech recognition (ASR) for converting speech to text, and natural language understanding (NLU) to recognize the intent of the text, to enable you to build applications with highly engaging user experiences and lifelike conversational interactions. With Amazon Lex, the same deep learning technologies that power Amazon Alexa are now available to any developer, enabling you to quickly and easily build sophisticated, natural language, conversational bots (“chatbots”).

- [Microsoft Bot Framework](https://docs.microsoft.com/en-gb/azure/bot-service/?view=azure-bot-service-4.0)
    Microsoft Bot Service enables you to build intelligent, enterprise-grade bots with ownership and control of your data. Begin with a simple Q&A bot or build a sophisticated virtual assistant.
    Use comprehensive open source SDK and tools to easily connect your bot to popular channels and devices. Give your bot the ability to speak, listen, and understand your users with native integration to Azure Cognitive Services.

- [RASA](https://rasa.com/)
    Rasa is an open source machine learning framework for automated text and voice-based conversations. Understand messages, hold conversations, and connect to messaging channels and APIs.

These are some of the most popular chatbot building frameworks, however, only RASA is free and open source. Hence, it is the building framework we choose.

## Model
<div style={{textAlign:'center'}}>
    <img src="/img/chatbot.JPG"/>
</div>


Fig 1. Process flow

When user types an input for the chatbot, the first step is to decide the "intent" of the incoming user sentence. The "intents" are defined by us initially and help identify the correct way to respond to the user. A few examples of intents are "greet", "goodbye", "chit-chat", or "faq".

When the model detects the intent as 'faq', the question is passed on to a pre-trained [BERT](https://arxiv.org/pdf/1810.04805.pdf), which is used to generate embedding for that question. This helps us to be able to answer questions that mean the same thing even though are not exactly word-to-word from the FAQs we trained the model on. This broadens the scope of our model and makes it more usable. The generated embeddings are then passed to the RASA action server, which computes a similarity score and returns the response to the user.

When the model detects any other intent except "faq" it invokes the RASA NLU(Natural Language Understanding) module and generates an apt response for the intent.
<div style={{textAlign:'center'}}>
    <img src="/img/chatbot_in_action.gif"/>
</div>



Fig 2. Our Chatbot in action

## RASA X
[Rasa X](https://rasa.com/docs/rasa-x/) is a tool for Conversation-Driven Development (CDD), the process of listening to users and using those insights to improve the AI assistant.

#### Key Features of Rasa X
  - All conversations that the chatbot has had with various users can be viewed in Rasa X web UI. This allows the administrator to review and flag chatbot responses.
  - The conversation log can also be exported to train the chatbot, and thereby improve the flow of conversation.
  - It also makes it easy to annotate new data. The new sentences encountered by the chatbot are presented to the administrator, who can then associate them to correct "intents", thereby making it feasible for the model to respond appropriately to new data.
  - The UI also allows the administrator to add new data and responses to the chatbot and train the model with just a click of a button.