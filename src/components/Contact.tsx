export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-2xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-4">Get In Touch</h2>
        <p className="text-gray-400 mb-10 leading-relaxed">
          I'm currently open to software engineering opportunities. Whether you
          have a role in mind or just want to connect, feel free to reach out.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://www.linkedin.com/in/luis-sarmiento-40023b54/"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
          >
            LinkedIn
          </a>
          <a
            href="https://github.com/lsarm38"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            GitHub
          </a>
          <a
            href="mailto:lsarm38@gmail.com"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            Email Me
          </a>
        </div>
        <p className="text-gray-600 text-sm">
          © {new Date().getFullYear()} Luis Sarmiento. Built with React &
          Tailwind CSS.
        </p>
      </div>
    </section>
  );
}
