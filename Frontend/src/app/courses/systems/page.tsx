import Link from "next/link";

export default function SystemsPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">System Design</h1>
          <p className="text-gray-700">
            Principles and patterns for building scalable, reliable distributed
            systems. Click any topic from the sidebar to jump to the right
            section.
          </p>
        </header>

        <nav className="mb-6">
          <ul className="flex gap-3 flex-wrap">
            <li>
              <a
                href="#scalability"
                className="text-sm text-blue-600 hover:underline"
              >
                Scalability
              </a>
            </li>
            <li>
              <a
                href="#load-balancing"
                className="text-sm text-blue-600 hover:underline"
              >
                Load Balancing
              </a>
            </li>
            <li>
              <a
                href="#caching"
                className="text-sm text-blue-600 hover:underline"
              >
                Caching
              </a>
            </li>
            <li>
              <a
                href="#microservices"
                className="text-sm text-blue-600 hover:underline"
              >
                Microservices
              </a>
            </li>
          </ul>
        </nav>

        <section id="scalability" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Scalability</h2>
          <p className="text-gray-700 mb-2">
            Scalability is a system's ability to handle increased load. Vertical
            scaling (bigger machines) vs. horizontal scaling (more machines).
            Horizontal scaling provides better fault tolerance and cost
            efficiency but requires distributed system design.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Design considerations</strong>
            <p className="text-sm mt-2">
              Stateless services scale easily. Use load balancers, database
              replication/sharding, message queues, and CDNs to distribute load.
            </p>
          </div>
        </section>

        <section id="load-balancing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Load Balancing</h2>
          <p className="text-gray-700 mb-2">
            Load balancers distribute incoming requests across multiple servers
            to optimize resource usage and prevent overload. Algorithms:
            round-robin, least connections, IP hash. Layer 4 (transport) vs.
            Layer 7 (application) balancing.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Health checks</strong>
            <p className="text-sm mt-2">
              Load balancers monitor server health and route traffic only to
              healthy instances, improving availability and fault tolerance.
            </p>
          </div>
        </section>

        <section id="caching" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Caching</h2>
          <p className="text-gray-700 mb-2">
            Caching stores frequently accessed data in fast storage to reduce
            latency and database load. Strategies: cache-aside, write-through,
            write-back. Consider TTL (time-to-live), eviction policies (LRU,
            LFU), and cache invalidation.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Cache levels</strong>
            <p className="text-sm mt-2">
              Client-side, CDN, application-level (Redis, Memcached), and
              database query cache — each layer reduces load on downstream
              components.
            </p>
          </div>
        </section>

        <section id="microservices" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Microservices</h2>
          <p className="text-gray-700 mb-2">
            Microservices architecture splits applications into small,
            independent services that communicate via APIs. Benefits:
            independent deployment, technology flexibility, fault isolation.
            Challenges: distributed complexity, service discovery, data
            consistency.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Communication patterns</strong>
            <p className="text-sm mt-2">
              Synchronous (REST, gRPC) for request/response. Asynchronous
              (message queues, event streaming) for decoupled, resilient
              interactions.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
