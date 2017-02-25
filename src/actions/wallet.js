export const addToWallet = (item) => {
  console.log('adding item:', item);
  return {
      type: 'add',
      item
  };
}