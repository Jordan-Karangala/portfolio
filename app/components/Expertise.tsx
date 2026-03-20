export default function Expertise() {
  return (
    <section className="bg-black text-white py-20 px-6">
      <div className="max-w-5xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Core Expertise
        </h2>

        <div className="grid md:grid-cols-3 gap-8 text-left">

          <div>
            <h3 className="text-xl font-semibold mb-3">Computer Vision</h3>
            <p className="text-gray-400 text-sm">
              Custom YOLO-style architectures, keypoint detection, and real-time inference systems.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">AI Systems</h3>
            <p className="text-gray-400 text-sm">
              End-to-end pipelines from data collection to deployment-ready models.
            </p>
          </div>

          <div>
            <h3 className="text-xl font-semibold mb-3">Multi-Modal AI</h3>
            <p className="text-gray-400 text-sm">
              Integrating vision, structured data, and LLMs for intelligent decision-making.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}