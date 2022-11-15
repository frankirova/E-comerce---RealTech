let celulares = document.getElementById("celulares")
console.log(celulares)
fetch('/celulare/celulares.json')
    .then((response) => response.json())

    .then ((listaProductos) => {
        
        listaProductos.forEach((producto)=>{
            let card = document.createElement ("div");
    card.className = "card-producto";
    card.innerHTML = `<img src="${producto.img}"></img>
    <p class="titulo-card">${producto.marca}</p>
    <ul class="lista-servicios">
        <li class="item-lista-internet">${producto.almacenamiento}</li>
        <li class="item-lista-internet">${producto.procesador}</li>
        <li class="item-lista-internet">${producto.ram}</li>
        <li class="item-lista-internet">${producto.pantalla}</li>
        <li class="item-lista-internet">${producto.almacenamiento}</li>
    </ul> 
    <p class="fs-5"><b>${producto.precio}</b></p> 
    <button id="agregar ${producto.id}"class="btn-agregar btn btn-success">Agregar al carrito</button> `;
    
    celulares.appendChild(card);
    const boton = document.getElementById(`agregar ${producto.id}`);
})
    
})

  
    