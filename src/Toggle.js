import React, {Component} from 'react';

const Toggle = ({toggleActive, showActive}) => {
  return (<div>
    <button onClick={ toggleActive }>
      Toggle
    </button>
    <div>
      Showing: <span>
        { showActive ? 'Alive' : 'Dead' }
        </span>
    </div>
  </div>)
}


export default Toggle;