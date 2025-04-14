import dayjs from 'dayjs';

/**
 * Format a date string to a human-readable format
 * @param dateString - The date string to format
 * @param format - The format to use (default: 'MMM D, YYYY')
 * @returns The formatted date string
 */
export const formatDate = (dateString: string, format = 'MMM D, YYYY'): string => {
  return dayjs(dateString).format(format);
};

/**
 * Format a date string to include time
 * @param dateString - The date string to format
 * @param format - The format to use (default: 'MMM D, YYYY h:mm A')
 * @returns The formatted date string with time
 */
export const formatDateTime = (dateString: string, format = 'MMM D, YYYY h:mm A'): string => {
  return dayjs(dateString).format(format);
};

/**
 * Check if a date is today
 * @param dateString - The date string to check
 * @returns True if the date is today, false otherwise
 */
export const isToday = (dateString: string): boolean => {
  return dayjs(dateString).isSame(dayjs(), 'day');
};

/**
 * Get the relative time from now (e.g., "2 days ago")
 * @param dateString - The date string to format
 * @returns The relative time string
 */
export const fromNow = (dateString: string): string => {
  const now = dayjs();
  const date = dayjs(dateString);
  
  const diffDays = now.diff(date, 'day');
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return formatDate(dateString);
};
