import React, { Component } from 'react';
import { Link } from 'react-router';

export default class Home extends Component {
  render() {
    const { children } = this.props;

    return (
      <div className='home-page'>
        Home View
      </div>
    );
  }
}
