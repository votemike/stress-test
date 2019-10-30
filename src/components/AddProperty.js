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
    const monthsLeftInput = this.state.interestOnly ? null : <div><input name="monthsLeft" value={this.state.monthsLeft} onChange={this.handleInputChange} type="number" placeholder="Months left" min="0" required/></div>;
    return (
      <React.Fragment>
        <h2>Add a Property</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <div>
              <input name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="Property Name" required/>
            </div>
            <div>
              <label htmlFor="interestOnly">Interest only
                <input name="interestOnly" value={this.state.interestOnly} onChange={this.handleInputChange} type="checkbox"/>
              </label>
            </div>
          </div>
          <div>
            <div>
              <input name="mortgage" value={this.state.mortgage} onChange={this.handleInputChange} type="number" placeholder="Outstanding mortgage" step="any" min="0" required/>
            </div>
            <div>
              <input name="baseRate" value={this.state.baseRate} onChange={this.handleInputChange} type="number" placeholder="Base rate" step="any" required/>
            </div>
            {monthsLeftInput}
            <div>
              <input name="teaserRate" value={this.state.teaserRate} onChange={this.handleInputChange} type="number" placeholder="Teaser rate" step="any"/>
            </div>
          </div>
          <div>
            <div>
              <input name="income" value={this.state.income} onChange={this.handleInputChange} placeholder="Income" id="income" required/>
              <label htmlFor="income">Monthly Net Income after fees, maintainence and taxes but before mortgage
                payments</label>
            </div>
          </div>
          <div>
            <div>
              <input type="submit" value="Add Property"/>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProperty
