// // // //single element
// // // //1-
// // // console.log(document.getElementById('my-form'))
// // //        // or we can write this as below
// // // //const form=document.getElementById('my-form');
// // // //console.log(form)

// // // //2-
// // // console.log(document.querySelector('.container'))
// // // console.log(document.querySelector('h1')) // since it is for single element and if there are more than one h1 then also it will select only first h1

// // //muliple element

// // //console.log(document.querySelectorAll('.item'));   // in query selector we can put class tag id anytjing so here we will use (.item)
// // console.log(document.getElementsByClassName('item'));
// // console.log(document.getElementsByTagName('li'));

// // const items=document.querySelectorAll('.item');
// // items.forEach((item)=>console.log(item));

// // const ul=document.querySelector('.items');

// // // ul.remove();

// //  //ul.lastElementChild.remove();
// // ul.firstElementChild.textContent='Hello'
// //  ul.firstElementChild.style.color='green'
// //  ul.children[1].style.color='yellow '

// const btn=document.querySelector('.btn');

// btn.addEventListener('mouseout',(e)=>{  /// (click-mouseover-mouseout)
//   e.preventDefault();
//   //console.log(e.target);
//   document.querySelector('#my-form').style.background='yellow';
//  document.querySelector('body').classList.add('bg-dark');
   
// });


const myForm=document.querySelector('#my-form');
const nameInput=document.querySelector('#name');
const emailInput=document.querySelector('#email');
const msg=document.querySelector('.msg');
const userList=document.querySelector('#users');

myForm.addEventListener('submit',onSubmit);

function onSubmit(e){
  e.preventDefault();

  if(nameInput.value ===''  || emailInput.value ===''){
   msg.classList.add('error');
    msg.innerHTML='please enter fields';

    setTimeout(()=>msg.remove(),3000)
  }else{
    const li=document.createElement('li');
    li.appendChild(document.createTextNode(`${nameInput.value}:${emailInput.value}`));
    userList.appendChild(li)

    //clear fields
    nameInput.value='';
    emailInput.value='';
    
  }
}

 