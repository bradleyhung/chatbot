import Link from "next/link";

export default function WebPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Web Development</h1>
          <p className="text-gray-700">
            Modern web development frameworks, patterns, and best practices.
            Click any topic from the sidebar to jump to the right section.
          </p>
        </header>

        <nav className="mb-6">
          <ul className="flex gap-3 flex-wrap">
            <li>
              <a
                href="#react"
                className="text-sm text-blue-600 hover:underline"
              >
                React
              </a>
            </li>
            <li>
              <a
                href="#nodejs"
                className="text-sm text-blue-600 hover:underline"
              >
                Node.js
              </a>
            </li>
            <li>
              <a
                href="#rest-apis"
                className="text-sm text-blue-600 hover:underline"
              >
                REST APIs
              </a>
            </li>
            <li>
              <a
                href="#authentication"
                className="text-sm text-blue-600 hover:underline"
              >
                Authentication
              </a>
            </li>
          </ul>
        </nav>

        <section id="react" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">React</h2>
          <p className="text-gray-700 mb-2">
            React is a JavaScript library for building user interfaces using
            components. Key concepts: JSX (HTML-like syntax), props (data
            passing), state (component data), hooks (useState, useEffect),
            virtual DOM (efficient updates).
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Quick example</strong>
            <pre className="mt-2 overflow-auto text-sm">
              <code>{`function Counter() {
  const [count, setCount] = useState(0);
  return (
    <button onClick={() => setCount(count + 1)}>
      Count: {count}
    </button>
  );
}`}</code>
            </pre>
          </div>
        </section>

        <section id="nodejs" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Node.js</h2>
          <p className="text-gray-700 mb-2">
            Node.js is a JavaScript runtime for server-side development. Built
            on Chrome&apos;s V8 engine with event-driven, non-blocking I/O.
            Excellent for I/O-heavy applications: APIs, real-time apps,
            streaming. Use Express.js or Fastify for web frameworks.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Event loop</strong>
            <p className="text-sm mt-2">
              Node.js uses a single-threaded event loop to handle concurrent
              operations efficiently via callbacks, promises, and async/await.
            </p>
          </div>
        </section>

        <section id="rest-apis" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">REST APIs</h2>
          <p className="text-gray-700 mb-2">
            REST (Representational State Transfer) is an architectural style for
            web APIs. Uses HTTP methods: GET (read), POST (create), PUT/PATCH
            (update), DELETE (remove). Resources identified by URLs, stateless
            communication, standard response codes (200, 404, 500).
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Best practices</strong>
            <p className="text-sm mt-2">
              Use nouns for resources (/users, /posts), proper HTTP methods,
              versioning (/v1/), meaningful status codes, and consistent JSON
              response format.
            </p>
          </div>
        </section>

        <section id="authentication" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Authentication</h2>
          <p className="text-gray-700 mb-2">
            Authentication verifies user identity. Common methods: session-based
            (cookies), token-based (JWT), OAuth 2.0 (third-party), passwordless
            (magic links, biometrics). Always use HTTPS, hash passwords
            (bcrypt), implement rate limiting, and use secure session
            management.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>JWT tokens</strong>
            <p className="text-sm mt-2">
              JSON Web Tokens contain encoded user data and signature.
              Stateless, scalable, but require careful expiration and refresh
              token handling.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
