let cart=0;
document.addEventListener('click',e=>{
 if(e.target.classList.contains('add')) {
   cart++; document.getElementById('cart-count').innerText=cart;
 }
});
document.getElementById('productos')?.insertAdjacentHTML('beforeend',`
<div class='card'>
  <h3>Camisa Premium</h3>
  <p>$25</p>
  <button class='add'>Añadir al carrito</button>
</div>
<div class='card'>
  <h3>Pantalón Clásico</h3>
  <p>$40</p>
  <button class='add'>Añadir al carrito</button>
</div>
`);
