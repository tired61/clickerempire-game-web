// Game state management and persistence

const STORAGE_KEY = 'clickerEmpire_gameState';
const LAST_HOURLY_KEY = 'clickerEmpire_lastHourly';

export const defaultGameState = {
  money: 0,
  totalEarned: 0,
  clicksCount: 0,
  investments: [],
  businesses: [],
  lastHourlyTime: Date.now(),
};

export const loadGameState = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved) {
      return JSON.parse(saved);
    }
  } catch (error) {
    console.error('Error loading game state:', error);
  }
  return defaultGameState;
};

export const saveGameState = (state) => {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch (error) {
    console.error('Error saving game state:', error);
  }
};

export const formatMoney = (amount) => {
  return `$${Math.floor(amount).toLocaleString()}`;
};

export const calculateHourlyBonus = (state) => {
  const now = Date.now();
  const lastHourly = state.lastHourlyTime || now;
  const hoursPassed = Math.floor((now - lastHourly) / (1000 * 60 * 60));
  
  if (hoursPassed >= 1) {
    const bonus = Math.floor(Math.random() * 1000) + 100;
    return { bonus, hoursPassed };
  }
  return null;
};

export const getNextHourlyTime = (lastHourlyTime) => {
  const nextHour = new Date(lastHourlyTime);
  nextHour.setHours(nextHour.getHours() + 1);
  return nextHour;
};
