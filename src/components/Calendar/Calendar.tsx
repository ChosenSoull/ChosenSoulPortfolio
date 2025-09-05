import { useState, useEffect } from 'react';
import type { CalendarProps, ApiResponse, ContributionDay } from './types';

const groupDaysIntoWeeks = (days: ContributionDay[]): ContributionDay[][] => {
  const weeks: ContributionDay[][] = [];
  let currentWeek: ContributionDay[] = [];

  days.forEach((day) => {
    if (new Date(day.date).getDay() === 0 && currentWeek.length > 0) {
      weeks.push(currentWeek);
      currentWeek = [];
    }
    currentWeek.push(day);
  });
  if (currentWeek.length > 0) {
    weeks.push(currentWeek);
  }
  return weeks;
};

const getContributionColor = (count: number): string => {
  if (count > 20) return '#5A199B';
  if (count > 10) return '#7B2BBE';
  if (count > 5) return '#9D4EDD';
  if (count > 0) return '#C67DFF';
  return '#3A076D';

  /*
    --color-dark-purple-950: #11002C;
    --color-dark-purple-900: #240046;
    --color-dark-purple-850: #3A076D;
    --color-dark-purple-800: #5A199B;
    --color-dark-purple-750: #7B2BBE;
    --color-dark-purple-700: #9D4EDD;
    --color-dark-purple-650: #C67DFF;
    --color-dark-purple-600: #E0AAFE;
  */
};

export function Calendar({ username, year }: CalendarProps) {
  const [contributions, setContributions] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchContributions = async () => {
      try {
        const response = await fetch(`https://github-contributions-api.jogruber.de/v4/${username}?y=${year}`);
        
        if (!response.ok) {
          throw new Error('Failed to fetch contributions.');
        }
        
        const data: ApiResponse = await response.json();
        setContributions(data);
      } catch (err: unknown) {
        if (err instanceof Error) {
          setError(err.message);
        } else {
          setError('An unknown error occurred.');
        }
      } finally {
        setLoading(false);
      }
    };

    fetchContributions();
  }, [username, year]);

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!contributions || contributions.contributions.length === 0) {
    return <div className="p-4 text-center text-gray-400">No contributions found for this year.</div>;
  }
  
  const weeklyContributions = groupDaysIntoWeeks(contributions.contributions);

  return (
    <div className="flex-col inline-block">
      <div className="grid grid-flow-col gap-1 auto-cols-min p-2 bg-dark-purple-900 rounded-lg ">
        {weeklyContributions.map((week, index) => (
          <div key={index} className="flex flex-col gap-1">
            {week.map((day) => (
              <div
                key={day.date}
                className="w-3 h-3 rounded-sm cursor-pointer"
                style={{ backgroundColor: getContributionColor(day.count) }}
                title={`${day.count} contributions on ${day.date}`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Calendar;