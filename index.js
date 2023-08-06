
// slice() extracts a section of the string and retuen s anew string withoud modifyng the original string 
  let fullName = "Edward Michira";
  let firstName;
  let lastName;

//   firstName = fullName.slice(0, 6);
//   lastName = fullName.slice(3)

    firstName = fullName.slice(0, fullName.indexOf(" "));
  lastName = fullName.slice(fullName.indexOf(" ")+1);

  console.log(firstName);
  console.log(lastName);

