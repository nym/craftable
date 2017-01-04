class WalletModel {
  constructor() {
    this.items = {};
  }

  addItem(item) {
    if (!this.items.hasOwnProperty(item.name)) {
      this.items[item.name] = [];
    }
    this.items[item.name].push(item);
  }

  removeItem(item) {
    //tbd
  }

  listItems() {
    return this.items;
  }
};

export default WalletModel;
