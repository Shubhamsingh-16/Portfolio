import { skills } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const categoryColors: Record<string, string> = {
  Languages: 'bg-blue-50 dark:bg-blue-900/20 text-blue-700 dark:text-blue-300 border-blue-200 dark:border-blue-700/50',
  Frontend: 'bg-cyan-50 dark:bg-cyan-900/20 text-cyan-700 dark:text-cyan-300 border-cyan-200 dark:border-cyan-700/50',
  Backend: 'bg-emerald-50 dark:bg-emerald-900/20 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-700/50',
  Databases: 'bg-orange-50 dark:bg-orange-900/20 text-orange-700 dark:text-orange-300 border-orange-200 dark:border-orange-700/50',
  Tools: 'bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-gray-200 dark:border-gray-700',
  Concepts: 'bg-rose-50 dark:bg-rose-900/20 text-rose-700 dark:text-rose-300 border-rose-200 dark:border-rose-700/50',
};

export function Skills() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="skills" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div
          ref={ref}
          className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
        >
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-cyan-500 text-sm">02.</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">Skills</h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>
          <p className="text-gray-500 dark:text-gray-400 mt-2 mb-10 text-sm font-mono">
            // technologies I work with
          </p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Object.entries(skills).map(([category, items], i) => (
              <div
                key={category}
                className="p-6 bg-white dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-600 transition-all duration-300 hover:shadow-md hover:-translate-y-1"
                style={{ transitionDelay: `${i * 60}ms` }}
              >
                <h3 className="font-mono text-xs font-semibold uppercase tracking-widest text-gray-400 dark:text-gray-500 mb-4">
                  {category}
                </h3>
                <div className="flex flex-wrap gap-2">
                  {items.map((skill) => (
                    <span
                      key={skill}
                      className={`text-xs font-medium px-2.5 py-1 rounded-md border ${categoryColors[category]}`}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
