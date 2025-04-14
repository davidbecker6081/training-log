import { PeakForce } from '../types';

/**
 * Format a peak force value with its unit
 * @param value - The peak force value
 * @param unit - The unit of measurement
 * @returns The formatted peak force string
 */
export const formatPeakForce = (value: number, unit: string): string => {
  return `${value.toFixed(1)} ${unit}`;
};

/**
 * Calculate the difference between left and right peak forces
 * @param leftMax - The left peak force value
 * @param rightMax - The right peak force value
 * @returns The absolute difference
 */
export const calculateDifference = (leftMax: number, rightMax: number): number => {
  return Math.abs(leftMax - rightMax);
};

/**
 * Calculate the percentage difference between left and right peak forces
 * @param leftMax - The left peak force value
 * @param rightMax - The right peak force value
 * @returns The percentage difference
 */
export const calculatePercentageDifference = (leftMax: number, rightMax: number): number => {
  const max = Math.max(leftMax, rightMax);
  const min = Math.min(leftMax, rightMax);
  return ((max - min) / max) * 100;
};

/**
 * Determine if there is a significant imbalance between left and right
 * @param leftMax - The left peak force value
 * @param rightMax - The right peak force value
 * @param threshold - The threshold percentage (default: 10)
 * @returns True if there is a significant imbalance, false otherwise
 */
export const hasSignificantImbalance = (
  leftMax: number, 
  rightMax: number, 
  threshold = 10
): boolean => {
  return calculatePercentageDifference(leftMax, rightMax) > threshold;
};

/**
 * Get the stronger side based on peak force values
 * @param leftMax - The left peak force value
 * @param rightMax - The right peak force value
 * @returns 'left', 'right', or 'equal'
 */
export const getStrongerSide = (leftMax: number, rightMax: number): 'left' | 'right' | 'equal' => {
  if (leftMax > rightMax) return 'left';
  if (rightMax > leftMax) return 'right';
  return 'equal';
};

/**
 * Sort peak forces by date (newest first)
 * @param peakForces - The array of peak forces to sort
 * @returns The sorted array
 */
export const sortPeakForcesByDate = (peakForces: PeakForce[]): PeakForce[] => {
  return [...peakForces].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};
