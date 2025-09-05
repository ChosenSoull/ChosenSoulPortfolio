import { useState, useEffect } from "react";

interface GithubUser {
  name: string;
  avatarUrl: string;
  login: string;
}

const getGithubUserInfo = (username: string) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  
  useEffect(() => {
    const CACHE_KEY = `github-user-${username}`;
    const ONE_DAY_IN_MS = 24 * 60 * 60 * 1000;

    const fetchUser = async () => {
      const cachedData = localStorage.getItem(CACHE_KEY);

      if (cachedData) {
        try {
          const { data, timestamp } = JSON.parse(cachedData);
          const now = Date.now();

          if (now - timestamp < ONE_DAY_IN_MS) {
            setUser(data);
            return;
          } else {
            localStorage.removeItem(CACHE_KEY);
          }
        } catch (e) {
          console.error("Error parsing cached data:", e);
          localStorage.removeItem(CACHE_KEY);
        }
      }

      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          console.error(`GitHub API error: ${response.statusText}`);
          setUser(null);
          return;
        }

        const data = await response.json();
        
        const userData: GithubUser = {
          name: data.name,
          avatarUrl: data.avatar_url,
          login: data.login,
        };

        localStorage.setItem(
          CACHE_KEY,
          JSON.stringify({ data: userData, timestamp: Date.now() })
        );
        setUser(userData);

      } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('An error has occurred:', e.message);
        } else {
            console.error('An unknown error occurred.');
        }
        setUser(null);
      }
    };

    if (username) {
      fetchUser();
    }
  }, [username]);

  return { user };
};

export default getGithubUserInfo;