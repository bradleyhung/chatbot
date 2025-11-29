import Link from "next/link";

export default function SystemsPage() {
  return (
    <main className="p-8">
      <Link href="/" className="text-sm text-blue-600 mb-4 inline-block">
        ← Back
      </Link>
      <h1 className="text-3xl font-bold mb-4">System Design</h1>
      <p className="text-gray-700">Content for system design topics.</p>
    </main>
  );
}
