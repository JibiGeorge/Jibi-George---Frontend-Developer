import { AppState } from '../types';

const KEY = 'visual-page-editor';

export const saveState = (state: AppState) => {
    localStorage.setItem(KEY, JSON.stringify(state));
};

export const loadState = (): AppState | null => {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
};