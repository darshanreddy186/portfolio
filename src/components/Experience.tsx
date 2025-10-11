import { Briefcase, Calendar, Users, Wrench } from 'lucide-react';

export default function Experience() {
  return (
    <section id="experience" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Experience
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-blue-200"></div>

            <div className="relative pl-20 pb-12">
              <div className="absolute left-4 top-0 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center shadow-lg">
                <Briefcase className="text-white" size={16} />
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="px-4 py-1 bg-blue-100 text-blue-700 rounded-full text-sm font-semibold">
                    Internship
                  </span>
                  <div className="flex items-center gap-2 text-slate-600">
                    <Calendar size={16} />
                    <span className="text-sm">June 2024 – July 2024</span>
                  </div>
                </div>

                <h3 className="text-2xl font-bold text-slate-900 mb-2">
                  Web Development Intern
                </h3>

                <p className="text-blue-600 font-semibold mb-6">
                  Research Center for Web Technologies, RV University
                </p>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-slate-700">
                      Developed responsive UI components using HTML, CSS, JavaScript, and React.js
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-slate-700 flex items-center gap-2 flex-wrap">
                      <Users size={16} className="inline text-blue-500" />
                      Collaborated with a 5-member team on internal tools, enhancing team productivity
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="w-2 h-2 bg-blue-500 rounded-full mt-2"></div>
                    <p className="text-slate-700 flex items-center gap-2 flex-wrap">
                      <Wrench size={16} className="inline text-blue-500" />
                      Gained hands-on experience in deploying front-end applications and integrating APIs
                    </p>
                  </div>
                </div>

                <div className="mt-6 flex flex-wrap gap-2">
                  {['React.js', 'JavaScript', 'HTML/CSS', 'API Integration', 'Team Collaboration'].map((skill) => (
                    <span key={skill} className="px-3 py-1 bg-slate-100 text-slate-700 rounded-lg text-sm">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
