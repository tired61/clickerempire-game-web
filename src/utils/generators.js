// Random generation for investments and businesses

const investmentNames = [
  'Tech Startup Fund',
  'Real Estate Portfolio',
  'Stock Market Index',
  'Crypto Portfolio',
  'Bond Investment',
  'Dividend Fund',
  'Growth Fund',
  'Emerging Markets',
  'Green Energy Fund',
  'Precious Metals',
];

const businessNames = [
  'Coffee Shop',
  'Freelance Agency',
  'Online Store',
  'Consulting Firm',
  'App Development',
  'Digital Marketing',
  'Content Creation',
  'Tutoring Service',
  'Cleaning Service',
  'Photography Studio',
];

export const generateInvestment = () => {
  const cost = Math.floor(Math.random() * 500) + 100;
  const dailyReturn = Math.floor(cost * (Math.random() * 0.15 + 0.05));
  
  return {
    id: Date.now() + Math.random(),
    name: investmentNames[Math.floor(Math.random() * investmentNames.length)],
    cost,
    dailyReturn,
    riskLevel: Math.floor(Math.random() * 3) + 1, // 1-3
    description: `Invest $${cost} to earn $${dailyReturn} daily`,
  };
};

export const generateBusiness = () => {
  const cost = Math.floor(Math.random() * 1000) + 200;
  const hourlyIncome = Math.floor(cost * (Math.random() * 0.08 + 0.02));
  
  return {
    id: Date.now() + Math.random(),
    name: businessNames[Math.floor(Math.random() * businessNames.length)],
    cost,
    hourlyIncome,
    level: 1,
    description: `Start a business for $${cost} to earn $${hourlyIncome} hourly`,
  };
};

export const generateMultipleInvestments = (count = 5) => {
  return Array.from({ length: count }, () => generateInvestment());
};

export const generateMultipleBusinesses = (count = 5) => {
  return Array.from({ length: count }, () => generateBusiness());
};
