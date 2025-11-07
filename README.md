# Mahir Faisal's Interactive AI Portfolio

![Portfolio Screenshot](https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=1200)
*<p align="center">A dynamic, AI-powered portfolio designed to showcase skills and personality, not just a list of experiences.</p>*

---

This is the repository for my interactive portfolio website, an immersive experience designed to give recruiters and collaborators a deeper insight into who I am as a professional and a person. It goes beyond a static resume by incorporating Google's Gemini API to create a conversational AI assistant and a creative image generator.

## ✨ Features

*   **Dynamic & Editable Content**: Every piece of information, from my career objective to my project list, can be updated in real-time through a sleek, slide-out dashboard. No code changes needed to update content!
*   **🤖 Gemini-Powered Chatbot**: Have a question? Ask my AI assistant! It's been trained on my professional background to provide witty, informative, and engaging answers about my skills, experience, and even my unique career goals.
*   **🎨 Gemini Vision Image Generator**: Visualize my journey! This tool uses the Gemini API to generate images based on prompts related to my unique blend of tech skills and hands-on aspirations.
*   **Modern & Responsive Design**: Built with Tailwind CSS, the portfolio is fully responsive and provides a seamless experience on desktops, tablets, and mobile devices.
*   **Smooth Animations**: Subtle, scroll-based animations guide the user through the sections, making the experience more engaging.

## 🛠️ Tech Stack

*   **Frontend**: [React](https://react.dev/) & [TypeScript](https://www.typescriptlang.org/)
*   **Styling**: [Tailwind CSS](https://tailwindcss.com/)
*   **AI Engine**: [Google Gemini API](https://ai.google.dev/docs/gemini_api_overview) (`gemini-2.5-flash` for chat, `gemini-2.5-flash-image` for images)

## 🚀 Live Demo

[**Check out the live version here!**](https://your-live-url.com) *(<- You can replace this with your actual deployment link)*

## 🌐 Developed with Google AI Studio

This entire application was built and is hosted on [Google AI Studio](https://aistudio.google.com/). AI Studio provides a web-based IDE that's perfect for rapidly prototyping and building generative AI applications. It offers:
- Seamless integration with the Gemini API.
- A complete web development environment with a code editor, terminal, and web preview.
- Easy access to environment variables for securely storing API keys.
- Quick deployment and sharing capabilities.

It's the tool that made building this AI-powered portfolio a breeze.

## 👨‍💻 About Me

I'm Mahir Faisal, a Co-founder, CEO, and AR/VR Pioneer with a passion for solving problems and creating immersive experiences. This portfolio reflects my journey and my ever-evolving skillset.

*   **LinkedIn**: [linkedin.com/in/mahirDfaisal](https://linkedin.com/in/mahirDfaisal)
*   **Website**: [rrad.ltd](https://www.rrad.ltd)

## 🔧 How to Make It Your Own

Want to use this as a template for your own portfolio? It's easy!

1.  **Fork this repository.**
2.  **Update the content**: All the personal information is located in `src/data.ts`. Simply modify this file with your own details (name, skills, projects, etc.).
3.  **Customize the AI**: The chatbot's personality and instructions are defined in the `systemInstruction` constant in `src/services/geminiService.ts`. You can tweak the prompt to give your AI assistant a unique voice.
4.  **Deploy**: Deploy it to your favorite hosting service.

---

*This project was created to demonstrate the power of combining modern web development with cutting-edge AI. Thanks for visiting!*
