var item = document.getElementsByClassName('.grid');
var add = document.getElementsByClassName('btn');
console.log(add);

for (let i=0;i<add.length;i++){
    var bttn=add[i];
    bttn.addEventListener('click',addToCard);
   
}
function addToCard(event){
    var bttn=event.target;
    var item=bttn.parentElement.parentElement;
    // console.log(item);
    var title=item.getElementsByTagName('h4')[0].innerText;
    // console.log(title); 
    var price=item.getElementsByTagName('h5')[0].innerText;
    // console.log(price);
    var image=item.getElementsByClassName('photo')[0].src;
    console.log(image);

ligne (title,price, image);


} 
function ligne(title,price,image){
    var newCart=document.createElement('div');
    newCart.classList.add('cart');
    var list=document.getElementsByClassName('ligne')[0];
    var content=` <div class='itemss'> <img class='mini'src=${image}> </img> <h4 class='tit'> ${title} </h4> <input min="0" value='1' id='qte' class="case" type="number" /> <h6 class="prix" > ${price} </h6> <button type="button" class="btn btn-outline-danger">Remove</button></div> `
    console.log(list);
    newCart.innerHTML=content;
    list.append(newCart); 
    // console.log(list);
    newCart.getElementsByClassName('case')[0].addEventListener('change',quantityChange);
    newCart.getElementsByClassName('btn-outline-danger')[0].addEventListener('click',removeItem);
    sum();

}

function quantityChange(event){
   var input=event.target;
   console.log(input.value);
   sum();
}

function removeItem(event){
    var buttonClicked=event.target;
    buttonClicked.parentElement.parentElement.remove();
    sum();
}

function sum(){
    var cartItems=document.getElementsByClassName('cart');
    var total=0;
    

    for (let i=0; i<cartItems.length;i++){
        var ct=cartItems[i];
        var price=ct.getElementsByClassName('prix')[0].innerText;
        var qt=ct.getElementsByClassName('case')[0].value;
        var newPrice=1;
        var x=parseInt(price);
        newPrice=qt*x;
        // console.log(newPrice+'dt');
        total+=newPrice;
    }
    
    
    if (total>0){document.getElementsByClassName('total')[0].innerText='Total='+total+'dt';
    ct.getElementsByClassName('prix')[0].innerText=(newPrice+'dt');  }
    else(document.getElementsByClassName('total')[0].innerText="Total");

}
$(".heart.fa").click(function() {
    $(this).toggleClass("fa-heart fa-heart-o");
  });






 





