'use client';

export default function NotFound() {
  return typeof window !== "undefined" && window.location.replace('/');
}
