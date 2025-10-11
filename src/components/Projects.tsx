import { ExternalLink, ShoppingCart, Calendar, Database } from 'lucide-react';

export default function Projects() {
  const projects = [
    {
      title: 'Campus Connect',
      subtitle: 'Event Management Web App',
      description: 'A comprehensive MERN stack platform enabling students to create, register, and track campus events with advanced features.',
      icon: Calendar,
      color: 'from-blue-500 to-cyan-500',
      features: [
        'Event creation and registration system',
        'Email reminders and notifications',
        'Event feedback collection',
        'Admin dashboard with analytics',
        'Clerk authentication integration',
        'MongoDB & Supabase for data storage'
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Supabase', 'Clerk']
    },
    {
      title: 'Grocery Store Web App',
      subtitle: 'E-commerce Platform',
      description: 'A clean and intuitive e-commerce-style grocery store application with shopping cart functionality.',
      icon: ShoppingCart,
      color: 'from-green-500 to-emerald-500',
      features: [
        'Product browsing interface',
        'Shopping cart management',
        'Add/remove items functionality',
        'Checkout simulation',
        'Responsive design',
        'Clean UI/UX'
      ],
      tech: ['HTML', 'CSS', 'JavaScript']
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 text-slate-900">
          Featured Projects
        </h2>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {projects.map((project) => {
            const IconComponent = project.icon;
            return (
              <div key={project.title} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1">
                <div className={`h-2 bg-gradient-to-r ${project.color}`}></div>

                <div className="p-8">
                  <div className={`inline-flex p-3 rounded-xl bg-gradient-to-br ${project.color} mb-4`}>
                    <IconComponent className="text-white" size={28} />
                  </div>

                  <h3 className="text-2xl font-bold text-slate-900 mb-2">
                    {project.title}
                  </h3>

                  <p className="text-blue-600 font-semibold mb-4">
                    {project.subtitle}
                  </p>

                  <p className="text-slate-700 mb-6">
                    {project.description}
                  </p>

                  <div className="space-y-3 mb-6">
                    {project.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start gap-2">
                        <div className="w-1.5 h-1.5 bg-blue-500 rounded-full mt-2"></div>
                        <span className="text-slate-600 text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-3 py-1 bg-white text-slate-700 rounded-lg text-sm font-medium shadow-sm">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button className="flex items-center gap-2 text-blue-600 hover:text-blue-700 font-semibold transition-colors duration-300">
                    <span>View Project</span>
                    <ExternalLink size={16} />
                  </button>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
