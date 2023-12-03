console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!


// ### Required Features
// Update the `cart.js` file to do the following:
//
// - Create a global variable named `basket` and set it to an empty array.
//
// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added
//
// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
//
// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array




basket = [];

function addItem(item){
  basket.push(item);
  return true;
}

function listItems(){
  for (const item of basket){
    console.log(item);
  }
}

function empty(){
  basket.length = 0;
}

console.log('Basket is',basket);
console.log('Adding apples (expect true)',addItem('milk'));
console.log('Adding apples (expect true)',addItem('eggs'));
console.log('Adding apples (expect true)',addItem('honey'));
console.log('Adding apples (expect true)',addItem('bread'));
console.log('Adding apples (expect true)',addItem('carrots'));
console.log('Basket is now',basket);

//empty basket
empty();
console.log('Basket is now empty',basket);











// DO NOT MODIFY
// Used for automated testing
try {
    module.exports = {
        basket: typeof basket !== 'undefined' ? basket : undefined,
        addItem: typeof addItem !== 'undefined' ? addItem : undefined,
        listItems: typeof listItems !== 'undefined' ? listItems : undefined,
        maxItems: typeof maxItems !== 'undefined' ? maxItems : undefined,
        empty: typeof empty !== 'undefined' ? empty : undefined,
        isFull: typeof isFull !== 'undefined' ? isFull : undefined,
        removeItem: typeof removeItem !== 'undefined' ? removeItem : undefined,
    };
} catch(e) {
    // Do nothing
}
