export default function Blog() {
  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-4xl mx-auto">
        
        <h1 className="text-3xl md:text-5xl font-bold mb-10">
          Insights & Writing
        </h1>

        <div className="space-y-6">

          <div className="border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              Building Real-Time AI Systems
            </h2>
            <p className="text-gray-400 text-sm">
              Lessons from implementing liveness detection and pose tracking pipelines.
            </p>
          </div>

          <div className="border border-gray-800 p-6 rounded-xl">
            <h2 className="text-xl font-semibold mb-2">
              From Teaching to AI Engineering
            </h2>
            <p className="text-gray-400 text-sm">
              My transition and how structured thinking shaped my approach to ML systems.
            </p>
          </div>

        </div>

      </div>
    </main>
  );
}