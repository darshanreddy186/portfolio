import { Mail, Phone, MapPin, Linkedin, Github, Send } from 'lucide-react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16">
          Get In Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-4">Let's Connect</h3>
              <p className="text-slate-300 text-lg leading-relaxed">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision. Feel free to reach out!
              </p>
            </div>

            <div className="space-y-4">
              <a href="mailto:Darshanreddy186@gmail.com" className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <Mail size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Email</p>
                  <p className="font-semibold">Darshanreddy186@gmail.com</p>
                </div>
              </a>

              <a href="tel:+919019846609" className="flex items-center gap-4 p-4 bg-slate-800 hover:bg-slate-700 rounded-xl transition-all duration-300 transform hover:scale-105">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Phone size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Phone</p>
                  <p className="font-semibold">+91 9019846609</p>
                </div>
              </a>

              <div className="flex items-center gap-4 p-4 bg-slate-800 rounded-xl">
                <div className="p-3 bg-orange-500 rounded-lg">
                  <MapPin size={24} />
                </div>
                <div>
                  <p className="text-sm text-slate-400">Location</p>
                  <p className="font-semibold">Vijayanagar, Bengaluru</p>
                  <p className="text-sm text-slate-300">Karnataka, India</p>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <p className="text-slate-400 mb-4">Connect on social media:</p>
              <div className="flex gap-4">
                <a href="https://www.linkedin.com/in/darshan-b-259614279?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 hover:bg-blue-600 rounded-xl transition-all duration-300 transform hover:scale-110">
                  <Linkedin size={24} />
                </a>
                <a href="https://github.com/darshanreddy186" target="_blank" rel="noopener noreferrer" className="p-4 bg-slate-800 hover:bg-slate-600 rounded-xl transition-all duration-300 transform hover:scale-110">
                  <Github size={24} />
                </a>
              </div>
            </div>
          </div>

          <div className="bg-slate-800 rounded-2xl p-8 shadow-2xl">
            <h3 className="text-2xl font-bold mb-6">Send a Message</h3>
            <form className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-slate-300 mb-2">
                  Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-300 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  className="w-full px-4 py-3 bg-slate-700 border border-slate-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-white placeholder-slate-400 resize-none"
                  placeholder="Your message here..."
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 px-6 py-3 bg-blue-500 hover:bg-blue-600 rounded-lg transition-all duration-300 transform hover:scale-105 font-semibold"
              >
                <span>Send Message</span>
                <Send size={20} />
              </button>
            </form>
          </div>
        </div>
      </div>

      <footer className="mt-20 pt-8 border-t border-slate-700 text-center text-slate-400">
        <p>© 2025 Darshan B</p>
      </footer>
    </section>
  );
}
