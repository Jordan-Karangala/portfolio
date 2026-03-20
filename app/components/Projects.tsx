import Link from "next/link";

const projects = [
  {
    title: "Liveness Detection System",
    slug: "liveness-detection",
    description:
      "A computer vision system for secure authentication that distinguishes live users from spoof attacks (photos/videos), generates embeddings, and performs identity verification.",
    tech: "Custom YOLO-style architecture, Computer Vision, Embeddings",
    highlights: [
      "Custom model trained from scratch",
      "Real-time inference pipeline",
      "Embedding-based identity verification",
      "Designed for secure authentication systems",
    ],
    metrics: [
      "Real-time inference",
      "Custom-trained architecture",
      "Embedding-based verification",
    ],
  },
  {
    title: "Pose Detection Model",
    slug: "pose-detection",
    description:
      "A custom-trained pose classification model capable of detecting facial orientation and body pose using a YOLO-style architecture trained from scratch.",
    tech: "Custom YOLO architecture, Keypoint Detection, CV",
    highlights: [
      "Self-collected dataset",
      "Custom training pipeline",
      "Lightweight & adaptable model",
    ],
    metrics: [
      "Custom dataset training",
      "Lightweight architecture",
      "Pose classification pipeline",
    ],
  },
  {
    title: "AI Gym Coach",
    slug: "ai-gym-coach",
    description:
      "An AI-powered fitness assistant that analyzes exercise form using keypoints, calculates joint angles, tracks reps and speed, and provides feedback using an LLM.",
    tech: "YOLO Keypoints, OpenCV, LLM Integration, Biomechanics",
    highlights: [
      "Real-time keypoint tracking",
      "Biomechanical angle analysis",
      "LLM-powered feedback generation",
      "End-to-end intelligent coaching pipeline",
    ],
    metrics: [
      "Real-time keypoint tracking",
      "Angle-based motion analysis",
      "LLM-powered feedback loop",
    ],
  },
];



export default function Projects() {
  return (
    <section id="projects" className="bg-black text-white py-20 px-6">
      <div className="max-w-6xl mx-auto">
        
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          Projects
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Link key={index} href={`/projects/${project.slug}`}>
                <div className="border border-gray-800 rounded-2xl p-6 hover:border-white transition cursor-pointer">
                
                <h3 className="text-xl font-semibold mb-3">
                    {project.title}
                </h3>

                <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                </p>
                <ul className="mt-4 space-y-1">
                    {project.highlights.map((item, i) => (
                    <li key={i} className="text-xs text-gray-400">
                        • {item}
                    </li>
                    ))}
                </ul>

                {/* ✅ ADD METRICS */}
                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.metrics.map((m, i) => (
                      <span
                        key={i}
                        className="text-xs border border-gray-700 px-2 py-1 rounded-md text-gray-300"
                      >
                        {m}
                      </span>
                    ))}
                  </div>
                <p className="text-gray-500 text-xs">
                    {project.tech}
                </p>

                </div>
            </Link>
            ))}
        </div>

      </div>
    </section>
  );
}