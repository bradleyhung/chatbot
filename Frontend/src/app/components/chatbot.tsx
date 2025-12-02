"use client";

import { useState } from "react";

export default function Chatbot() {
  const [question, setQuestion] = useState("");
  const [messages, setMessages] = useState<
    Array<{ type: "user" | "bot"; text: string }>
  >([]);
  const [loading, setLoading] = useState(false);
  const [sessionId] = useState(
    () => `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`
  );

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!question.trim()) return;

    // Add user message
    const userMessage = question;
    setMessages((prev) => [...prev, { type: "user", text: userMessage }]);
    setQuestion("");
    setLoading(true);

    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_API_URL}/api/chat`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            question: userMessage,
            session_id: sessionId,
          }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setMessages((prev) => [...prev, { type: "bot", text: data.answer }]);
      } else {
        setMessages((prev) => [
          ...prev,
          { type: "bot", text: `Error: ${data.error}` },
        ]);
      }
    } catch {
      setMessages((prev) => [
        ...prev,
        {
          type: "bot",
          text: "Failed to connect to the server. Make sure the backend is running on port 5000.",
        },
      ]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white rounded-2xl p-6 border border-pink-200 shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">
        AI Study Assistant
      </h2>

      {/* Chat messages */}
      <div className="h-64 overflow-y-auto mb-4 space-y-3 p-4 bg-pink-50 rounded-lg">
        {messages.length === 0 ? (
          <div className="text-center text-gray-500 pt-20">
            Ask me anything about the courses!
          </div>
        ) : (
          messages.map((msg, idx) => (
            <div
              key={idx}
              className={`p-3 rounded-lg ${
                msg.type === "user"
                  ? "bg-orange-400 text-white ml-auto max-w-[80%]"
                  : "bg-white text-gray-800 mr-auto max-w-[80%] border border-pink-200"
              }`}
            >
              <div className="text-sm font-semibold mb-1">
                {msg.type === "user" ? "You" : "AI Assistant"}
              </div>
              <div className="whitespace-pre-wrap">{msg.text}</div>
            </div>
          ))
        )}
        {loading && (
          <div className="bg-white text-gray-800 mr-auto max-w-[80%] p-3 rounded-lg border border-pink-200">
            <div className="flex items-center gap-2">
              <div className="animate-pulse">Thinking...</div>
            </div>
          </div>
        )}
      </div>

      {/* Input form */}
      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={question}
          onChange={(e) => setQuestion(e.target.value)}
          placeholder="Ask a question..."
          className="flex-1 px-4 py-2 border border-pink-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-400 focus:border-transparent"
          disabled={loading}
        />
        <button
          type="submit"
          disabled={loading || !question.trim()}
          className="px-6 py-2 bg-orange-400 text-white font-semibold rounded-lg hover:bg-orange-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  );
}
