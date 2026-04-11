import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

function ProjectCard({ project, index }: { project: typeof projects[0]; index: number }) {
  const { ref, visible } = useScrollAnimation(0.1);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">
        
        <div className={`h-1.5 w-full bg-gradient-to-r ${project.color}`} />

        <div className="p-6 flex flex-col flex-1">
          
          {/* Title + Links */}
          <div className="flex items-start justify-between mb-4">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-xs font-mono text-gray-500 dark:text-gray-400 mt-0.5">
                {project.subtitle}
              </p>
            </div>

            <div className="flex gap-2 flex-shrink-0 ml-3">
              {project.github !== project.live && (
                <a
                  href={project.github}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-gray-700 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-all"
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              )}
              <a
                href={project.live}
                target="_blank"
                rel="noreferrer"
                className="p-2 rounded-lg text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
                aria-label="Live demo"
              >
                <ExternalLink className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Problem */}
          <div className="mb-4 space-y-2">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
              Problem
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.problem}
            </p>
          </div>

          {/* Solution */}
          <div className="mb-4 space-y-2">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
              Solution
            </div>
            <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
              {project.solution}
            </p>
          </div>

          {/* Features */}
          <div className="mb-4 space-y-2 flex-1">
            <div className="text-xs font-mono text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide">
              Key Features
            </div>
            <ul className="space-y-1.5">
              {project.features.map((f) => (
                <li key={f} className="flex items-start gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <CheckCircle2 className="w-4 h-4 text-cyan-500 mt-0.5 flex-shrink-0" />
                  {f}
                </li>
              ))}
            </ul>
          </div>

          {/* Tech Stack */}
          <div className="pt-4 border-t border-gray-100 dark:border-gray-800">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="text-xs font-mono px-2 py-1 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}

export function Projects() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-cyan-500 text-sm">03.</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Projects
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>

          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-10 text-sm font-mono">
            // things I've built
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.title} project={project} index={i} />
          ))}
        </div>

      </div>
    </section>
  );
}
