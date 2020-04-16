import React from 'react';

class PropertySummary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { collapsed: true };
  }

  getCurrentMonthlyCost() {
    if (this.props.property.teaserRate) {
      return this.getMonthlyCost(this.props.property.teaserRate);
    } else {
      return this.getMonthlyCost(this.props.property.baseRate);
    }
  }

  getCurrentNetIncome() {
    return +(this.props.property.income - this.getCurrentMonthlyCost()).toFixed(2);
  }

  getFullMonthlyCost() {
    return this.getMonthlyCost(this.props.property.baseRate);
  }

  getNetIncome(rate) {
    return +(this.props.property.income - this.getMonthlyCost(rate)).toFixed(2);
  }

  format(amount) {
    return new Intl.NumberFormat('en-GB', {
      style: 'currency',
      currency: 'GBP'
    }).format(amount)
  }

  getMonthlyCost(rate) {
    const monthlyInterestRate = rate / 12 / 100;
    if (this.props.property.interestOnly) {
      return +(this.props.property.mortgage * monthlyInterestRate).toFixed(2);
    }
    // M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1]
    const pow = Math.pow((monthlyInterestRate + 1), this.props.property.monthsLeft);
    return +(this.props.property.mortgage * ((monthlyInterestRate * pow) / (pow - 1))).toFixed(2);
  }

  renderBlurb() {
    const line1 = [`The mortgage for ${this.props.property.name} currently costs around ${this.format(this.getCurrentMonthlyCost())} each month.`];
    const line2 = [`After mortgage repayments, your current income from the property is around ${this.format(this.getCurrentNetIncome())} each month.`];

    if (this.props.property.teaserRate) {
      line1.push(`When the teaser rate expires, it is expected that this will rise to ${this.format(this.getFullMonthlyCost())}, ${this.format(this.getFullMonthlyCost() - this.getCurrentMonthlyCost())} more than your current repayments.`);
      line2.push(`When the teaser rate expires that will be nearer to ${this.format(this.getNetIncome(this.props.property.baseRate))}.`);
    }
    const para1 = <p className='summary-line'>{line1.join(' ')}<br/>{line2.join(' ')}</p>;

    if (this.props.property.baseRate >= 15) {
      return para1;
    }

    const span1 = <span>If interest rates were to rise to 10% (<a href="http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf" target="_blank" rel="noopener noreferrer">similar to rates around 1980</a>), then the mortgage would cost {this.format(this.getMonthlyCost(10))} each month, {this.format(this.getMonthlyCost(10) - this.getCurrentMonthlyCost())} more that your current repayments. If rates were this high, your monthly income will be nearer to {this.format(this.getNetIncome(10))}.</span>;
    let span2 = null;
    if (this.props.property.baseRate < 10) {
      span2 = <span>If interest rates were to rise to 15% (<a href="http://www.bankofengland.co.uk/statistics/Documents/articles/2015/6jul.pdf" target="_blank" rel="noopener noreferrer">similar to rates around 1995</a>), then the mortgage would cost {this.format(this.getMonthlyCost(15))} each month, {this.format(this.getMonthlyCost(15) - this.getCurrentMonthlyCost())} more that your current repayments. If rates were this high, your monthly income will be nearer to {this.format(this.getNetIncome(15))}.</span>;
    }

    const para2 = <p className='summary-line'>{span1}{span2 && (<><br/>{span2}</>)}</p>;

    return <>{para1}{para2}</>;
  }

  render() {
    let blurb = null;
    let deleteButton = null;
    if (!this.state.collapsed) {
      blurb = this.renderBlurb();
      deleteButton = <button className='remove-property' onClick={() => this.props.removePropertyHandler(this.props.index)}>Remove Property</button>;
    }

    let mortgageCost = this.format(this.getCurrentMonthlyCost());
    let profit = this.format(this.getCurrentNetIncome());

    if (this.props.property.teaserRate) {
      mortgageCost = `${mortgageCost} (${this.format(this.getFullMonthlyCost())})`;
      profit = `${profit} (${this.format(this.getNetIncome(this.props.property.baseRate))})`;
    }

    return (
      <div className='property'>
        <h2 className='toggle-trigger' onClick={() => this.setState(state => ({collapsed: !state.collapsed}))}>{ this.props.property.name }</h2>
        <div className='property-key-info toggle-trigger' onClick={() => this.setState(state => ({collapsed: !state.collapsed}))}>
          <div><span className='property-key-info-label'>Mortgage Cost:</span> {mortgageCost} per month</div>
          <div><span className='property-key-info-label'>Pre-Mortgage Profit:</span> {this.format(this.props.property.income)} per month</div>
          <div><span className='property-key-info-label'>Post-Mortgage Profit:</span> {profit} per month</div>
        </div>
        {blurb}
        {deleteButton}
      </div>
    );
  }
}

export default PropertySummary;
