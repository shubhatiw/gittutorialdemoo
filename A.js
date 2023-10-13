let myform=document.getElementById("form");
myform.addEventListener('submit',onsubmit);


function onsubmit(e){
    e.preventDefault();
    let obj={
        item:document.getElementById('itemname').value,
        description:document.getElementById('des').value,
        price:document.getElementById('price').value,
        quantity:parseInt(document.getElementById('quantity').value)
    }
    axios.post('https://crudcrud.com/api/f2536a256e2043759e4e97ea44e8fdc0/GeneralStore',obj)
    .then(response=>displayusers(response.data))
    .catch(err=>console.log(err));
}
window.addEventListener('DOMContentLoaded',()=>{
    axios.get('https://crudcrud.com/api/f2536a256e2043759e4e97ea44e8fdc0/GeneralStore')
  .then(dt=>{
    let len=dt.data.length
    for(let i=0;i<len;i++){
      displayusers(dt.data[i]);
     }
  })
  .catch(err=>console.log(err));
})
function displayusers(obj){
    var parent=document.getElementById('ule')
  var child=document.createElement('li');
  child.textContent=`${obj.item} - ${obj.description} - ${obj.price} - ${obj.quantity}`
  var BuyOne=document.createElement('button');
  BuyOne.textContent='BuyOne'
  var BuyTwo=document.createElement('button');
  BuyTwo.textContent='BuyTwo'
  var BuyThree=document.createElement('button');
  BuyThree.textContent='BuyThree';
  child.appendChild(BuyOne)
  child.appendChild(BuyTwo);
  child.appendChild(BuyThree);
  parent.appendChild(child);
  let one=false;
  let two=false;
  let three=false;
  BuyOne.onclick=()=>{
    one =true;
    buy();
  }

  BuyTwo.onclick=()=>{
    two =true;
    buy();
  }
  BuyThree.onclick=()=>{
    three=true;
    buy();
  }
let buy =() => {
  let updatedquantity;
  if(one==true ){
    if(obj.quantity>0){
    updatedquantity=obj.quantity-1;
    }
    else{
      one=false;
    }
  }
  else if(two==true){
    if(obj.quantity>1){
      updatedquantity=obj.quantity-2;
      }
      else{
        two=false;
      }
  }
  else if(three==true){
    if(obj.quantity>2){
      updatedquantity=obj.quantity-3;
      }
      else{
        three=false;
      }
  }
  buttonid =  obj._id // Capture the _id value
  if(one==true || two==true || three==true){
  obj={
    item:obj.item,
    description:obj.description,
    price:obj.price,
    quantity:updatedquantity
  }
   axios.put(`https://crudcrud.com/api/f2536a256e2043759e4e97ea44e8fdc0/GeneralStore/${buttonid}`, obj)
      .then(response => {
        location.reload()
      })
      .catch(err => console.log(err));
      one=false;
      two=false;
      three=false;
  }
  else{
    alert("Quantity out of stock,Need to be ordered")
  }
}
};