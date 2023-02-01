function isPalindrome(word) {
  // Write your algorithm here
  
  return word === word.split('').reverse().join('');
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");
  console.log("Expecting: true");
  console.log("=>", isPalindrome("rotor"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("car"));
  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("Laptop"));
}

module.exports = isPalindrome;
