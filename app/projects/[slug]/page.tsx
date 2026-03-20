const projectData: any = {
  "liveness-detection": {
    title: "Liveness Detection System",
    description:
      "A computer vision system designed for secure authentication by detecting real users versus spoof attacks like photos and videos.",
      
    details: [
      "Built a custom YOLO-style architecture trained from scratch",
      "Performs bounding box detection and feature embedding generation",
      "Supports identity verification through embedding comparison",
      "Designed for real-world security applications"
    ],
  },
  "pose-detection": {
    title: "Pose Detection Model",
    description:
      "A pose classification system capable of detecting facial and body orientation using a custom-trained architecture.",
    details: [
      "Custom YOLO-based architecture trained on self-collected dataset",
      "Detects face orientation and pose classification",
      "Lightweight and adaptable for multiple applications"
    ],
  },
  "ai-gym-coach": {
    title: "AI Gym Coach",
    description:
      "An intelligent fitness assistant that analyzes exercise form and provides feedback using AI and LLMs.",
    details: [
      "Real-time keypoint detection using YOLO",
      "Angle calculations between joints for movement analysis",
      "Tracks repetitions, speed, and posture",
      "LLM-based feedback generation for coaching insights",
      "Data logging and visualization for performance tracking"
    ],
  },
};

export default async function ProjectPage({ params }: any) {
  const { slug } = await params;

  console.log("Slug:", slug);

  const project = projectData[slug];

  if (!project) {
    return <div className="text-white p-10">Project not found: {slug}</div>;
  }

  return (
    <main className="min-h-screen bg-black text-white px-6 py-20">
      <div className="max-w-3xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-5xl font-bold mb-6">
          {project.title}
        </h1>


        {/* Description */}
        <p className="text-gray-400 mb-8">{project.description}</p>

        <ul className="space-y-3">
          {project.details.map((item: string, index: number) => (
            <li key={index} className="text-gray-300">
              • {item}
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}