"use client";

const ACCESS_TOKEN_KEY = 'lunari_access_token';
const REFRESH_TOKEN_KEY = 'lunari_refresh_token';
const USER_EMAIL_KEY = 'lunari_user_email';

export function setAuthSession(accessToken: string, refreshToken: string, email?: string) {
  if (typeof window === 'undefined') return;
  window.localStorage.setItem(ACCESS_TOKEN_KEY, accessToken);
  window.localStorage.setItem(REFRESH_TOKEN_KEY, refreshToken);
  if (email) {
    window.localStorage.setItem(USER_EMAIL_KEY, email);
  }
}

export function getAccessToken() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(ACCESS_TOKEN_KEY);
}

export function getUserEmail() {
  if (typeof window === 'undefined') return null;
  return window.localStorage.getItem(USER_EMAIL_KEY);
}

export function clearAuthSession() {
  if (typeof window === 'undefined') return;
  window.localStorage.removeItem(ACCESS_TOKEN_KEY);
  window.localStorage.removeItem(REFRESH_TOKEN_KEY);
  window.localStorage.removeItem(USER_EMAIL_KEY);
}
