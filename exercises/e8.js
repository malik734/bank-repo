
// EXERCISE 8
// Return an array with a bank account object with the greatest balance value
// Array example: bankAccounts in /data/data.js
// getClientWithGreatestBalance(bankAccounts) => [{ name: 'SomeName', balance: 32, ... }]

import { bankAccounts } from "../data/data";


export function getClientWithGreatestBalance(array) {
let maxBalance = null;

for (let acc of array) {
  if (!maxBalance || acc.balance > maxBalance.balance) {
    maxBalance = acc;
  }
}
return maxBalance && maxBalance.balance > 0 ? [maxBalance] : [];
};
  
  
 //  return array.reduce((acc, curr) => {
 //   if (curr.balance > acc[0].balance) {
 //     acc = [curr];
//    } else if (curr.balance === acc[0].balance) {
//      acc.push(curr);
//    }
//    return acc;
//  }, [{ balance: -Infinity }]);
// }



// === TEST YOURSELF ===
// Once you're finished run the test with "npm run test-8"
// If the test has all tests passed, switch to the next exercise file
// If any of the tests fails, refactor the code and run the test command after you've fixed the function
