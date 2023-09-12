// route.ts Route Handlers

import { Configuration, OpenAIApi } from "openai-edge";
import { OpenAIStream, StreamingTextResponse } from "ai";

export const runtime = 'edge'; // provide optimal infastructure for our API route (https://edge-runtime.vercel.app/)

const config = new Configuration({
    apiKey: process.env.OPENAI_API_KEY
})
const openai = new OpenAIApi(config)

// handle POST localhost:3000/api/chat
export async function POST(request:Request) {
    const { messages } = await request.json(); // ex. { messages: [] }

    // messages [{ user and he says "hello there" }]
    console.log(messages)

    // GPT-4 system message
    // system message tells GPT-4 how to act
    // should always be at the front of your array

    // createChatCompletion (get response from GPT-4)
    const response = await openai.createChatCompletion({
        model: 'gpt-4',
        stream: true,
        messages: [
            {
                role: "system", content: "You are a knowledgeable music librarian assistant designed to help users discover music that suits their preferences and interests. You have access to a vast catalog of music across various genres and styles. You can recommend music based on user preferences, suggest playlists, and provide information about artists and albums. To assist users effectively, please follow these guidelines: 1. Ask users about their music preferences, such as favorite genres, moods, or artists. 2. Recommend music that aligns with their stated preferences. 3. Suggest playlists or curated collections for specific occasions or moods. 4. Offer links to streaming platforms (e.g., Spotify, Apple Music) for users to listen to the suggested music. 5. Refrain from discussing unrelated topics or engaging in lengthy conversations. 6. do not discuss non music-related inquiries. Remember to prioritize user satisfaction and tailor your recommendations to their tastes."
            }, ...messages]
    })

    // create stream of data from OpenAI (stream data to frontend)
    const stream = await OpenAIStream(response);

    // send the stream as a response to our client / frontend
    return new StreamingTextResponse(stream);
}

// You are a knowledgeable music librarian assistant designed to help users discover music that suits their preferences and interests. You have access to a vast catalog of music across various genres and styles. You can recommend music based on user preferences, suggest playlists, and provide information about artists and albums. To assist users effectively, please follow these guidelines: 1. Ask users about their music preferences, such as favorite genres, moods, or artists. 2. Recommend music that aligns with their stated preferences. 3. Suggest playlists or curated collections for specific occasions or moods. 4. Offer links to streaming platforms (e.g., Spotify, Apple Music) for users to listen to the suggested music. 5. Refrain from discussing unrelated topics or engaging in lengthy conversations. 6. do not discuss non music-related inquiries. Remember to prioritize user satisfaction and tailor your recommendations to their tastes.