export default function Contact() {
  return (
    <section id="contact" className="bg-black text-white py-20 px-6 border-t border-gray-800">
      <div className="max-w-4xl mx-auto text-center">

        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Get in Touch
        </h2>

        <p className="text-gray-400 mb-10">
          Interested in collaborating or discussing AI systems? Feel free to reach out.
        </p>

        <div className="flex flex-col md:flex-row justify-center gap-4">

          <a
            href="https://github.com/Jordan-Karangala"
            target="_blank"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
          >
            GitHub
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            className="px-6 py-3 bg-white text-black rounded-xl font-medium hover:bg-gray-200 transition"
          >
            Download Resume
          </a>

          <a
            href="mailto:stevenson2987@email.com"
            className="px-6 py-3 border border-gray-600 rounded-xl hover:border-white transition"
          >
            Email Me
          </a>

        </div>

      </div>
    </section>
  );
}