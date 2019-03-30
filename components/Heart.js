import React, { Component } from 'react';

export default (props) => (
  <i style={{fontStyle: 'normal', color: props.color, margin: '0 2px'}}>{props.children}</i>
);