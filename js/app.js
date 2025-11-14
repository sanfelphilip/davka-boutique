let cart = JSON.parse(localStorage.getItem('cart')) || [];
document.getElementById("cart-count").innerText = cart.length;

const demoProducts = [
  {id:1, nombre:"Camiseta Blanca Premium", precio:25},
  {id:2, nombre:"Pantalón Clásico Negro", precio:40},
  {id:3, nombre:"Sudadera Elegante Unisex", precio:35}
];

const list = document.getElementById("product-list");
if(list){
  demoProducts.forEach(p=>{
    let div=document.createElement("div");
    div.className="card";
    div.innerHTML=`<h3>${p.nombre}</h3><p>$${p.precio}</p>
    <button onclick="addToCart(${p.id})">Agregar al carrito</button>`;
    list.appendChild(div);
  });
}

function addToCart(id){
  cart.push(id);
  localStorage.setItem("cart",JSON.stringify(cart));
  document.getElementById("cart-count").innerText=cart.length;
}
