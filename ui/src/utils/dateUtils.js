import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';

// Extend dayjs with UTC plugin
dayjs.extend(utc);

/**
 * Format a date string to a human-readable format
 * @param dateString - The date string to format
 * @param format - The format to use (default: 'MMM D, YYYY')
 * @returns The formatted date string
 */
export const formatDate = (dateString, format = 'MMM D, YYYY') => {
  return dayjs.utc(dateString).local().format(format);
};

/**
 * Format a date string to include time
 * @param dateString - The date string to format
 * @param format - The format to use (default: 'MMM D, YYYY h:mm A')
 * @returns The formatted date string with time
 */
export const formatDateTime = (dateString, format = 'MMM D, YYYY h:mm A') => {
  return dayjs.utc(dateString).local().format(format);
};

/**
 * Check if a date is today
 * @param dateString - The date string to check
 * @returns True if the date is today, false otherwise
 */
export const isToday = (dateString) => {
  return dayjs.utc(dateString).local().isSame(dayjs(), 'day');
};

/**
 * Get the relative time from now (e.g., "2 days ago")
 * @param dateString - The date string to format
 * @returns The relative time string
 */
export const fromNow = (dateString) => {
  const now = dayjs();
  const date = dayjs.utc(dateString).local();
  
  const diffDays = now.diff(date, 'day');
  
  if (diffDays === 0) return 'Today';
  if (diffDays === 1) return 'Yesterday';
  if (diffDays < 7) return `${diffDays} days ago`;
  
  return formatDate(dateString);
};
