import { Terminal, Zap, Target, TrendingUp } from 'lucide-react';
import { about } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

const highlights = [
  { icon: Terminal, label: 'Languages', value: 'Java · C · JavaScript' },
  { icon: Zap, label: 'Focus', value: 'Backend & APIs' },
  { icon: Target, label: 'Goal', value: 'Growing as a Developer' },
  { icon: TrendingUp, label: 'Currently', value: 'CS @ Galgotias' },
];

export function About() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="about" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-cyan-500 text-sm">01.</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              About Me
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>

          {/* Content */}
          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            
            {/* Left Side */}
            <div>
              <p className="text-gray-700 dark:text-gray-300 text-lg leading-relaxed mb-6">
                {about}
              </p>

              {/* Status line */}
              <div className="font-mono text-sm text-gray-500 dark:text-gray-400 border-l-2 border-cyan-500 pl-4 py-1">
                <span className="text-cyan-500">const</span>{' '}
                <span className="text-blue-500 dark:text-blue-400">status</span>{' '}
                ={' '}
                <span className="text-amber-600 dark:text-amber-400">
                  "Learning, building, and improving every day"
                </span>;
              </div>
            </div>

            {/* Right Side (Highlights) */}
            <div className="grid grid-cols-2 gap-4">
              {highlights.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 transition-all group"
                >
                  <Icon className="w-5 h-5 text-cyan-500 mb-3 group-hover:scale-110 transition-transform" />

                  <p className="text-xs text-gray-500 dark:text-gray-400 font-semibold uppercase tracking-wide mb-1">
                    {label}
                  </p>

                  <p className="text-sm font-semibold text-gray-800 dark:text-gray-100">
                    {value}
                  </p>
                </div>
              ))}
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
