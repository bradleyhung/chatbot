# StudyHub AI Chatbot

A RAG-based AI study assistant powered by LangChain, ChromaDB, and OpenRouter, with a Next.js frontend deployed on Vercel.

🌐 **Live Demo**: https://chatbot-bradley.vercel.app/

## 🏗️ Architecture

- **Frontend**: Next.js 15 + React 19 + Tailwind CSS 4 (Deployed on Vercel)
- **Backend**: Flask + LangChain + ChromaDB + HuggingFace Embeddings (Pending deployment)
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
- **Status**: Deployed
- **URL**: https://chatbot-bradley.vercel.app/
- **Features**: 
  - Automatic HTTPS
  - Global CDN
  - Instant deployments on push

### Backend (Pending) ⏳
**Note**: Backend requires deployment to a platform with sufficient RAM for embeddings.

**Recommended free options:**
1. **Fly.io** (Best for embeddings) - 1GB RAM free tier
2. **Render** (Requires lightweight version) - 512MB RAM free tier

See [DEPLOYMENT.md](DEPLOYMENT.md) for backend deployment instructions.

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

- Backend deployment requires platform with >512MB RAM for embeddings
- Free OpenRouter API may have rate limits
- First request after cold start takes ~5-10 seconds

## 🔮 Future Enhancements

- [ ] Deploy backend to production
- [ ] Add more course topics
- [ ] Implement user feedback system
- [ ] Add code syntax highlighting in responses
- [ ] Export conversation history
- [ ] Multi-language support
