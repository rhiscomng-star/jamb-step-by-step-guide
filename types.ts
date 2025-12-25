
import React from 'react';

export enum StepId {
  PROFILE_CODE = 'profile-code',
  PIN_VENDING = 'pin-vending',
  REGISTRATION = 'registration',
  CENTERS = 'centers'
}

export interface Step {
  id: StepId;
  title: string;
  description: string;
  icon: string;
  // Fix: Added React import to satisfy the React.ReactNode type reference
  content: React.ReactNode;
  videoUrl: string;
}

export interface Center {
  name: string;
  state: string;
  town: string;
  address: string;
}
