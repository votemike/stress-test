const getCurrentMonthlyCost = property => {
  if (property.teaserRate) {
    return getMonthlyCost(property, property.teaserRate);
  }

  return getFullMonthlyCost(property);
};

const getCurrentNetIncome = property => {
  return +(property.income - getCurrentMonthlyCost(property)).toFixed(2);
};

const getFullMonthlyCost = property => {
  return getMonthlyCost(property, property.baseRate);
};

const getMonthlyCost = (property, rate) => {
  const monthlyInterestRate = rate / 12 / 100;
  if (property.interestOnly) {
    return +(property.mortgage * monthlyInterestRate).toFixed(2);
  }
  // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
  const pow = Math.pow((monthlyInterestRate + 1), property.monthsLeft);
  return +(property.mortgage * ((monthlyInterestRate * pow) / (pow - 1))).toFixed(2);
};

const getNetIncome = (property, rate) => {
  return +(property.income - getMonthlyCost(property, rate)).toFixed(2);
};

export {
  getCurrentMonthlyCost,
  getCurrentNetIncome,
  getFullMonthlyCost,
  getMonthlyCost,
  getNetIncome
};
