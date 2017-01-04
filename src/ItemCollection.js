import React, { Component } from 'react'
import './ItemCollection.css';
//import Item from "./Item"
class ItemCollection extends Component {
  constructor(name) {
    super();
    this.name = "Item";
    this.items = [];

    console.log(this);
  }

  componentWillUpdate(nextProps, nextState) {
    console.log("Props");
    //this.items.append(new Item())
  }

  quantity() {
    return this.props.quantity;
  }
  
  render() {
    return (
      <div className="ItemCollection">
        <h3>{this.props.name} <super>({this.props.quantity})</super></h3>
      </div>
    );
  }

};

export default ItemCollection;
