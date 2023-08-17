/*
// Click event
const submitButton = document.querySelector('.btn');
submitButton.addEventListener('click', () => {
  console.log('Button clicked');
  // Add your click functionality here
});

// Mouseover event
const items = document.querySelectorAll('.item');
items.forEach((item) => {
  item.addEventListener('mouseover', () => {
    console.log('Mouse over an item:', item.textContent);
    // Add your mouseover functionality here
  });

  item.addEventListener('mouseout', () => {
    console.log('Mouse out of an item:', item.textContent);
    // Add your mouseout functionality here
  });
});

// Form submission event
const myForm = document.getElementById('my-form');
myForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent form submission

  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');

  const nameValue = nameInput.value.trim();
  const emailValue = emailInput.value.trim();

  const msgDiv = document.querySelector('.msg');
  if (nameValue === '' || emailValue === '') {
    msgDiv.textContent = 'Please fill out all fields.';
  } else {
    console.log('Name:', nameValue);
    console.log('Email:', emailValue);
    msgDiv.textContent = 'User added successfully.';
    // Perform other necessary actions with the form values
  }
});
console.log('hello')
*/
function saveToLocalStorage(event) {
  event.preventDefault();
  const name = event.target.name.value;
  const email = event.target.email.value;
  //localStorage.setItem('name', name); notof use
  //localStorage.setItem('email', email);

  const obj = {
    name,
    email
  };
  localStorage.setItem(email, JSON.stringify(obj));
  showUsersOnScreen(obj)
  // Retrieve existing users from localStorage or initialize an empty array
  //let users = JSON.parse(localStorage.getItem(email)) || []; //parse will convrtnt to obj

  // Add the new user object to the array
  //users.push(obj);

  // Store the updated array back in localStorage
  
}
//In this corrected code, the obj variable contains the name and email properties for the current user. The code then retrieves the existing user array from localStorage (or initializes an empty array), pushes the obj into the array, and finally stores the updated array back in localStorage.

//Also, make sure that you're calling this saveToLocalStorage function in response to the appropriate user action, such as submitting a form.

function showUsersOnScreen(users) {
  const parentElem = document.getElementById('listofitems')
  const childElem = document.createElement('li')
  childElem.textContent = users.name + '  ' + users.email;
  parentElem.appendChild(childElem)
}



