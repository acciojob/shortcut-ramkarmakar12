function shortcut(s1, s2) {
  // your code here
	let result = "";
  // Check if s1 is not empty, then add the first character
  if (s1.length > 0) {
    result += s1[0];
  }

  // Check if s2 is not empty, then add the first character
  if (s2.length > 0) {
    result += s2[0];
  }

  // Return the result
  return result;
}

// Do not change the code below.
const s1 = prompt("Enter s1:");
const s2 = prompt("Enter s2:");
alert(shortcut(s1, s2));
