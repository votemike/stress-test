import React from 'react';

const FullSummary = ({properties}) => {
  function getPropertyCurrentTotal(properties) {
    let teaserTotal = 0;
    properties.forEach(function (property) {
      teaserTotal += getCurrentMonthlyCost(property);
    });
    return teaserTotal;
  }

  function getPropertyFullTotal(properties) {
    let total = 0;
    properties.forEach(function (property) {
      total += getFullMonthlyCost(property);
    });
    return total;
  }

  function getFullMonthlyCost(property) {
    return getMonthlyCost(property, property.baseRate);
  }

  function getPropertyTotal(properties, rate) {
    let total = 0;
    properties.forEach(function (property) {
      total += getMonthlyCost(property, rate);
    });
    return total;
  }

  function getCurrentMonthlyCost(property) {
    if (property.teaserRate) {
      return getMonthlyCost(property, property.teaserRate);
    } else {
      return getMonthlyCost(property, property.baseRate);
    }
  }

  function getMonthlyCost(property, rate) {
    const monthlyInterestRate = rate / 12 / 100;
    if (property.interestOnly) {
      return +(property.mortgage * monthlyInterestRate).toFixed(2);
    }
    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const pow = Math.pow((monthlyInterestRate + 1), property.monthsLeft);
    return +(property.mortgage * ((monthlyInterestRate * pow) / (pow - 1))).toFixed(2);
  }

  function getNetIncomeTotal(properties, rate) {
    let incomeTotal = 0;
    properties.forEach(function (property) {
      incomeTotal += getNetIncome(property, rate);
    });
    return incomeTotal;
  }

  function getNetIncome(property, rate) {
    return +(property.income - getMonthlyCost(property, rate)).toFixed(2);
  }

  function getCurrentNetIncome(property) {
    return +(property.income - getCurrentMonthlyCost(property)).toFixed(2);
  }

  function getPropertyCurrentIncome(properties) {
    let incomeTotal = 0;
    properties.forEach(function (property) {
      incomeTotal += getCurrentNetIncome(property);
    });
    return incomeTotal;
  }

  function getPropertyProperIncome(properties) {
    let incomeTotal = 0;
    properties.forEach(function (property) {
      incomeTotal += getNetIncome(property, property.baseRate);
    });
    return incomeTotal;
  }

  function format(amount) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount)
  }

  if (properties.length < 1) {
    return null;
  }

  return (
    <>
      <h2>Summary</h2>
      <p>
        Your current monthly payments are around {format(getPropertyCurrentTotal(properties))}. This will increase to
        around {format(getPropertyFullTotal(properties))} (<span
        className="text-warning">+{format(getPropertyFullTotal(properties) - getPropertyCurrentTotal(properties))}</span>) once
        any/all teaser rates have expired.<br/>
        Your monthly net income is around {format(getPropertyCurrentIncome(properties))}. This will change by {format(getPropertyProperIncome(properties) - getPropertyCurrentIncome(properties))} to around {format(getPropertyProperIncome(properties))} once any/all teaser rates have expired.
      </p>
      <p>
        <span>If interest rates were to rise to 10%: (<a href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/" target="_blank" rel="noopener noreferrer">similar to rates around 1980</a>), then the mortgages would total {format(getPropertyTotal(properties, 10))} each month, {format(getPropertyTotal(properties, 10) - getPropertyCurrentTotal(properties))} more that your current repayments. If rates were this high, your monthly income will be nearer to {format(getNetIncomeTotal(properties, 10))}.</span><br/>
        <span>If interest rates were to rise to 15%: (<a href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/" target="_blank" rel="noopener noreferrer">similar to rates around 1995</a>), then the mortgages would total {format(getPropertyTotal(properties, 15))} each month, {format(getPropertyTotal(properties, 15) - getPropertyCurrentTotal(properties))} more that your current repayments. If rates were this high, your monthly income will be nearer to {format(getNetIncomeTotal(properties, 15))}.</span>
      </p>
    </>
  )
};

export default FullSummary;
