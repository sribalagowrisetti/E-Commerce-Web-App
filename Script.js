let currentUser = null;

const products = [
{id:1,name:"Laptop",price:50000},
{id:2,name:"Phone",price:25000},
{id:3,name:"Headphones",price:3000}
];

let cart = [];

function login(){
const username=document.getElementById("username").value;
const role=document.getElementById("role").value;

currentUser={username,role};

document.getElementById("userInfo").innerHTML=
`Logged in as ${username} (${role})`;
}

function loadProducts(){
const productDiv=document.getElementById("products");

products.forEach(product=>{
const div=document.createElement("div");

div.innerHTML=`
<h3>${product.name}</h3>
<p>₹${product.price}</p>
<button onclick="addToCart(${product.id})">Add To Cart</button>
`;

productDiv.appendChild(div);
});
}

function addToCart(id){
const item=products.find(p=>p.id===id);
cart.push(item);

document.getElementById("cart").innerHTML=
cart.map(i=>`<li>${i.name}</li>`).join("");
}

function checkout(){
alert("Order Placed Successfully");
cart=[];
document.getElementById("cart").innerHTML="";
}

loadProducts();
