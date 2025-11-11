/*
 / My portfolio site
 / Copyright (C) 2025  ChosenSoul
 /
 / This program is free software: you can redistribute it and/or modify
 / it under the terms of the GNU General Public License as published by
 / the Free Software Foundation, either version 3 of the License, or
 / (at your option) any later version.
 /
 / This program is distributed in the hope that it will be useful,
 / but WITHOUT ANY WARRANTY; without even the implied warranty of
 / MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 / GNU General Public License for more details.
 /
 / You should have received a copy of the GNU General Public License
 / along with this program.  If not, see <https://www.gnu.org/licenses/>.
*/
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