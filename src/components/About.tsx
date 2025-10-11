import { GraduationCap, Award, Music, Camera } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-blue-50 to-cyan-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-blue-500 rounded-lg">
                  <GraduationCap className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Education</h3>
                  <p className="text-slate-700 font-semibold">B.Tech in Computer Science Engineering</p>
                  <p className="text-slate-600">RV University, Bangalore</p>
                  <p className="text-slate-500 text-sm mt-1">3rd Year Student</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-green-50 to-emerald-50 p-8 rounded-2xl shadow-lg">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-green-500 rounded-lg">
                  <Award className="text-white" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Learning</h3>
                  <p className="text-slate-700 font-semibold">Cohort 3.0 - 100xDevs</p>
                  <p className="text-slate-600">by Harkirat Singh</p>
                  <p className="text-slate-500 text-sm mt-2">Intensive full-stack development program covering modern web technologies</p>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-gradient-to-br from-orange-50 to-amber-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Achievements</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-slate-700">Active participant in university hackathons and technical events</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-slate-700">Earned 3 stars for C programming on HackerRank</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-2 h-2 bg-orange-500 rounded-full mt-2"></div>
                  <span className="text-slate-700">Participated in Republic Day event at RV University</span>
                </li>
              </ul>
            </div>

            <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-2xl shadow-lg">
              <h3 className="text-xl font-bold text-slate-900 mb-4">Hobbies & Interests</h3>
              <div className="grid grid-cols-2 gap-4">
                <div className="flex items-center gap-3">
                  <Camera className="text-purple-500" size={20} />
                  <span className="text-slate-700">Photography</span>
                </div>
                <div className="flex items-center gap-3">
                  <Music className="text-purple-500" size={20} />
                  <span className="text-slate-700">Guitar</span>
                </div>
                <div className="flex items-center gap-3">
                  <Music className="text-purple-500" size={20} />
                  <span className="text-slate-700">Music</span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-2xl">🎬</span>
                  <span className="text-slate-700">Movies</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
