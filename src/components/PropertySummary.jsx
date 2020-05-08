import React from 'react';
import {
  getCurrentMonthlyCost,
  getCurrentNetIncome,
  getFullMonthlyCost,
  getMonthlyCost,
  getNetIncome
} from '../utilities/calculators';
import {formatCurrency} from '../utilities/formatters';
import CollapsableWidget from "./CollapsableWidget";

class PropertySummary extends React.Component {
  renderBlurb() {
    const line1 = [`The mortgage for ${this.props.property.name} currently costs around ${formatCurrency(getCurrentMonthlyCost(this.props.property))} each month.`];
    const line2 = [`After mortgage repayments, your current income from the property is around ${formatCurrency(getCurrentNetIncome(this.props.property))} each month.`];

    if (this.props.property.teaserRate) {
      line1.push(`When the teaser rate expires, it is expected that this will rise to ${formatCurrency(getFullMonthlyCost(this.props.property))}, ${formatCurrency(getFullMonthlyCost(this.props.property) - getCurrentMonthlyCost(this.props.property))} more than your current repayments.`);
      line2.push(`When the teaser rate expires that will be nearer to ${formatCurrency(getNetIncome(this.props.property, this.props.property.baseRate))}.`);
    }
    const para1 = <p className='summary-line'>{line1.join(' ')}<br/>{line2.join(' ')}</p>;

    if (this.props.property.baseRate >= 15) {
      return para1;
    }

    let span1 = null;
    if (this.props.property.baseRate < 10) {
      span1 = <>
        <span>If interest rates were to rise to 10% (<a
          href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/"
          target="_blank"
          rel="noopener noreferrer">similar to rates around 1995</a>), then the mortgage would cost {formatCurrency(getMonthlyCost(this.props.property, 10))} each month, {formatCurrency(getMonthlyCost(this.props.property, 10) - getCurrentMonthlyCost(this.props.property))} more that your current repayments. If rates were this high, your monthly income will be nearer to {formatCurrency(getNetIncome(this.props.property, 10))}.</span>
        <br/>
      </>;
    }
    const span2 = <span>If interest rates were to rise to 15% (<a
      href="https://www.purecommercialfinance.co.uk/news/a-brief-history-of-average-mortgage-interest-rates/"
      target="_blank"
      rel="noopener noreferrer">similar to rates around 1980</a>), then the mortgage would cost {formatCurrency(getMonthlyCost(this.props.property, 15))} each month, {formatCurrency(getMonthlyCost(this.props.property, 15) - getCurrentMonthlyCost(this.props.property))} more that your current repayments. If rates were this high, your monthly income will be nearer to {formatCurrency(getNetIncome(this.props.property, 15))}.</span>;

    const para2 = <p className='summary-line'>{span1}{span2}</p>;

    return <>{para1}{para2}</>;
  }

  renderDeleteButton() {
    return <button className='remove-property' onClick={() => this.props.removePropertyHandler(this.props.index)}>Remove
      Property</button>;
  }

  render() {
    let mortgageCost = formatCurrency(getCurrentMonthlyCost(this.props.property));
    let profit = formatCurrency(getCurrentNetIncome(this.props.property));

    if (this.props.property.teaserRate) {
      mortgageCost = `${mortgageCost} (${formatCurrency(getFullMonthlyCost(this.props.property))})`;
      profit = `${profit} (${formatCurrency(getNetIncome(this.props.property, this.props.property.baseRate))})`;
    }

    const keyInfo = {
      'Mortgage Cost': `${mortgageCost} per month`,
      'Pre-Mortgage Profit': `${formatCurrency(this.props.property.income)} per month`,
      'Post-Mortgage Profit': `${profit} per month`
    };

    return (
      <CollapsableWidget heading={this.props.property.name} keyInfoItems={keyInfo}>
        {this.renderBlurb()}
        {this.renderDeleteButton()}
      </CollapsableWidget>
    );
  }
}

export default PropertySummary;
