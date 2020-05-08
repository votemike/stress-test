const getMonthlyCost = (property, rate) => {
  return property.finances[0].calculateMonthlyCostOfFinance(rate).toFixed(2);
};

const getNetIncome = (property, rate) => {
  return +(property.calculateMonthlyIncome() - getMonthlyCost(property, rate) - property.payments[0].monthlyCost).toFixed(2);
};

export {
  getMonthlyCost,
  getNetIncome
};
