import Link from "next/link";

export default function MathPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">Mathematics</h1>
          <p className="text-gray-700">
            Essential math concepts for computer science and engineering. Click
            any topic from the sidebar to jump to the right section.
          </p>
        </header>

        <nav className="mb-6">
          <ul className="flex gap-3 flex-wrap">
            <li>
              <a
                href="#calculus"
                className="text-sm text-blue-600 hover:underline"
              >
                Calculus
              </a>
            </li>
            <li>
              <a
                href="#linear-algebra"
                className="text-sm text-blue-600 hover:underline"
              >
                Linear Algebra
              </a>
            </li>
            <li>
              <a
                href="#statistics"
                className="text-sm text-blue-600 hover:underline"
              >
                Statistics
              </a>
            </li>
            <li>
              <a
                href="#discrete-math"
                className="text-sm text-blue-600 hover:underline"
              >
                Discrete Math
              </a>
            </li>
          </ul>
        </nav>

        <section id="calculus" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Calculus</h2>
          <p className="text-gray-700 mb-2">
            Calculus studies continuous change through derivatives
            (instantaneous rate of change) and integrals (accumulation). Key
            applications: optimization, modeling physical systems, machine
            learning (gradient descent).
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Quick example</strong>
            <pre className="mt-2 overflow-auto text-sm">
              <code>{`// derivative of f(x) = x² is f'(x) = 2x
// at x=3: slope = 2(3) = 6`}</code>
            </pre>
          </div>
        </section>

        <section id="linear-algebra" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Linear Algebra</h2>
          <p className="text-gray-700 mb-2">
            Linear algebra deals with vectors, matrices, and linear
            transformations. Essential for graphics, machine learning, and
            scientific computing. Core operations: matrix multiplication,
            determinants, eigenvalues, solving linear systems.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Matrix multiplication</strong>
            <p className="text-sm mt-2">
              For A (m×n) and B (n×p), result C (m×p) where C[i][j] = sum of
              A[i][k] * B[k][j] for all k. Non-commutative: AB ≠ BA.
            </p>
          </div>
        </section>

        <section id="statistics" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Statistics</h2>
          <p className="text-gray-700 mb-2">
            Statistics analyzes and interprets data. Descriptive stats (mean,
            median, variance) summarize data. Inferential stats (hypothesis
            testing, confidence intervals) make predictions. Probability
            distributions (normal, binomial) model randomness.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Central Limit Theorem</strong>
            <p className="text-sm mt-2">
              Sample means approach a normal distribution as sample size
              increases, regardless of population distribution — foundation for
              many statistical tests.
            </p>
          </div>
        </section>

        <section id="discrete-math" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Discrete Math</h2>
          <p className="text-gray-700 mb-2">
            Discrete mathematics covers countable structures: logic, sets,
            combinatorics, graph theory, number theory. Critical for computer
            science: algorithm analysis, cryptography, network design, formal
            verification.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Graph theory basics</strong>
            <p className="text-sm mt-2">
              Graphs model relationships (nodes = entities, edges =
              connections). Applications: social networks, routing algorithms,
              dependency resolution. Common problems: shortest path, minimum
              spanning tree.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
