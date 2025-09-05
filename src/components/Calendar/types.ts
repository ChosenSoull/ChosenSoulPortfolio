export type ContributionDay = {
  date: string;
  count: number;
  level: number;
};

export type ApiResponse = {
  total: {
    [year: string]: number;
  };
  contributions: ContributionDay[];
};

export type CalendarProps = {
  username: string;
  year: number;
};