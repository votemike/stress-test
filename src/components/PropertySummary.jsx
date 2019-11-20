import React from 'react';

const PropertySummary = ({index, property, removePropertyHandler}) => {
  function getCurrentMonthlyCost(property) {
    if (property.teaserRate) {
      return getMonthlyCost(property, property.teaserRate);
    } else {
      return getMonthlyCost(property, property.baseRate);
    }
  }

  function getCurrentNetIncome(property) {
    return +(property.income - getCurrentMonthlyCost(property)).toFixed(2);
  }

  function getFullMonthlyCost(property) {
    return getMonthlyCost(property, property.baseRate);
  }

  function getNetIncome(property, rate) {
    return +(property.income - getMonthlyCost(property, rate)).toFixed(2);
  }

  function format(amount) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount)
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

  const title = <><h2>{ property.name }</h2><button aria-label="Remove Todo" className='remove' onClick={() => removePropertyHandler(index)}></button></>;
  const line1 = [`The mortgage for ${property.name} currently costs around ${format(getCurrentMonthlyCost(property))} each month.`];
  const line2 = [`After mortgage repayments, your current income from the property is around ${format(getCurrentNetIncome(property))} each month.`];

  if (property.teaserRate) {
    line1.push(`When the teaser rate expires, it is expected that this will rise to ${format(getFullMonthlyCost(property))}, ${format(getFullMonthlyCost(property) - getCurrentMonthlyCost(property))} more than your current repayments.`);
    line2.push(`When the teaser rate expires that will be nearer to ${format(getNetIncome(property, property.baseRate))}.`);
  }
  const para1 = <p>{line1.join(' ')}<br/>{line2.join(' ')}</p>;


  if (property.baseRate >= 15) {
    return <>{title}{para1}</>;
  }

  const span1 = <span>If interest rates were to rise to 10% (<a href="http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf" target="_blank" rel="noopener noreferrer">similar to rates around 1980</a>), then the mortgage would cost {format(getMonthlyCost(property, 10))} each month, {format(getMonthlyCost(property, 10) - getCurrentMonthlyCost(property))} more that your current repayments. If rates were this high, your monthly income will be nearer to {format(getNetIncome(property, 10))}.</span>;
  let span2 = null;
  if (property.baseRate < 10) {
    span2 = <span>If interest rates were to rise to 15% (<a href="http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf" target="_blank" rel="noopener noreferrer">similar to rates around 1995</a>), then the mortgage would cost {format(getMonthlyCost(property, 15))} each month, {format(getMonthlyCost(property, 15) - getCurrentMonthlyCost(property))} more that your current repayments. If rates were this high, your monthly income will be nearer to {format(getNetIncome(property, 15))}.</span>;
  }

  const para2 = <p>{span1}{span2 && (<><br/>{span2}</>)}</p>;

  return <>{title}{para1}{para2}</>;
};

export default PropertySummary;
