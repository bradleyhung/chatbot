import Link from "next/link";

export default function DatabasesPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Database Systems</h1>
          <p className="text-gray-700">
            Core concepts for designing, querying, and optimizing databases.
            Click any topic from the sidebar to jump to the right section.
          </p>
        </header>

        <nav className="mb-6">
          <ul className="flex gap-3 flex-wrap">
            <li>
              <a
                href="#sql-queries"
                className="text-sm text-blue-600 hover:underline"
              >
                SQL Queries
              </a>
            </li>
            <li>
              <a
                href="#normalization"
                className="text-sm text-blue-600 hover:underline"
              >
                Normalization
              </a>
            </li>
            <li>
              <a
                href="#indexing"
                className="text-sm text-blue-600 hover:underline"
              >
                Indexing
              </a>
            </li>
            <li>
              <a
                href="#transactions"
                className="text-sm text-blue-600 hover:underline"
              >
                Transactions
              </a>
            </li>
          </ul>
        </nav>

        <section id="sql-queries" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">SQL Queries</h2>
          <p className="text-gray-700 mb-2">
            SQL (Structured Query Language) is used to interact with relational
            databases. Core operations: SELECT (read), INSERT (create), UPDATE
            (modify), DELETE (remove). Use JOINs to combine tables and WHERE
            clauses to filter results.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Quick example</strong>
            <pre className="mt-2 overflow-auto text-sm">
              <code>{`SELECT users.name, orders.total
FROM users
INNER JOIN orders ON users.id = orders.user_id
WHERE orders.total > 100;`}</code>
            </pre>
          </div>
        </section>

        <section id="normalization" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Normalization</h2>
          <p className="text-gray-700 mb-2">
            Database normalization organizes data to reduce redundancy and
            improve integrity. Normal forms: 1NF (atomic values), 2NF (no
            partial dependencies), 3NF (no transitive dependencies), BCNF
            (stricter 3NF). Trade-off: normalized schemas may require more
            JOINs.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>When to denormalize</strong>
            <p className="text-sm mt-2">
              For read-heavy workloads, denormalization can improve performance
              by reducing JOINs, but increases storage and update complexity.
            </p>
          </div>
        </section>

        <section id="indexing" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Indexing</h2>
          <p className="text-gray-700 mb-2">
            Indexes speed up data retrieval by creating efficient lookup
            structures (e.g., B-trees, hash indexes). Trade-off: faster reads,
            slower writes. Index columns frequently used in WHERE, JOIN, and
            ORDER BY clauses.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Composite indexes</strong>
            <p className="text-sm mt-2">
              Multi-column indexes (e.g., INDEX(last_name, first_name)) are
              effective when queries filter by prefix columns in order.
            </p>
          </div>
        </section>

        <section id="transactions" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Transactions</h2>
          <p className="text-gray-700 mb-2">
            Transactions ensure ACID properties: Atomicity (all or nothing),
            Consistency (valid state), Isolation (concurrent execution),
            Durability (permanent after commit). Use BEGIN, COMMIT, and ROLLBACK
            to manage transactions.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Isolation levels</strong>
            <p className="text-sm mt-2">
              Read Uncommitted, Read Committed, Repeatable Read, Serializable —
              each balances consistency vs. concurrency differently.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
