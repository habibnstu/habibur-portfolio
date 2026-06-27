"use client";

import { useEffect, useState } from "react";

interface Repo {
  id: number;
  name: string;
  html_url: string;
  description: string;
  language: string;
  stargazers_count: number;
}

export default function GitHubProjects() {
  const [repos, setRepos] = useState<Repo[]>([]);

  useEffect(() => {
    fetch("https://api.github.com/users/habibnstu/repos")
      .then((res) => res.json())
      .then((data) => setRepos(data.slice(0, 6)));
  }, []);

  return (
    <section className="max-w-6xl mx-auto py-20 px-6">
      <h2 className="text-3xl font-bold mb-10">GitHub Projects</h2>

      <div className="grid md:grid-cols-3 gap-6">
        {repos.map((repo) => (
          <a
            key={repo.id}
            href={repo.html_url}
            target="_blank"
            className="p-6 border rounded-xl bg-white dark:bg-gray-900 hover:scale-105 transition block"
          >
            <h3 className="font-semibold">{repo.name}</h3>

            <p className="text-sm text-gray-500 mt-2">
              {repo.description || "No description"}
            </p>

            <div className="mt-4 text-xs text-indigo-600">
              ⭐ {repo.stargazers_count} • {repo.language}
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}