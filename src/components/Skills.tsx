import { Code2, Database, Cloud, Wrench } from 'lucide-react';

export default function Skills() {
  const skillCategories = [
    {
      title: 'Languages',
      icon: Code2,
      color: 'from-blue-500 to-cyan-500',
      skills: [
        { name: 'C', level: 90 },
        { name: 'Java', level: 85 },
        { name: 'Python', level: 80 },
        { name: 'JavaScript', level: 85 },
        { name: 'SQL', level: 75 }
      ]
    },
    {
      title: 'Web Development',
      icon: Code2,
      color: 'from-green-500 to-emerald-500',
      skills: [
        { name: 'HTML/CSS', level: 90 },
        { name: 'React.js', level: 85 },
        { name: 'Node.js', level: 80 },
        { name: 'Express.js', level: 80 }
      ]
    },
    {
      title: 'Databases',
      icon: Database,
      color: 'from-orange-500 to-amber-500',
      skills: [
        { name: 'MongoDB', level: 80 },
        { name: 'MySQL', level: 75 },
        { name: 'Supabase', level: 75 }
      ]
    },
    {
      title: 'Tools & Cloud',
      icon: Cloud,
      color: 'from-purple-500 to-pink-500',
      skills: [
        { name: 'Git & GitHub', level: 85 },
        { name: 'AWS Services', level: 70 },
        { name: 'Canva', level: 80 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-slate-50">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Skills & Technologies
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <div key={category.title} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color}`}>
                    <IconComponent className="text-white" size={24} />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    {category.title}
                  </h3>
                </div>

                <div className="space-y-4">
                  {category.skills.map((skill) => (
                    <div key={skill.name}>
                      <div className="flex justify-between mb-2">
                        <span className="text-slate-700 font-medium">{skill.name}</span>
                        <span className="text-slate-500 text-sm">{skill.level}%</span>
                      </div>
                      <div className="h-2 bg-slate-200 rounded-full overflow-hidden">
                        <div
                          className={`h-full bg-gradient-to-r ${category.color} rounded-full transition-all duration-1000 ease-out`}
                          style={{ width: `${skill.level}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-12 max-w-4xl mx-auto bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-4">
            <Wrench className="text-blue-600" size={28} />
            <h3 className="text-2xl font-bold text-slate-900">Currently Learning</h3>
          </div>
          <p className="text-slate-700 mb-4">
            Enrolled in <strong>Cohort 3.0 (100xDevs)</strong> by Harkirat Singh - An intensive program covering:
          </p>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              'Advanced Full Stack Development',
              'System Design & Architecture',
              'DevOps & Deployment',
              'Modern Web Technologies',
              'Database Optimization',
              'Best Coding Practices'
            ].map((topic) => (
              <div key={topic} className="flex items-center gap-3">
                <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                <span className="text-slate-700">{topic}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
