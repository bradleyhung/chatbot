"use client";

import {
  SignInButton,
  SignUpButton,
  UserButton,
  SignedIn,
  SignedOut,
} from "@clerk/nextjs";
import { useState } from "react";
import { useRouter } from "next/navigation";

const searchableTopics = [
  { name: "Big O Notation", course: "algorithms", slug: "big-o-notation" },
  {
    name: "Sorting Algorithms",
    course: "algorithms",
    slug: "sorting-algorithms",
  },
  { name: "Binary Trees", course: "algorithms", slug: "binary-trees" },
  { name: "Hash Tables", course: "algorithms", slug: "hash-tables" },
  { name: "SQL Queries", course: "databases", slug: "sql-queries" },
  { name: "Normalization", course: "databases", slug: "normalization" },
  { name: "Indexing", course: "databases", slug: "indexing" },
  { name: "Transactions", course: "databases", slug: "transactions" },
  { name: "Scalability", course: "systems", slug: "scalability" },
  { name: "Load Balancing", course: "systems", slug: "load-balancing" },
  { name: "Caching", course: "systems", slug: "caching" },
  { name: "Microservices", course: "systems", slug: "microservices" },
  { name: "React", course: "web", slug: "react" },
  { name: "Node.js", course: "web", slug: "node-js" },
  { name: "REST APIs", course: "web", slug: "rest-apis" },
  { name: "Authentication", course: "web", slug: "authentication" },
  { name: "Calculus", course: "math", slug: "calculus" },
  { name: "Linear Algebra", course: "math", slug: "linear-algebra" },
  { name: "Statistics", course: "math", slug: "statistics" },
  { name: "Discrete Math", course: "math", slug: "discrete-math" },
];

export default function Header() {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<typeof searchableTopics>(
    []
  );
  const [showResults, setShowResults] = useState(false);
  const router = useRouter();

  const handleSearch = (query: string) => {
    setSearchQuery(query);
    if (query.trim().length > 0) {
      const filtered = searchableTopics.filter((topic) =>
        topic.name.toLowerCase().includes(query.toLowerCase())
      );
      setSearchResults(filtered);
      setShowResults(true);
    } else {
      setSearchResults([]);
      setShowResults(false);
    }
  };

  const handleTopicClick = (topic: (typeof searchableTopics)[0]) => {
    router.push(`/courses/${topic.course}#${topic.slug}`);
    setSearchQuery("");
    setShowResults(false);
  };

  return (
    <header className="sticky top-0 flex flex-col sm:flex-row items-center justify-between gap-2 sm:gap-0 ml-4 mr-4 py-2 bg-white z-10">
      <div className="flex gap-2 items-center">
        <img
          src="study.svg"
          className="w-7 h-7 sm:w-8 sm:h-8 md:w-10 md:h-10 transition-all"
          alt="Study Logo"
        />
        <div className="font-bold text-base sm:text-lg md:text-xl transition-all">
          StudyHub
        </div>
      </div>

      <div className="relative w-full sm:flex-1 mx-0 sm:mx-4 min-w-0 max-w-full sm:max-w-96">
        <input
          type="search"
          autoComplete="off"
          value={searchQuery}
          onChange={(e) => handleSearch(e.target.value)}
          onFocus={() => searchQuery && setShowResults(true)}
          onBlur={() => setTimeout(() => setShowResults(false), 200)}
          placeholder="Search topics, questions, or concepts..."
          className="w-full px-2 py-1 border rounded text-sm text-center"
        />
        {showResults && searchResults.length > 0 && (
          <div className="absolute top-full mt-1 w-full bg-white border rounded shadow-lg max-h-60 overflow-y-auto z-50">
            {searchResults.map((topic) => (
              <button
                key={`${topic.course}-${topic.slug}`}
                onClick={() => handleTopicClick(topic)}
                className="w-full px-4 py-2 text-left hover:bg-pink-50 border-b last:border-b-0"
              >
                <div className="font-semibold text-sm">{topic.name}</div>
                <div className="text-xs text-gray-500 capitalize">
                  {topic.course}
                </div>
              </button>
            ))}
          </div>
        )}
        {showResults && searchResults.length === 0 && searchQuery && (
          <div className="absolute top-full mt-1 w-full bg-white border rounded shadow-lg p-4 z-50">
            <p className="text-sm text-gray-500">
              No topics found matching &quot;{searchQuery}&quot;
            </p>
          </div>
        )}
      </div>

      <div className="flex gap-2 items-center">
        <SignedOut>
          <SignUpButton mode="modal">
            <button className="w-full sm:w-auto px-4 py-1 mt-1 sm:mt-0 rounded bg-blue-500 text-white text-sm sm:text-base md:text-lg font-medium hover:bg-blue-600 transition-all">
              Sign Up
            </button>
          </SignUpButton>
          <SignInButton mode="modal">
            <button className="w-full sm:w-auto px-4 py-1 mt-1 sm:mt-0 rounded bg-gray-200 text-gray-800 text-sm sm:text-base md:text-lg font-medium hover:bg-gray-300 transition-all">
              Sign In
            </button>
          </SignInButton>
        </SignedOut>
        <SignedIn>
          <UserButton afterSignOutUrl="/" />
        </SignedIn>
      </div>
    </header>
  );
}
