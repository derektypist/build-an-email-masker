function maskEmail(email) {
  const atIndex = email.indexOf("@");
  const stars = atIndex - 2;
  return `${email.slice(0,1)}${"*".repeat(stars)}${email.at(atIndex-1)}${email.slice(atIndex)}`;
}

// Declare Variable
let email = "freecodecamp@example.com";

// Call function and log to console
console.log(maskEmail(email));
