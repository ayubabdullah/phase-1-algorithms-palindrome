function isPalindrome(word) {
  // Write your algorithm here
  const forward = word.split("");
  let backward = word.split("").reverse();
  for (let i = 0; i < word.length; i++) {
    if (forward[i] !== backward[i]) return false;
  }

  return true;
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

  console.log("Expecting: false");
  console.log("=>", isPalindrome("car"));
}

module.exports = isPalindrome;
