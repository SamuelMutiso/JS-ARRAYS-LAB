// Write your code here
// Crearting thr product inventory array
// ill now initialize the array with the given required strings in the instructions
let products = [ "laptop", " phone", "headphones", "monitor"];

// Accessing product information 
function logFirstProduct () {
  console.log(products[0]);
}

// Adding a product
function addProduct(productName) {
  products.push(productName);
}

// updating product information
function updateProductName (index, newName){
  products[index] = newName;
}

// removing a product
 function removeLastProduct () {
  products.pop();
 }


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
