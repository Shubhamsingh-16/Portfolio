import { useEffect, useState } from 'react';

interface RepoMeta {
  repoName: string;
  stars: number;
  updatedAt: string;
}

export function useGithubMeta(repoNames: string[]) {
  const [meta, setMeta] = useState<Record<string, RepoMeta>>({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (repoNames.length === 0) {
      setLoading(false);
      return;
    }

    const fetchAll = async () => {
      const results = await Promise.all(
        repoNames.map(async (repoName) => {
          try {
            const res = await fetch(
              `https://api.github.com/repos/Shubhamsingh-16/${repoName}`
            );
            if (!res.ok) return null;
            const data = await res.json();
            return {
              repoName,
              stars: data.stargazers_count ?? 0,
              updatedAt: data.pushed_at ?? data.updated_at ?? '',
            } as RepoMeta;
          } catch {
            return null;
          }
        })
      );

      const map: Record<string, RepoMeta> = {};
      for (const item of results) {
        if (item) map[item.repoName] = item;
      }
      setMeta(map);
      setLoading(false);
    };

    fetchAll();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { meta, loading };
}
