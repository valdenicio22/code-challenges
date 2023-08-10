/*
  Write a function that accepts a string as an argument.

  THe String is supposed to be HTML, but all the div elements are
  missing their closing tags Eg. (<div> this is a <div>) * mising the final slash
  the function's job is to find and close all the divs in the provided HTML String

  The function should return the entire corrected string.
*/

// function closingTag (str){
//   if(!str || typeof str !== 'string') return '';
//   let output = '';
//   for (let i=0;i<str.length;i++){
//     output += str[i];
//     if(str[i] === '<' && str[i+1] == 'd'){
//       output += '/'
//     }
//   }
//   return output
// }

function closingTag (str){
  if(!str || typeof str !== 'string') return '';
  let search = '<div>';
  let output = '';
  let match = false;
  for (let i=0;i<str.length;i++){
    output += str[i];
    if(match && str[i] === '<' && str[i+1] === '/' && str[i+2] === 'd') {
      match = false;
      continue;
    }
    if(str[i] === '<' && str[i+1] === 'd'){
      const check = str.substring(i, i + 5);

      if(check === search){
        if(match){
          output += '/';
          match = false;
          continue
        }
        match = true;
      }
    }
  }
  return output
}

console.log(closingTag('<div> Hello World <div>'));
console.log(closingTag('<div><p> Hello World </p><div>'));
console.log(closingTag('<div><div><div>'));
console.log(closingTag('<div><div<div>'));
console.log(closingTag('<div></div><div>'));
console.log(closingTag('<'));
console.log(closingTag('<div><div'));
console.log(closingTag('<div>'));