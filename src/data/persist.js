export const persistGet = (key, fallback) => {
  try { return JSON.parse(localStorage.getItem(key)) ?? fallback; }
  catch { return fallback; }
};
export const persistSet = (key, value) => localStorage.setItem(key, JSON.stringify(value));