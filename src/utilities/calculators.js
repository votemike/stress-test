const getMonthlyCost = (property, rate) => {
  return property.finances[0].calculateMonthlyCostOfFinance(rate).toFixed(2);
};

const getNetIncome = (property, rate) => {
  const income = property.calculateMonthlyIncome() - getMonthlyCost(property, rate);
  if (property.payments[0]) { // Old schemas didn't have payments
    return +(income - property.payments[0].monthlyCost).toFixed(2);
  }
  return +(income).toFixed(2);
};

export {
  getMonthlyCost,
  getNetIncome
};
