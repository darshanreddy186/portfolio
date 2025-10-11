import { Github, Linkedin, Mail, MapPin } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0zNiAxOGMzLjMxNCAwIDYgMi42ODYgNiA2cy0yLjY4NiA2LTYgNi02LTIuNjg2LTYtNiAyLjY4Ni02IDYtNnoiIHN0cm9rZT0icmdiYSgyNTUsMjU1LDI1NSwwLjAzKSIvPjwvZz48L3N2Zz4=')] opacity-40"></div>

<div className="container mx-auto px-7 relative z-10">
  <div className="max-w-4xl mx-auto text-center">
    <div className="mb-8 inline-block">
      <div className="w-52 h-52 rounded-full overflow-hidden shadow-2xl border-4 border-cyan-400 mx-auto">
        <img
          src="src\images\darshan.jpg"
          alt="Darshan Reddy"
          className="w-full h-full object-cover"
        />
      </div>
    </div>
  


          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-cyan-400">
            Darshan B
          </h1>

          <p className="text-xl md:text-2xl text-slate-300 mb-6">
            Full Stack Developer & CS Engineering Student
          </p>

          <p className="text-lg text-slate-400 mb-8 max-w-2xl mx-auto">
            3rd Year B.Tech Student at RV University, Bangalore. Passionate about building web applications with modern technologies and creating impactful digital experiences.
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8">
            <a href="mailto:Darshanreddy186@gmail.com" className="flex items-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Mail size={20} />
              <span>Get in Touch</span>
            </a>
            <a href="https://www.linkedin.com/in/darshan-b" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Linkedin size={20} />
              <span>LinkedIn</span>
            </a>
            <a href="https://github.com/darshanb" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Github size={20} />
              <span>GitHub</span>
            </a>
          </div>

          <div className="flex items-center justify-center gap-2 text-slate-400">
            <MapPin size={18} />
            <span>Vijayanagar, Bengaluru, India</span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <svg className="w-6 h-6 text-slate-400" fill="none" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" stroke="currentColor">
          <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
        </svg>
      </div>
    </section>
  );
}
