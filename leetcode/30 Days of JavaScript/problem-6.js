/** Filter Elements from Array
 * Given an integer array arr and a filtering function fn, return a filtered array filteredArr.

The fn function takes one or two arguments:

arr[i] - number from the arr
i - index of arr[i]
filteredArr should only contain the elements from the arr for which the expression fn(arr[i], i) evaluates to a truthy value. A truthy value is a value where Boolean(value) returns true.

Please solve it without the built-in Array.filter method.

 

Example 1:

Input: arr = [0,10,20,30], fn = function greaterThan10(n) { return n > 10; }
Output: [20,30]
Explanation:
const newArray = filter(arr, fn); // [20, 30]
The function filters out values that are not greater than 10
Example 2:

Input: arr = [1,2,3], fn = function firstIndex(n, i) { return i === 0; }
Output: [1]
Explanation:
fn can also accept the index of each element
In this case, the function removes elements not at index 0
Example 3:

Input: arr = [-2,-1,0,1,2], fn = function plusOne(n) { return n + 1 }
Output: [-2,0,1,2]
Explanation:
Falsey values such as 0 should be filtered out
 

Constraints:

0 <= arr.length <= 1000
-109 <= arr[i] <= 109
 */

// solution
var filter = function (arr, fn) {
  const filteredArr = [];

  for (let i in arr) {
    if (fn(arr[i], Number(i))) filteredArr.push(arr[i]);
  }
  return filteredArr;
};

const result = filter([0, 10, 20, 30], function greaterThan10(n) {
  return n > 10;
});
const result2 = filter([1, 2, 3], function firstIndex(n, i) {
  return i === 0;
});
const result3 = filter([-2, -1, 0, 1, 2], function plusOne(n) {
  return n + 1;
});

console.log(result); // Output: [20, 30]
console.log(result2); // Output: [1]
console.log(result3); // Output: [-2, 0, 1, 2 ]
