export const addToWallet = (item) => {
  console.log('adding item:', item[0]);
  return {
      type: 'add',
      item: item[0]
  };
}

export const craftItem = (item) => {
  console.log('crafting item:', item);
  return {
      type: 'craft',
      item
  };
}