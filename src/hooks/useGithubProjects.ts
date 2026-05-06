import { useEffect, useState } from 'react';

export interface GithubProject {
  id: number;
  title: string;
  subtitle: string;
  github: string;
  live: string | null;
  tech: string[];
  stars: number;
  updatedAt: string;
  problem: string;
  solution: string;
  features: string[];
}

export function useGithubProjects() {
  const [projects, setProjects] = useState<GithubProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const res = await fetch(
          'https://api.github.com/users/Shubhamsingh-16/repos?sort=updated&per_page=100'
        );
        if (!res.ok) {
          throw new Error(`GitHub API responded with ${res.status}`);
        }

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        const repos: any[] = await res.json();

        const filtered = repos.filter(
          (r) =>
            r.fork === false &&
            r.description !== null &&
            r.description !== '' &&
            r.name !== 'Portfolio'
        );

        const mapped: GithubProject[] = filtered.map((repo) => {
          const desc: string = repo.description ?? '';
          const descLower = desc.toLowerCase();

          const rawTopics: string[] = Array.isArray(repo.topics) ? repo.topics : [];
          const tech: string[] =
            rawTopics.length > 0
              ? rawTopics
              : [repo.language].filter(Boolean);

          const features: string[] =
            rawTopics.length > 0
              ? rawTopics.slice(0, 4).map((t: string) => t.replace(/-/g, ' '))
              : ['Clean and functional implementation', 'Well-structured codebase'];

          return {
            id: repo.id,
            title: repo.name
              .replace(/[-_]/g, ' ')
              .replace(/\b\w/g, (c: string) => c.toUpperCase()),
            subtitle: desc,
            github: repo.html_url,
            live: repo.homepage || null,
            tech,
            stars: repo.stargazers_count ?? 0,
            updatedAt: repo.updated_at ?? '',
            problem: `No structured tool existed for ${descLower}.`,
            solution: `Built ${repo.name.replace(/[-_]/g, ' ')} to address this — ${descLower}.`,
            features,
          };
        });

        setProjects(mapped);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Unknown error');
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  return { projects, loading, error };
}
