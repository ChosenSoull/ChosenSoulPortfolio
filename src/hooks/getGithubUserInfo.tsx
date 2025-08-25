import { useState, useEffect } from "react";

interface GithubUser {
  name: string;
  avatarUrl: string;
  login: string;
}

const getGithubUserInfo = (username: string) => {
  const [user, setUser] = useState<GithubUser | null>(null);
  
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch(`https://api.github.com/users/${username}`);
        
        if (!response.ok) {
          console.error(`GitHub API error: ${response.statusText}`);
          setUser(null);
          return;
        }

        const data = await response.json();
        
        setUser({
          name: data.name,
          avatarUrl: data.avatar_url,
          login: data.login,
        });
      } catch (e: unknown) {
        if (e instanceof Error) {
            console.error('An error occurred:', e.message);
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