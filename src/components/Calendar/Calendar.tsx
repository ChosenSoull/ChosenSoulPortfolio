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

/*
 / Требуеться полный рефакторинг этого файла
 / Спасибо за внимание
*/

import { useState, useEffect, useMemo } from 'react';
import type { CalendarProps, ApiResponse, ContributionDay } from './types';
import { useLocale } from '@locale/locale';

// TODO: Вынести в отдельный компонент
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

// ------------------------------------

const getContributionColor = (count: number): string => {
  if (count > 20) return '#E0AAFE';
  if (count > 10) return '#C67DFF';
  if (count > 5) return '#9D4EDD';
  if (count > 0) return '#7B2BBE';
  return '#3A076D';
};

const getTextColor = (count: number): string => {
  if (count > 10) return '#4c0891ff';
  if (count > 0) return '#fed8ffff';
  return '#E0AAFE';
};

export function Calendar({ username, year }: CalendarProps) {
  const [contributions, setContributions] = useState<ApiResponse | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [ t ] = useLocale();
  // TODO: Вынести в отдельный компонент
  const [currentMonth, setCurrentMonth] = useState<number>(new Date().getMonth());
  const [_, setSelectedDay] = useState<ContributionDay | null>(null);
  // ------------------------------------
  const MONTHS = [
      t('months.jan'),
      t('months.feb'),
      t('months.mar'),
      t('months.apr'),
      t('months.may'),
      t('months.jun'),
      t('months.jul'),
      t('months.aug'),
      t('months.sep'),
      t('months.oct'),
      t('months.nov'),
      t('months.dec')
  ];

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

  // TODO: Вынести в отдельный компонент
  const monthlyContributions = useMemo(() => {
    if (!contributions) return new Array(12).fill([]);
    
    const grouped: ContributionDay[][] = new Array(12).fill(0).map(() => []);
    
    contributions.contributions.forEach(day => {
      const monthIndex = new Date(day.date).getMonth();
      grouped[monthIndex].push(day);
    });
    
    return grouped;
  }, [contributions]);
  // ------------------------------------

  if (loading) {
    return <div className="p-4 text-center text-gray-500">Loading...</div>;
  }

  if (error) {
    return <div className="p-4 text-center text-red-500">Error: {error}</div>;
  }

  if (!contributions || contributions.contributions.length === 0) {
    return <div className="p-4 text-center text-gray-400">No contributions found for this year.</div>;
  }
  
  // TODO: Вынести в отдельный компонент
  const currentMonthDays = monthlyContributions[currentMonth];
  // ------------------------------------

  return (
    <div className="p-12">
      {/* TODO: Вынести в отдельный компонент */}
      <div className="flex justify-between items-center w-full">
        <p className="text-dark-purple-600 text-3xl">{t("Year")}</p>
        <p className="text-dark-purple-600 text-3xl">{year}</p>
      </div>
      {/* ------------------------------------ */}
    
      {/* TODO: Вынести в отдельный компонент */}
      <Box className="bg-dark-purple-950 " sx={{ width: '100%', bgcolor: 'background.paper', mb: 3 }}>
        <Tabs
          value={currentMonth}
          onChange={(_, newValue) => {
            setCurrentMonth(newValue);
            setSelectedDay(null);
          }}
          variant="scrollable"
          scrollButtons="auto"
          aria-label="month tabs"
          sx={{
            '& .MuiTabs-scrollButtons': {
              color: '#E0AAFE', 
            },

            '& .MuiTabs-indicator': {
              backgroundColor: '#E0AAFE',
              height: 3,
            },
          }}
        >
          {MONTHS.map((monthName, index) => (
            <Tab 
              key={monthName} 
              label={monthName} 
              value={index} 
              className={currentMonth === index ? 'text-[#C67DFF]' : 'text-gray-400'}
            />
          ))}
        </Tabs>
      </Box>
      {/* ------------------------------------ */}

      <div className="p-2 bg-dark-purple-900 rounded-2xl lg:w-[60%] lg:mx-auto"> 
            <div className="grid grid-cols-7 gap-1 text-center text-xl text-gray-400 mb-1">
                <div className="text-[min(3vw,24px)]">{t("days.sun")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.mon")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.tue")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.wed")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.thu")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.fri")}</div>
                <div className="text-[min(3vw,24px)]">{t("days.sat")}</div>
            </div>

            <div className="grid grid-cols-7 gap-1">
                {(() => {
                    if (currentMonthDays.length === 0) return null;
                    
                    const firstDayOfWeek = new Date(currentMonthDays[0].date).getDay();
                    
                    return Array.from({ length: firstDayOfWeek }).map((_, i) => (
                        <div key={`empty-${i}`} className="w-5 h-5"></div>
                    ));
                })()}

                {currentMonthDays.map((day: ContributionDay) => (
                    <div key={day.date} className="flex justify-center items-center w-full h-full aspect-square"> 
                        <div
                            className="w-[75%] h-[75%] rounded-lg cursor-pointer transition-transform duration-100 hover:scale-110
                                      flex justify-center items-center text-xs font-bold" 
                            style={{ 
                                backgroundColor: getContributionColor(day.count),
                                color: getTextColor(day.count)
                            }}
                            title={`${day.count} contributions on ${day.date}`}
                        >
                            {new Date(day.date).getDate()}
                        </div>
                    </div>
                ))}
            </div>
      </div>
    </div>
  );
}

export default Calendar;