import React from 'react';

class CollapsableWidget extends React.Component {
  constructor(props) {
    super(props);
    this.state = {collapsed: true};
  }

  render() {
    return (
      <div className='collapsable'>
        <h2 className='collapsable-toggle title is-3' onClick={() => this.setState(state => ({collapsed: !state.collapsed}))}>{this.props.heading}</h2>
        <div className='collapsable-key-info collapsable-toggle' onClick={() => this.setState(state => ({collapsed: !state.collapsed}))}>
          {this.renderKeyInfoItems()}
        </div>
        {this.renderBlurb()}
      </div>
    );
  }

  renderBlurb() {
    if (!this.state.collapsed) {
      return this.props.children;
    }
  }

  renderKeyInfoItems() {
    return Object.entries(this.props.keyInfoItems).map(([key, value]) => {
      return <div key={`${this.props.heading}-${key}`}><span className='collapsable-key-info-label'>{key}:</span> {value}</div>;
    });
  }
}

export default CollapsableWidget;

