// Common types used throughout the application

export interface User {
  id: number;
  name: string;
}

export interface Workout {
  id: number;
  name: string;
  description: string;
  date: string;
}

export interface UserWorkout {
  id: number;
  date: string;
  notes: string;
  userId: number;
  workoutId: number;
}

export interface PeakForce {
  id: number;
  date: string;
  leftMax: number;
  rightMax: number;
  comment: string;
  tag: string;
  unit: string;
}

export interface HandType {
  id: number;
  name: string;
  description: string;
}

export interface UserPeakForce {
  id: number;
  userId: number;
  peakForceId: number;
  handTypeId: number;
}

// API response types
export interface ApiResponse<T> {
  data: T;
  status: number;
  statusText: string;
}

// Error types
export interface ApiError {
  message: string;
  status?: number;
  errors?: Record<string, string[]>;
}
