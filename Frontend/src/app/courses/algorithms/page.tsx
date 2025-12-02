import Link from "next/link";

export default function AlgorithmsPage() {
  return (
    <main className="min-h-screen bg-pink-50 p-8">
      <div className="max-w-4xl mx-auto">
        <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
          ← Back
        </Link>

        <header className="mb-6">
          <h1 className="text-3xl font-bold mb-2">
            Algorithms & Data Structures
          </h1>
          <p className="text-gray-700">
            Short reference sections for common topics. Click any topic from the
            sidebar to jump to the right section.
          </p>
        </header>

        <nav className="mb-6">
          <ul className="flex gap-3 flex-wrap">
            <li>
              <a
                href="#big-o-notation"
                className="text-sm text-blue-600 hover:underline"
              >
                Big O Notation
              </a>
            </li>
            <li>
              <a
                href="#sorting-algorithms"
                className="text-sm text-blue-600 hover:underline"
              >
                Sorting Algorithms
              </a>
            </li>
            <li>
              <a
                href="#binary-trees"
                className="text-sm text-blue-600 hover:underline"
              >
                Binary Trees
              </a>
            </li>
            <li>
              <a
                href="#hash-tables"
                className="text-sm text-blue-600 hover:underline"
              >
                Hash Tables
              </a>
            </li>
          </ul>
        </nav>

        <section id="big-o-notation" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Big O Notation</h2>
          <p className="text-gray-700 mb-2">
            Big O describes the upper bound of an algorithm&apos;s running time or
            space as input size grows. Common classes: O(1), O(log n), O(n), O(n
            log n), O(n^2).
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Quick example</strong>
            <pre className="mt-2 overflow-auto text-sm">
              <code>{`// linear scan -> O(n)
for (let i = 0; i < arr.length; i++) {
  // work per element
}`}</code>
            </pre>
          </div>
        </section>

        <section id="sorting-algorithms" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Sorting Algorithms</h2>
          <p className="text-gray-700 mb-2">
            Common sorts: QuickSort (avg O(n log n)), MergeSort (O(n log n)),
            HeapSort (O(n log n)), Bubble/Insertion (O(n^2)). Choose by
            stability, memory, average/worst-case, and simplicity.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>When to use MergeSort</strong>
            <p className="text-sm mt-2">
              Stable and predictable O(n log n) with extra O(n) memory; good for
              large datasets where stability matters.
            </p>
          </div>
        </section>

        <section id="binary-trees" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Binary Trees</h2>
          <p className="text-gray-700 mb-2">
            A binary tree node has up to two children. Special forms: binary
            search tree (BST), AVL, red-black (balanced). Traversals: in-order,
            pre-order, post-order.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>BST property</strong>
            <p className="text-sm mt-2">
              Left subtree keys &lt; node key &lt; right subtree keys — enables
              O(log n) average search/insertion (unbalanced worst-case O(n)).
            </p>
          </div>
        </section>

        <section id="hash-tables" className="mb-8">
          <h2 className="text-2xl font-semibold mb-2">Hash Tables</h2>
          <p className="text-gray-700 mb-2">
            Hash tables map keys to buckets via a hash function. Average access
            is O(1); collision resolution affects performance (chaining, open
            addressing). Good for fast lookups and frequency counting.
          </p>
          <div className="bg-gray-50 p-4 rounded border">
            <strong>Collision handling</strong>
            <p className="text-sm mt-2">
              Chaining stores a list per bucket; open addressing probes to find
              an empty slot. Choose based on memory and clustering behavior.
            </p>
          </div>
        </section>
      </div>
    </main>
  );
}
