// function to check if a string is a palindrome
function palindrome(str) {
  // remove non-alphanumeric characters and convert to lowercase
  str = str.replace(/[^0-9a-z]/gi, '').toLowerCase();
  // reverse the string and compare with original
  return str === str.split('').reverse().join('');
}

// test the function with some sample inputs
console.log(palindrome("A man, a plan, a canal: Panama")); // true
console.log(palindrome("race a car")); // false
console.log(palindrome("Was it a car or a cat I saw?")); // true
console.log(palindrome("No 'x' in Nixon")); // true

// display the result on the HTML page
document.getElementById("result").innerHTML = palindrome("A man, a plan, a canal: Panama");
