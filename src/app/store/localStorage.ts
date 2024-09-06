export const setItem = (key: string, value: string) => {
  localStorage.setItem(key, value);
};

export const getItem = (key: string) => {
  try {
    const item: any = localStorage.getItem(key);
    return item;
  } catch (error) {
    return null;
  }
};

export const removeItem = (key: string) => {
  try {
    localStorage.removeItem(key);
  } catch (error) {
    console.error('Error removing item from localStorage:', error);
  }
};

export const clearLocalStorage = () => {
  localStorage.clear();
};
