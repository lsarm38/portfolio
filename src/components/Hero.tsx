export default function Hero() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 pt-20">
      <div className="max-w-3xl text-center">
        <p className="text-blue-400 font-medium tracking-widest text-sm uppercase mb-4">
          Full-Stack Software Developer
        </p>
        <h1 className="text-6xl font-bold tracking-tight mb-6 leading-tight">
          Hi, I'm{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">
            Luis Sarmiento
          </span>
        </h1>
        <p className="text-gray-400 text-xl leading-relaxed mb-10 max-w-2xl mx-auto">
          Computer Science student at Metropolitan State University with 3 years
          of professional full-stack experience building pharmaceutical systems,
          REST APIs, and React applications.
        </p>
        <div className="flex gap-4 justify-center">
          <a
            href="#projects"
            className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-medium rounded-lg transition-colors"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-3 border border-gray-700 hover:border-gray-500 text-gray-300 hover:text-white font-medium rounded-lg transition-colors"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
