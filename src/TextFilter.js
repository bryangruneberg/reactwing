import React, {Component} from 'react';

const TextFilter = ({value, onChange}) => {
  return (<div>
    <input value={value} onChange={onChange} />
  </div>)
}


export default TextFilter;