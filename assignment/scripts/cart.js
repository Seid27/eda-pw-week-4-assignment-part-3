console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

// Create a global variable named `basket` and set it to an empty array.
basket = [];


// - Create a function called `addItem`. It should:
//   - take an input parameter for a string `item`
//   - add the new item to the global array `basket`.
//   - return `true` indicating the item was added

// function addItem(item){
//   basket.push(item);
//   return true;
// }


// - Create a function called `listItems`. It should:
//   - loop over the items in the `basket` array
//   - console.log each individual item on a new line
function listItems(){
  for (const item of basket){
    console.log(item);
  }
}


// - Create a function called `empty`. It should:
//   - reset the `basket` to an empty array
//   - do not use `basket = []` to reset the array

function empty(){
  basket.length = 0;
}


//STRETCH GOALS
// __Using functions in other functions!__
//
// 1. Add a global `const` named `maxItems` and set it to 5.

const maxItems = 5;
//
// 2. Create a function called isFull(). It should:
//   - return `false` if the basket contains *less* than max number of items
//   - return `true` otherwise (equal or more than maxItems)
//

function isFull(){
  if (basket.length < maxItems){
    return false;
  }

  return true;
}
// 3. Update the required `addItem` function to:
//   - Use the `isFull` function to prevent more than `maxItems` from being added to the basket.
//   - If an item was added to the array, return `true`
//   - If there was no room and the item could not be added return `false`
//
function addItem(item){

  if (!isFull()){
    basket.push(item);
    return true;
  }

  return false;

}

// __Using Array built-in functions!__
//
// 4. Create a function called `removeItem`. It should:
//   - Take an input parameter for a string `item`
//   - Use [Array.indexOf](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/indexOf) to find the index of the first matching item in the basket.
//   - Use [Array.splice](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/splice) to remove the first matching item from the basket.
//   - Return the item removed or `null` if the item was not found


function removeItem(item){
  // console.log(basket.indexOf(item));
  return basket.indexOf(item)!= -1? basket.splice(basket.indexOf(item), 1)[0] : null
}


console.log('Basket is',basket);
console.log('Adding milk (expect true)',addItem('milk'));
console.log('Adding eggs (expect true)',addItem('eggs'));
console.log('Adding honey (expect true)',addItem('honey'));
console.log('Adding bread (expect true)',addItem('bread'));
console.log('Adding carrots (expect true)',addItem('carrots'));
console.log('Adding sugar (expect true)',addItem('sugar'));
console.log('Adding sugar (expect true)',addItem('pepper'));
console.log('Basket is now',basket);

//remove item

console.log('remove honey',removeItem('honey'), 'removed');

console.log('Basket is now',basket);

console.log('remove salt, salt not in basket',removeItem('salt'));

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
