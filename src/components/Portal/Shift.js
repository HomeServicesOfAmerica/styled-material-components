import React, { Component } from 'react';

export class Shift extends Component {
  componentDidMount() {
    document.body.classList.add('shift');
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.open && !this.props.open) {
      document.body.classList.add(this.props.direction);
    } else if (!nextProps.open && this.props.open) {
      document.body.classList.remove(this.props.direction);
    }
  }

  componentWillUnmount() {
    document.body.classList.remove('shift');
  }

  render() {
    return (
      <div className={this.props.className}>
        {this.props.children}
      </div>
    );
  }
}
