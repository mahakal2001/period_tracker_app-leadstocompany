"use client";

type ProfileDraft = {
  fullName?: string;
  dateOfBirth?: string;
  weight?: number;
  weightUnit?: string;
  height?: number;
  heightUnit?: string;
  averagePeriodDays?: number;
  averageCycleDays?: number;
  lastPeriodStart?: string;
};

const KEY = 'lunari_profile_draft';

export function getProfileDraft(): ProfileDraft {
  if (typeof window === 'undefined') return {};
  const raw = window.localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
}

export function updateProfileDraft(partial: Partial<ProfileDraft>) {
  if (typeof window === 'undefined') return;
  const next = { ...getProfileDraft(), ...partial };
  window.localStorage.setItem(KEY, JSON.stringify(next));
}

export function clearProfileDraft() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(KEY);
}
