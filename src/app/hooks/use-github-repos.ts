import { useState, useEffect } from 'react'
import axios from 'axios'

interface GitHubRepo {
  id: number
  name: string
  description: string | null
  html_url: string
  homepage: string | null
  language: string | null
  topics: string[]
  stargazers_count: number
  forks_count: number
  created_at: string
  updated_at: string
  pushed_at: string
}

interface UseGitHubReposReturn {
  repos: GitHubRepo[]
  loading: boolean
  error: string | null
}

export function useGitHubRepos(username: string): UseGitHubReposReturn {
  const [repos, setRepos] = useState<GitHubRepo[]>([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        setLoading(true)
        setError(null)

        const response = await axios.get(
          `https://api.github.com/users/${username}/repos`,
          {
            params: {
              sort: 'updated',
              per_page: 100,
              type: 'owner'
            }
          }
        )

        // Filter out forks and sort by stars/activity
        const filteredRepos = response.data
          .filter((repo: GitHubRepo) => !repo.name.includes('fork'))
          .sort((a: GitHubRepo, b: GitHubRepo) => {
            // Sort by stars first, then by last updated
            if (b.stargazers_count !== a.stargazers_count) {
              return b.stargazers_count - a.stargazers_count
            }
            return (
              new Date(b.pushed_at).getTime() - new Date(a.pushed_at).getTime()
            )
          })

        setRepos(filteredRepos)
      } catch (err) {
        setError('Failed to fetch repositories')
        console.error('Error fetching GitHub repos:', err)
      } finally {
        setLoading(false)
      }
    }

    if (username) {
      fetchRepos()
    }
  }, [username])

  return { repos, loading, error }
}
