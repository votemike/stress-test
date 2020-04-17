import React from 'react';
import CollapsableWidget from './CollapsableWidget';
import { getCurrentMonthlyCost, getCurrentNetIncome, getFullMonthlyCost, getMonthlyCost, getNetIncome } from '../utilities/calculators';
import { formatCurrency } from '../utilities/formatters';

class FullSummary extends React.Component {
  getPropertyCurrentTotal() {
    let teaserTotal = 0;
    this.props.properties.forEach(property =>  {
      teaserTotal += getCurrentMonthlyCost(property);
    });
    return teaserTotal;
  }

  getPropertyFullTotal() {
    let total = 0;
    this.props.properties.forEach(property => {
      total += getFullMonthlyCost(property);
    });
    return total;
  }

  getPropertyTotal(rate) {
    let total = 0;
    this.props.properties.forEach(property => {
      total += getMonthlyCost(property, rate);
    });
    return total;
  }

  getNetIncomeTotal(rate) {
    let incomeTotal = 0;
    this.props.properties.forEach(property => {
      incomeTotal += getNetIncome(property, rate);
    });
    return incomeTotal;
  }

  getPropertyCurrentIncome() {
    let incomeTotal = 0;
    this.props.properties.forEach(property => {
      incomeTotal += getCurrentNetIncome(property);
    });
    return incomeTotal;
  }

  getPropertyProperIncome() {
    let incomeTotal = 0;
    this.props.properties.forEach(property => {
      incomeTotal += getNetIncome(property, property.baseRate);
    });
    return incomeTotal;
  }

  getTotalMortgageDebt() {
    let mortgageTotal = 0;
    this.props.properties.forEach(property => {
      mortgageTotal += parseFloat(property.mortgage);
    });
    return mortgageTotal;
  }

  renderBlurb() {
    return (
      <>
        <p>
          Your current monthly payments are around {formatCurrency(this.getPropertyCurrentTotal())}. This will increase to
          around {formatCurrency(this.getPropertyFullTotal())} (<span
          className="text-warning">+{formatCurrency(this.getPropertyFullTotal() - this.getPropertyCurrentTotal())}</span>) once
          any/all teaser rates have expired.<br/>
          Your monthly net income is around {formatCurrency(this.getPropertyCurrentIncome())}. This will change by {formatCurrency(this.getPropertyProperIncome() - this.getPropertyCurrentIncome())} to around {formatCurrency(this.getPropertyProperIncome())} once any/all teaser rates have expired.
        </p>
        <p>
          <span>If interest rates were to rise to 10%: (<a href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/" target="_blank" rel="noopener noreferrer">similar to rates around 1995</a>), then the mortgages would total {formatCurrency(this.getPropertyTotal(10))} each month, {formatCurrency(this.getPropertyTotal(10) - this.getPropertyCurrentTotal())} more that your current repayments. If rates were this high, your monthly income will be nearer to {formatCurrency(this.getNetIncomeTotal(10))}.</span><br/>
          <span>If interest rates were to rise to 15%: (<a href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/" target="_blank" rel="noopener noreferrer">similar to rates around 1980</a>), then the mortgages would total {formatCurrency(this.getPropertyTotal(15))} each month, {formatCurrency(this.getPropertyTotal(15) - this.getPropertyCurrentTotal())} more that your current repayments. If rates were this high, your monthly income will be nearer to {formatCurrency(this.getNetIncomeTotal(15))}.</span>
        </p>
        </>
    );
  }

  render() {
    if (this.props.properties.length < 1) {
      return null;
    }

    const properProfit = formatCurrency(this.getPropertyProperIncome());
    let profit = formatCurrency(this.getPropertyCurrentIncome());

    if (profit !== properProfit) {
      profit = `${profit} (${properProfit})`
    }

    const keyInfo = {
      'Total Mortgage Debt': formatCurrency(this.getTotalMortgageDebt()),
      'Mortgage Costs': `${formatCurrency(this.getPropertyCurrentTotal())} per month`,
      'Post-Mortgage Profit': `${profit} per month`
    };

    return (
      <CollapsableWidget heading='Summary' keyInfoItems={keyInfo}>
        {this.renderBlurb()}
      </CollapsableWidget>
    );
  }
}

export default FullSummary;
