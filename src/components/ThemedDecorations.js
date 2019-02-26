// Code ThemedDecorations Component Here
import React from 'react';
import ReactDOM from 'react-dom';

export default class ThemedDecorations extends React.Component {
  render() {
    
    const childrenWithExtraProp = React.Children.map(this.props.children, child => {
      return React.cloneElement(child, {
        theme: child.props.theme === currentPlayingTitle
      });
    });
    
    
    return (
      <div className='themeddecorations'>{this.props.children}</div>
      )
  }
}
