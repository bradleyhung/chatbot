import Link from "next/link";
import Chatbot from "./chatbot";

const classes = [
  {
    id: "algorithms",
    title: "Algorithms & Data Structures",
    icon: "algorithm.svg",
    topics: [
      "Big O Notation",
      "Sorting Algorithms",
      "Binary Trees",
      "Hash Tables",
    ],
  },
  {
    id: "databases",
    title: "Database Systems",
    icon: "database.svg",
    topics: ["SQL Queries", "Normalization", "Indexing", "Transactions"],
  },
  {
    id: "systems",
    title: "System Design",
    icon: "systemDesign.svg",
    topics: ["Scalability", "Load Balancing", "Caching", "Microservices"],
  },
  {
    id: "web",
    title: "Web Development",
    icon: "webDev.svg",
    topics: ["React", "Node.js", "REST APIs", "Authentication"],
  },
  {
    id: "math",
    title: "Mathematics",
    icon: "math.svg",
    topics: ["Calculus", "Linear Algebra", "Statistics", "Discrete Math"],
  },
];

// simple slugify for anchors
function slugify(text: string) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[\s\/]+/g, "-")
    .replace(/[^\w-]/g, "");
}

export default function Body() {
  return (
    <div className="flex flex-col-reverse lg:flex-row">
      <div className="grid gap-6 mx-auto p-6">
        {classes.map((classItem) => {
          return (
            <div
              key={classItem.id}
              className="bg-pink-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="p-2 bg-white rounded-lg shadow-sm">
                  <img
                    src={`${classItem.icon}`}
                    alt={`${classItem.title} icon`}
                    className="w-5 h-5 text-gray-600"
                  />
                </div>
                <h3 className="text-gray-700 font-semibold text-lg">
                  {classItem.title}
                </h3>
              </div>

              <div className="flex flex-wrap gap-2">
                {classItem.topics.map((topic) => (
                  <Link
                    key={`${classItem.id}-${topic}`}
                    href={`/courses/${classItem.id}#${slugify(topic)}`}
                    className="px-3 py-1.5 bg-orange-400 text-white text-sm font-medium rounded-full hover:bg-orange-500 transition-colors duration-200 cursor-pointer inline-block"
                  >
                    {topic}
                  </Link>
                ))}
              </div>
            </div>
          );
        })}
      </div>

      <div className="flex-1 p-8">
        <div className="bg-pink-50 rounded-2xl p-6 border border-pink-100 hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
          <h1 className="text-4xl font-bold text-gray-800 mb-4">
            Welcome to StudyHub
          </h1>
          <p className="text-lg text-gray-600 mb-8">
            Your AI-powered learning companion. Explore study materials, ask
            questions, and get instant answers to help you master any topic.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                Quick Start
              </h2>
              <p className="text-gray-600 mb-4">
                Browse topics in the sidebar or ask our AI chatbot any question
                to get started.
              </p>
              <div className="text-sm text-gray-500">
                Example: &quot;What is Big O notation?&quot; or &quot;Explain
                recursion.&quot;
              </div>
            </div>

            <div className="bg-white rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300">
              <h2 className="text-xl font-semibold text-gray-800 mb-3">
                AI Assistant
              </h2>
              <p className="text-gray-600 mb-4">
                Get instant answers to complex questions like &quot;What is Big
                O notation?&quot; or &quot;Explain recursion.&quot;
              </p>
              <div className="text-sm text-gray-500">
                Available 24/7 to help with your studies
              </div>
            </div>
          </div>

          <div className="mt-6">
            <Chatbot />
          </div>
        </div>
      </div>
    </div>
  );
}
