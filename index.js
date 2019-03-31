// Code your solution here!
function printString(string) {
  console.log(string[0])
  if (string.length > 1) {
    var newString = string.slice(1)
    printString(newString)
  } else {
    return true
  }
}

function reverseString(string) {
  
}