import React from 'react';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialFormState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialFormState() {
    return {name: '', interestOnly: false, mortgage: '', baseRate: '', monthsLeft: '', teaserRate: '', income: ''};
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    // @TODO validate form
    event.preventDefault();
    this.props.addPropertyHandler(this.state);
    this.setState(this.getInitialFormState());
  }

  render() {
    const monthsLeftInput = this.state.interestOnly ? null : <div className="field"><input name="monthsLeft" value={this.state.monthsLeft} onChange={this.handleInputChange} type="number" placeholder="Months left" min="0" required/></div>;
    return (
      <React.Fragment>
        <h2>Add a Property</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="row">
            <div className="field">
              <input name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Property Name" required/>
            </div>
            <div className="field">
              <label htmlFor="interestOnly">Interest only
                <input name="interestOnly" checked={this.state.interestOnly} onChange={this.handleInputChange} type="checkbox"/>
              </label>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <input name="mortgage" value={this.state.mortgage} onChange={this.handleInputChange} type="number" placeholder="Outstanding mortgage" step="any" min="0" required/>
            </div>
            <div className="field">
              <input name="baseRate" value={this.state.baseRate} onChange={this.handleInputChange} type="number" placeholder="Base rate" step="any" required/>
            </div>
            {monthsLeftInput}
            <div className="field">
              <input name="teaserRate" value={this.state.teaserRate} onChange={this.handleInputChange} type="number" placeholder="Teaser rate" step="any"/>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <input name="income" value={this.state.income} onChange={this.handleInputChange} placeholder="Income" id="income" required/>
            </div>
            <div className="income-label">
              <label htmlFor="income">(Monthly Net Income after fees, maintenance and taxes but before mortgage payments)</label>
            </div>
          </div>
          <div className="row">
            <div className="field">
              <input type="submit" value="Add Property"/>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProperty
