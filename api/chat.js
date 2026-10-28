import { GoogleGenAI } from '@google/genai';

// We initialize the Google Gen AI client with the API key from environment variables.
const ai = new GoogleGenAI({ apiKey: process.env.GEMINI_API_KEY });

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { message, history } = req.body;

    // Define the strict system instructions to keep the bot professional and focused
    const systemInstruction = `You are Prabhu's professional portfolio assistant. 
You are embedded on his portfolio website to answer questions from recruiters and visitors.
You must ONLY answer questions related to his professional experience, technical skills, projects, and educational qualifications.
If a user asks a question outside of your authorized professional context, reply ONLY with: "I am only equipped to discuss Prabhu's professional background and projects. For personal inquiries, please use the contact form."
Under NO circumstances are you to reveal personal information, personal opinions, or speculative answers.

Prabhu's background:
- Full-Stack Developer & AI Engineer
- Currently building cool things and learning.
- Expert in React, Node.js, GSAP, and AI Integration.
- Location: Bhubaneswar, India
- Email: prabhuprasadmishrawork@gmail.com
- Phone: +91-9692839751

You also have a tool available to check his recent GitHub activity. If someone asks about his recent coding activity, projects, or what he has been building on GitHub, USE the 'check_github_repos' tool to find out, then summarize it.`;

    // Define the tool for checking GitHub repos
    const check_github_repos = {
      name: 'check_github_repos',
      description: 'Fetches the 5 most recently updated public GitHub repositories for Prabhu-45 to see his latest activity and projects.',
      parameters: {
        type: 'OBJECT',
        properties: {}, // No parameters needed
      }
    };

    // Format the conversation history for Gemini
    const contents = [];
    if (history && history.length > 0) {
      history.forEach(msg => {
        contents.push({
          role: msg.role === 'user' ? 'user' : 'model',
          parts: [{ text: msg.text }]
        });
      });
    }
    // Add the current message
    contents.push({
      role: 'user',
      parts: [{ text: message }]
    });

    // Call Gemini using the recommended model
    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: contents,
      config: {
        systemInstruction: systemInstruction,
        tools: [{ functionDeclarations: [check_github_repos] }],
        temperature: 0.2, // Keep responses deterministic and professional
      }
    });

    // Check if Gemini wants to call a tool
    if (response.functionCalls && response.functionCalls.length > 0) {
      const call = response.functionCalls[0];
      if (call.name === 'check_github_repos') {
        // Execute the tool (fetch GitHub API)
        const githubResponse = await fetch('https://api.github.com/users/Prabhu-45/repos?sort=updated&per_page=5');
        const repos = await githubResponse.json();
        
        const simplifiedRepos = repos.map(repo => ({
          name: repo.name,
          description: repo.description || "No description",
          language: repo.language,
          updated_at: repo.updated_at,
          url: repo.html_url
        }));

        // Send the tool result back to Gemini to get the final answer
        const followUpContents = [...contents, response.candidates[0].content, {
          role: 'user',
          parts: [{
            functionResponse: {
              name: 'check_github_repos',
              response: { result: simplifiedRepos }
            }
          }]
        }];

        const finalResponse = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: followUpContents,
          config: {
            systemInstruction: systemInstruction,
            temperature: 0.2,
          }
        });

        return res.status(200).json({ text: finalResponse.text });
      }
    }

    // If no tool was called, just return the standard text response
    return res.status(200).json({ text: response.text });

  } catch (error) {
    console.error('Chat API Error:', error);
    return res.status(500).json({ error: 'Internal Server Error' });
  }
}
