const formatter = new Intl.NumberFormat('en-GB', {style: 'currency', currency: 'GBP'});
const formatCurrency = amount => {
  return formatter.format(amount)
};

export {
  formatCurrency
};
