export const addToWallet = (item) => {
  console.log('adding item:', item);
  return {
      type: 'add',
      item
  };
}

export const craftItem = (item) => {
  console.log('crafting item:', item);
  return {
      type: 'craft',
      item
  };
}