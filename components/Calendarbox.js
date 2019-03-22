
import React, { Component } from 'react';
import { Calendar } from 'antd';

function onPanelChange(v, mode) {
  console.log(v, mode);
}

export default class  extends Component {
  render() {
    return (
      <>
        <div className="card-section" style={{padding: '0px'}}>
          <div style={{width: 300, border: '1px solid #d9d9d9', borderRadius: 4 }}>
            <Calendar fullscreen={false} onPanelChange={onPanelChange}></Calendar>
          </div> 
        </div>
      </>  
    )
  }
}