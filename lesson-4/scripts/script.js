/* Question 1
  - Write a loop that logs the numbers 0 to 7
 */

for (var i = 0; i <= 7; i++) {
  console.log(i);
}

/* Question 2
  - Write a loop that logs the numbers 10 to 1. Count down from 10 to 1.
*/

for (var i = 10; i >= 1; i--) {
  console.log(i);
}

/* Question 3
  - Write a loop that counts from 10 to 20,
  and log only the odd numbers. 11, 13, 15, etc
  Here we use the reminder to see if i returns a reminder and if it do 
  log the i to the console. 
*/

for (var i = 10; i <= 20; i++) {
  if (i % 2 !== 0) {
    console.log(i);
  } 
}
