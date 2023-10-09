1. Write the correct answer from the following options and give an explanation (2-5 lines).
   <br>
   `let greeting;
   greetign = {};
   console.log(greetign);`
   <br>
   A: {}
   <br>
   B: ReferenceError: greetign is not defined
   <br>
   C: undefined
   ,<br>
Answer : A ;
<br>
Explanation :
The initial value of greeting is declared as an empty { }. Then when we make console log to the greeting then we get the output as an empty { }.
---
2. Write the correct answer from the following options and give an explanation (2-5 lines).
   <br>
   `function sum(a, b) {
   return a + b;
   }
   sum(1, "2");`
   <br>
   A: NaN
   <br>
   B: TypeError
   <br>
   C: "12"
   <br>
   D: 3
    <br>
Answer : C ;
<br>
Explanation :
At first we declared a sum function where passed a number and a string. After passing into the function, the function returning the calculation of sum of a + b. Because a number and a string can not be added. So the function is converting the result into string as output
---
<br>
3. Write the correct answer from the following options and give an explanation (2-5 lines).
 <br>
 const food = ["🍕", "🍫", "🥑", "🍔"];
  <br>
const info = { favoriteFood: food[0] };
 <br>
info.favoriteFood = "🍝";
 <br>
console.log(food);
<br>
A: ['🍕', '🍫', '🥑', '🍔']
<br>
B: ['🍝', '🍫', '🥑', '🍔']
<br>
C: ['🍝', '🍕', '🍫', '🥑', '🍔']
<br>
D: ReferenceError
 <br>
Answer : A ;
 <br>
Explanation :
At first we are initializing an array of food. Then we are initializing an object with a property favoriteFood. Then setting the set to the first index of the food array. Then changing the value of info.favoriteFood. After this if we make console log the food array. It will not be changed the items of food array. Because we are modifying the info object, not the food array. 

--- 

4. Write the correct answer from the following options and give an explanation (2-5 lines).
   <br>
   `function sayHi(name) {
  return Hi there, ${name};
}
console.log(sayHi());`
<br>
   A: Hi there,
   <br>
   B: Hi there, undefined
   <br>
   C: Hi there, null
   <br>
   D: ReferenceError
 <br>
Answer : B ;
 <br>
Explanation :
In the code, the sayHi function expects a 'name' parameter. but when we call sayHi() without providing any argument, the 'name' variable inside the function doesn't have a value assigned to it. So, when we call sayHi() without an argument, the function returns "Hi there, undefined"

---

5. Write the correct answer from the following options and give an explanation (2-5 lines).
<br>
   `let count = 0;
const nums = [0, 1, 2, 3];
nums.forEach((num) => {
if (num) count += 1;
});
console.log(count);`
<br>
<br>
A: 1
<br>
B: 2
<br>
C: 3
<br>
D: 4
 <br>
Answer : C ;
 <br>
Explanation :
In this code, a variable count is initialized to 0, and there is an array nums containing the values [0, 1, 2, 3]. The forEach array method is used to iterate over each items of the array. Inside the callback function, it checks whether the num is there or not as a value.which is truthy For values 1, 2, and 3, the condition is true, and count is incremented by 1 each time. Therefore, after through all items in the array index, the latest items in index result value 3

---
