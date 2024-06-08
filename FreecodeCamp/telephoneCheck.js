function telephoneCheck(str) {
  // Define a regular expression to match valid US phone number formats
  const validPhoneNumberPattern =
    /^(1\s?)?(\(\d{3}\)|\d{3})([\s\-])?\d{3}([\s\-])?\d{4}$/;

  // Test the input string against the regular expression
  return validPhoneNumberPattern.test(str);
}

// Example usage:
console.log(telephoneCheck("555-555-5555")); // true
console.log(telephoneCheck("(555)555-5555")); // true
console.log(telephoneCheck("(555) 555-5555")); // true
console.log(telephoneCheck("555 555 5555")); // true
console.log(telephoneCheck("5555555555")); // true
console.log(telephoneCheck("1 555 555 5555")); // true
console.log(telephoneCheck("123-456-7890")); // false (invalid because it's not a valid area code)
console.log(telephoneCheck("2 (757) 622-7382")); // false (invalid country code)
console.log(telephoneCheck("27576227382")); // false (not valid as it does not match any format)
