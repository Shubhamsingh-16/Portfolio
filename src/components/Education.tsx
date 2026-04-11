import { GraduationCap, Award, ExternalLink } from 'lucide-react';
import { education, certifications, courses } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';

export function Education() {
  const { ref, visible } = useScrollAnimation();

  return (
    <section id="education" className="py-24 bg-white dark:bg-gray-900">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
        >
          
          {/* Section Heading */}
          <div className="flex items-center gap-3 mb-3">
            <span className="font-mono text-cyan-500 text-sm">04.</span>
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
              Education
            </h2>
            <div className="flex-1 h-px bg-gray-200 dark:bg-gray-700 ml-2" />
          </div>

          <div className="grid lg:grid-cols-2 gap-12 mt-10">
            
            {/* LEFT SIDE */}
            <div>
              
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <GraduationCap className="w-4 h-4" />
                Academic Background
              </h3>

              <div className="space-y-5">
                {education.map((edu) => (
                  <div
                    key={edu.institution}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 transition-all"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                          {edu.institution}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {edu.degree}
                        </p>
                      </div>

                      <span className="text-xs font-mono text-gray-400 dark:text-gray-500 text-right flex-shrink-0">
                        {edu.period}
                      </span>
                    </div>

                    <div className="mt-3 flex items-center gap-3">
                      <span className="text-xs font-semibold text-cyan-600 dark:text-cyan-400 font-mono">
                        {edu.score}
                      </span>

                      <span className="text-xs text-gray-500 bg-gray-200 dark:bg-gray-700 px-2 py-0.5 rounded">
                        {edu.type}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Courses */}
              <div className="mt-8">
                <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-4">
                  Relevant Courses
                </h3>

                <div className="flex flex-wrap gap-2">
                  {courses.map((c) => (
                    <span
                      key={c}
                      className="text-xs px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 transition-all"
                    >
                      {c}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT SIDE */}
            <div>
              
              <h3 className="text-xs font-mono font-semibold uppercase tracking-widest text-gray-500 dark:text-gray-400 mb-6 flex items-center gap-2">
                <Award className="w-4 h-4" />
                Certifications
              </h3>

              <div className="space-y-4">
                {certifications.map((cert) => (
                  <div
                    key={cert.title}
                    className="p-5 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-cyan-400 dark:hover:border-cyan-500 hover:shadow-md hover:shadow-cyan-500/10 transition-all group"
                  >
                    <div className="flex items-start justify-between gap-3">
                      
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 dark:text-white text-base">
                          {cert.title}
                        </h4>

                        <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">
                          {cert.issuer}
                        </p>
                      </div>

                      <div className="flex items-center gap-2 flex-shrink-0">
                        <span className="text-xs font-mono text-gray-400">
                          {cert.date}
                        </span>

                        <a
                          href={cert.url}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg text-gray-400 hover:text-cyan-500 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
