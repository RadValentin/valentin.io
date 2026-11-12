// Shared logic
import { MOTION_KEY } from '../consts';

export const readMotionState = () => {
  const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  try {
    const savedMotion = window.localStorage.getItem(MOTION_KEY);
    if (savedMotion === 'on' || savedMotion === 'off') {
      return savedMotion === 'on';
    }
  } catch {
    // Use the system preference when localStorage is unavailable.
  }

  return !prefersReducedMotion;
};

export const setMotionState = (enabled: boolean) => {
  const root = document.documentElement;
  const wasEnabled = root.dataset.motion === 'on';
  root.dataset.motion = enabled ? 'on' : 'off';

  try {
    window.localStorage.setItem(MOTION_KEY, enabled ? 'on' : 'off');
  } catch {
    // Keep the current page state when localStorage is unavailable.
  }

  if (enabled && !wasEnabled && (root.classList.contains('can-animate') || root.classList.contains('page-visited'))) {
    replayMotion();
  }
};

export const replayMotion = () => {
  const root = document.documentElement;

  root.classList.remove('can-animate');
  void root.offsetWidth;
  root.classList.add('can-animate');
};
