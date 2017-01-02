import React, { Component } from 'react'
import * as items from './items'

import './CraftableItems.css';

class CraftableItems extends Component {
  constructor(name) {
    super();
    this.itemsArray = Object.entries(items).map((item) => (<button alt="poof" key={item}><strong>{item[0]}</strong><br/>{item[1].cost ? Object.entries(item[1].cost).map((costI) => costI[1] + " " + costI[0]).join(", ") : "n/a" }</button>));
  }
  render() {
    return (
      <div className="CraftableItems">
        <div className="CraftableItems-header">
          <h2>Create:</h2>
        </div>
        <div className="CraftableItems-contents">
          {this.itemsArray}          
        </div>
      </div>
    );
  }

};

export default CraftableItems;
