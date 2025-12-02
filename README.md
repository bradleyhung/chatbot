# StudyHub AI Chatbot

A RAG-based AI study assistant powered by LangChain, ChromaDB, and OpenRouter, with a Next.js frontend and Flask backend - fully deployed and 100% free!

🌐 **Live Demo**: https://chatbot-bradley.vercel.app/

## 🏗️ Architecture

- **Frontend**: Next.js 15 + React 19 + Tailwind CSS 4 (Deployed on Vercel ✅)
- **Backend**: Flask + LangChain + ChromaDB + HuggingFace Embeddings (Deployed on Hugging Face Spaces ✅)
- **Authentication**: Clerk
- **AI Model**: Mistral-7B-Instruct (via OpenRouter - Free tier)

## ✨ Features

- 🤖 AI-powered Q&A for computer science courses
- 🔐 Secure authentication with Clerk
- 💬 Conversation history with context awareness
- 🛡️ Prompt injection protection
- 📱 Responsive design (mobile-first)
- ⚡ Fast, modern UI with Tailwind CSS

## 📚 Course Topics Covered

- **Algorithms & Data Structures**: Big O, Sorting, Trees, Hash Tables
- **Database Systems**: SQL, Normalization, Indexing, Transactions
- **System Design**: Scalability, Caching, Load Balancing, Microservices
- **Web Development**: React, Node.js, REST APIs, Authentication
- **Mathematics**: Calculus, Linear Algebra, Statistics, Discrete Math

## 🚀 Deployment Status

### Frontend (Vercel) ✅

- **Status**: Live and deployed
- **URL**: https://chatbot-bradley.vercel.app/
- **Features**:
  - Automatic HTTPS
  - Global CDN
  - Instant deployments on push
  - Environment-based configuration

### Backend (Hugging Face Spaces) ✅

- **Status**: Live and deployed
- **URL**: https://bradleyhung-studyhub-chatbot-backend.hf.space
- **Features**:
  - 2GB RAM (perfect for embeddings)
  - Always-on (no cold starts)
  - Built-in secrets management
  - Free forever (CPU Basic tier)
  - Docker-based deployment

**Total Cost**: $0.00/month - Completely free! 🎉

See [HUGGINGFACE_DEPLOYMENT.md](HUGGINGFACE_DEPLOYMENT.md) for backend deployment guide.

## 🛠️ Local Development

### Prerequisites

- Node.js 20+
- Python 3.11+
- Git

### Frontend Setup

```bash
cd Frontend
npm install
cp .env.local.example .env.local
# Add your Clerk keys and API URL to .env.local
npm run dev
```

Visit http://localhost:3000

### Backend Setup

```bash
cd Backend
python -m venv .venv
.venv\Scripts\activate  # Windows
# or: source .venv/bin/activate  # Mac/Linux

pip install -r requirements.txt
cp .env.example .env
# Add your OpenRouter API key to .env
python chatbot.py
```

API runs at http://localhost:5000

## 🧪 Testing Locally

1. Start backend: `cd Backend && python chatbot.py`
2. Start frontend: `cd Frontend && npm run dev`
3. Open http://localhost:3000
4. Ask questions like:
   - "What is Big O notation?"
   - "Explain SQL joins"
   - "How does load balancing work?"

## 📦 Tech Stack Details

### Frontend Dependencies

- Next.js 15.5.3 with Turbopack
- React 19.1.0
- Tailwind CSS 4
- Clerk authentication
- TypeScript 5

### Backend Dependencies

- Flask 3.1.0 with CORS
- LangChain (Community, OpenAI, Chroma, HuggingFace)
- ChromaDB 1.3.5
- Sentence Transformers 5.1.2
- Gunicorn 23.0.0 (production server)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## 📄 License

This project is for educational purposes.

## 🐛 Known Issues

- Free OpenRouter API may have rate limits during high usage
- First AI response may take ~5-10 seconds while model loads

## 🔮 Future Enhancements

- [ ] Add more course topics and subjects
- [ ] Add more course topics
- [ ] Implement user feedback system
- [ ] Add code syntax highlighting in responses
- [ ] Export conversation history
- [ ] Multi-language support
