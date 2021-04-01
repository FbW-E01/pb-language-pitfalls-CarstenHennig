// # Pitfalls 

// #### 1. NaN
// **Question: Comment your answer in your js file**: What does NaN stand for? 

// My comment: NaN stands for Not a Number 

// * Check if `"hello"` is NaN. 
console.log(typeof "hello");
console.log("hello" / 2);

// * Check if `3` is NaN.
console.log(typeof 3);
console.log(3 * "hello");

// * What is the type of NaN?

// My comment: NaN is a value which isn't representing a number


// #### 2. Rounding 
// ```javascript
// console.log(0.1 * 0.2);
// ```
// The above in JavaScript will print: `0.020000000000000004`. 
// Use a method to make sure that only `0.02` is printed.

console.log(0.1 * 0.2.toFixed(2));


// #### 3. Infinity
// * Divide Infinity by `0`. 
// * Divide Infinity by Infinity. 
// * Divide `1` by `0`.
