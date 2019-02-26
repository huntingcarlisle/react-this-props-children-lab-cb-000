// Code ThemedDecorations Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecorations extends React.Component {
  render() {
    return (
      <div className='themeddecorations'>{this.props.children}</div>
      )
  }
}