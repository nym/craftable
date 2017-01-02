import * as items from './items';

class Factory {
  constructor(name) {
    console.log(name);
  }

  create(name) {
    return new items[name]();
  }

  exchange(input, name) {
    //let counter = {};
    console.log("Cost is:")
    console.log(items[name].cost);

    let output = [];
    let trash = [];
    let counter = {};
    if (items[name]) {
      let wantedItems = items[name].cost;
      for (let wanted in wantedItems) {
        counter[wanted] = 0;
        for (let i=0; i<input.length; i++) {
          if (input[i].name === wanted) {
            trash.push(input[i]);
            counter[wanted] += 1
            if (counter[wanted] === items[name].cost[wanted]) {
              break;
            }
          }
        }
      }
    }
    console.log(output);
    return new items[name]();
  }

    /*if (_.isEqual(counter,ExchangeRate[type])) {
      console.log("...");
      // delete everything in the trashg()
      for (var i=0; i<trash.length; i++) {
        trash[i].destroy();
      }
      output.push(create(type));
      console.log("Success! You now have a " + type)
    } else {
      console.log("Not enough items.")
      output = arrayOfItems;
    }
  } 
  return output;
    return new items[name]();
  }*/
};

export default Factory;
