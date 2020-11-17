/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
import React from 'react';
import Slider from '../styles/slider';

export default function Down(props) {
  // const { onChange } = props

  function handleRateChange(e) {
    props.onRateChange(e.target.value);
  }
  function handleValueChange(e) {
    props.onValueChange(e.target.value);
  }
  return (
    <div className="sliders">
      <div>Down Payment</div>
      <input
        id="downPaymentValue"
        type="text"
        onChange={handleValueChange}
        maxLength={10}
        value={props.valueStr}
      />
      <input
        id="downPaymentRate"
        type="text"
        onChange={handleRateChange}
        maxLength={10}
        value={props.rateStr}
      />
      <Slider
        step={1}
        min={0}
        max={30}
        onChange={handleRateChange}
        value={props.rate}
      />
      <div>{props.valueStr}</div>
    </div>
  );
}
