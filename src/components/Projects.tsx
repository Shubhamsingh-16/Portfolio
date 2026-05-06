import { ExternalLink, Github, CheckCircle2 } from 'lucide-react';
import { projects as fallbackProjects } from '../data/portfolio';
import { useScrollAnimation } from '../hooks/useScrollAnimation';
import { useGithubProjects, GithubProject } from '../hooks/useGithubProjects';

// ─── Helpers ────────────────────────────────────────────────────────────────

const CARD_COLORS = [
  'from-cyan-500 to-blue-500',
  'from-purple-500 to-pink-500',
  'from-orange-500 to-amber-500',
];

function timeAgo(dateStr: string): string {
  const diff = Date.now() - new Date(dateStr).getTime();
  const days = Math.floor(diff / 86400000);
  if (days < 30) return `${days}d ago`;
  const months = Math.floor(days / 30);
  if (months < 12) return `${months}mo ago`;
  return `${Math.floor(months / 12)}y ago`;
}

// ─── Skeleton Card ───────────────────────────────────────────────────────────

function SkeletonCard() {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 overflow-hidden h-full flex flex-col animate-pulse">
      <div className="h-1.5 w-full bg-gray-200 dark:bg-gray-700" />
      <div className="p-6 flex flex-col flex-1 gap-4">
        <div className="flex items-start justify-between">
          <div className="space-y-2 flex-1">
            <div className="h-6 bg-gray-200 dark:bg-gray-700 rounded w-3/4" />
            <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/2" />
          </div>
          <div className="flex gap-2 ml-3">
            <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg" />
            <div className="w-9 h-9 bg-gray-200 dark:bg-gray-700 rounded-lg" />
          </div>
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-5/6" />
        </div>
        <div className="space-y-2">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/4" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-4/5" />
        </div>
        <div className="space-y-2 flex-1">
          <div className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-1/3" />
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-3 bg-gray-200 dark:bg-gray-700 rounded w-full" />
          ))}
        </div>
        <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex gap-2">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-6 w-14 bg-gray-200 dark:bg-gray-700 rounded-md" />
          ))}
        </div>
      </div>
    </div>
  );
}

// ─── Project Card ────────────────────────────────────────────────────────────

interface CardProject {
  title: string;
  subtitle: string;
  github: string;
  live: string | null;
  tech: string[];
  stars?: number;
  updatedAt?: string;
  problem: string;
  solution: string;
  features: string[];
  color?: string;
}

function ProjectCard({
  project,
  index,
}: {
  project: CardProject;
  index: number;
}) {
  const { ref, visible } = useScrollAnimation(0.1);
  const color = project.color ?? CARD_COLORS[index % CARD_COLORS.length];
  const showStars = (project.stars ?? 0) > 0;
  const showUpdated = !!project.updatedAt;

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${
        visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      }`}
      style={{ transitionDelay: `${index * 120}ms` }}
    >
      <div className="group bg-white dark:bg-gray-900 rounded-2xl border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600 overflow-hidden hover:shadow-xl hover:shadow-cyan-500/10 transition-all duration-300 hover:-translate-y-2 h-full flex flex-col">

        {/* Colored top border */}
        <div className={`h-1.5 w-full bg-gradient-to-r ${color}`} />

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
              {project.github && project.github !== project.live && (
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
              {project.live && (
                <a
                  href={project.live}
                  target="_blank"
                  rel="noreferrer"
                  className="p-2 rounded-lg text-gray-400 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-900/20 transition-all"
                  aria-label="Live demo"
                >
                  <ExternalLink className="w-5 h-5" />
                </a>
              )}
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

          {/* Key Features */}
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

          {/* Tech Stack + GitHub meta */}
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

            {(showStars || showUpdated) && (
              <div className="flex items-center gap-3 mt-2">
                {showStars && (
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    ⭐ {project.stars}
                  </span>
                )}
                {showUpdated && (
                  <span className="text-xs text-gray-500 dark:text-gray-500">
                    🕒 {timeAgo(project.updatedAt!)}
                  </span>
                )}
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}

// ─── Section ─────────────────────────────────────────────────────────────────

export function Projects() {
  const { ref, visible } = useScrollAnimation();
  const { projects: githubProjects, loading, error } = useGithubProjects();

  // Normalise fallback projects to the shared CardProject shape
  const fallback: CardProject[] = fallbackProjects.map((p) => ({
    title: p.title,
    subtitle: p.subtitle,
    github: p.github,
    live: p.live,
    tech: p.tech,
    problem: p.problem,
    solution: p.solution,
    features: p.features,
    color: p.color,
  }));

  // Use live data if we got any, otherwise fall back to hardcoded
  const displayProjects: CardProject[] =
    !loading && !error && githubProjects.length > 0 ? githubProjects : fallback;

  return (
    <section id="projects" className="py-24 bg-gray-50 dark:bg-gray-950">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        <div
          ref={ref}
          className={`transition-all duration-700 ${
            visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
          }`}
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
          {loading
            ? [0, 1, 2].map((n) => <SkeletonCard key={n} />)
            : displayProjects.map((project, i) => (
                <ProjectCard key={project.title + i} project={project} index={i} />
              ))}
        </div>

      </div>
    </section>
  );
}
