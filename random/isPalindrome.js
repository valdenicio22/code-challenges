/* String.prototype.isPalindrome = function(){
  let str = this.valueOf()
  let reversedStr = '';

  for(let i=str.length - 1;i>=0;i--){
    reversedStr += str[i];
  }

  return reversedStr === str;
}
*/

String.prototype.isPalindrome = function(){
  let reversedStr = this.valueOf().split('').reverse().join('');
  return this.valueOf() === reversedStr;
}


console.log("racecar".isPalindrome()); // true
console.log("abba".isPalindrome()); // true
console.log("abba".isPalindrome()); // true
console.log("aba".isPalindrome()); // true
console.log("abbcbba".isPalindrome()); // true
console.log("abbccba".isPalindrome()); // false
console.log("abdccba".isPalindrome()); // false
