export const setLocalStorage: (key: string, value: string) => void = (
  key: string,
  value: string
) => setLocalStorage(key, value);

export const getLocalStorage: (key: string) => string | null = (key: string) =>
  getLocalStorage(key);
