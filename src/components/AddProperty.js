import React from 'react';

class AddProperty extends React.Component {
  constructor(props) {
    super(props);
    this.state = this.getInitialFormState();
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  getInitialFormState() {
    return {name: '', interestOnly: false, mortgage: '', baseRate: '', monthsLeft: '', teaserRate: '', rent: '', fee: '', expenses: ''};
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({[name]: value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.addPropertyHandler(this.state);
    this.setState(this.getInitialFormState());
  }

  render() {
    return (
      <React.Fragment>
        <h2 className="title is-3">Add a Property</h2>
        <form onSubmit={this.handleSubmit}>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Property Name</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="name" value={this.state.name} onChange={this.handleInputChange} placeholder="10 Downing Street" required/>
                </div>
                <p className="help">
                  Give this property a label
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Mortgage amount</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="mortgage" value={this.state.mortgage} onChange={this.handleInputChange} type="number" placeholder="300000" step="any" min="0" required/>
                </div>
                <p className="help">
                  The outstanding amount of the loan
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <label className="checkbox">
                    <input name="interestOnly" checked={this.state.interestOnly} onChange={this.handleInputChange} type="checkbox"/> Interest only
                  </label>
                </div>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="monthsLeft" value={this.state.monthsLeft} onChange={this.handleInputChange} type="number" placeholder="300" step="1" min="0" disabled={this.state.interestOnly} required={!this.state.interestOnly}/>
                </div>
                <p className="help">
                  Months left on the mortgage
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Rate</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="baseRate" value={this.state.baseRate} onChange={this.handleInputChange} type="number" placeholder="4.95" step="any" required/>
                </div>
                <p className="help">
                  The interest rate of the loan (ignoring any teaser rate) %
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="teaserRate" value={this.state.teaserRate} onChange={this.handleInputChange} type="number" placeholder="2.19" step="any"/>
                </div>
                <p className="help">
                  Any introductory/teaser rate the loan may have %
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Rent</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="rent" value={this.state.rent} onChange={this.handleInputChange} type="number" step="any" placeholder="1000" id="rent" required/>
                </div>
                <p className="help">
                  Monthly rent
                </p>
              </div>
              <div className="field">
                <div className="control">
                  <input className="input" name="fee" value={this.state.fee} onChange={this.handleInputChange} type="number" step="any" placeholder="12" id="fee" required/>
                </div>
                <p className="help">
                  Letting fee %
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label is-normal">
              <label className="label">Expenses</label>
            </div>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <input className="input" name="expenses" value={this.state.expenses} onChange={this.handleInputChange} type="number" step="any" placeholder="110" id="expenses" required/>
                </div>
                <p className="help">
                  Monthly expenses such as maintenance and service charge
                </p>
              </div>
            </div>
          </div>
          <div className="field is-horizontal">
            <div className="field-label"/>
            <div className="field-body">
              <div className="field">
                <div className="control">
                  <button type="submit" className="button is-primary">
                    Add Property
                  </button>
                </div>
              </div>
            </div>
          </div>
        </form>
      </React.Fragment>
    );
  }
}

export default AddProperty
