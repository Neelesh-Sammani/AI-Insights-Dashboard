import aiData from './data/ai-data.json';

export const fetchAIData = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(aiData);
    }, 1000); // Simulating delay
  });
};
