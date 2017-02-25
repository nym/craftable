import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as walletActions from './actions/wallet';
import CraftableItems from './CraftableItems';

//import ItemCollection from './ItemCollection';
import './Wallet.css';
//import Factory from './Factory';
//import WalletModel from './WalletModel';

class Wallet extends Component {
  constructor(props) {
    super(props);
    //let f = new Factory();
    // memory model for now
    //this.inventory = new WalletModel();
    
    this.state = {
    }
  }


  render() {
    const items = this.props.wallet.map((item, idx) => {
        return <li key={idx}>{item}</li>;
    });

    return (
      <div className="Wallet">
        <div className="Wallet-header">
          <h2>Your Items</h2>
        </div>
        <div className="Wallet-contents">
          {items}
        </div>
        <CraftableItems addItem={this.props.actions.addToWallet} />
      </div>
    );
  }

};

function mapStateToProps(state, props) {
    return {
        wallet: state.wallet
    };
}
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators(walletActions, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Wallet);