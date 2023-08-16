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
function saveToLocalStorage(event){
event.preventDefault();
const name=event.target.name.value;
const email=event.target.email.value;
localStorage.setItem('name', name);
localStorage.setItem('email', email)
}
