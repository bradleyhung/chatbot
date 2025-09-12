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

export default function Topics() {
  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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
                {classItem.topics.map((topic, index) => (
                  <span
                    key={index}
                    className="px-3 py-1.5 bg-orange-400 text-white text-sm font-medium rounded-full hover:bg-orange-500 transition-colors duration-200 cursor-pointer"
                  >
                    {topic}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
