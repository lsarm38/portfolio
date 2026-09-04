export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl font-bold mb-12 text-center">About Me</h2>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-4 text-gray-400 leading-relaxed">
            <p>
              I'm a full-stack software developer currently studying Computer
              Science at Metropolitan State University (expected graduation
              2028). I bring 3 years of professional experience building and
              maintaining production software in the pharmaceutical industry.
            </p>
            <p>
              At IHS Pharmacy, I developed C# APIs powering systems used by
              correctional facilities, built React and TypeScript frontends, and
              worked with Azure and the ELK stack for monitoring and audit
              logging. I'm comfortable across the full stack, from SQL query
              optimization to front-end UI development.
            </p>
            <p>
              Outside of web development I'm currently building two indie games
              in Unity — a rogue-lite survivor game and a 16-bit SNES-style RPG
              — which lets me apply my C# skills in a completely different
              domain.
            </p>
            <p>
              I'm currently looking for software engineering roles where I can
              keep growing and contribute to meaningful products.
            </p>
          </div>
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-4">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Degree</span>
              <span className="text-white">B.S. Computer Science</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">University</span>
              <span className="text-white">Metropolitan State University</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Graduation</span>
              <span className="text-white">2028</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Experience</span>
              <span className="text-white">3 Years Professional</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Location</span>
              <span className="text-white">Minneapolis, MN</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Status</span>
              <span className="text-green-400">Open to opportunities</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
