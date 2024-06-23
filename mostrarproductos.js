const lista=document.querySelector(".lista-item")

function mostrarAB(alimento){
    
    const producto=document.createElement("li");
    producto.innerHTML=`
    <li>
        <p> hola </p> 
    </li>
           
    `
    alimento.appendChild(producto);

    return producto
    
}

lista.addEventListener("click", () => mostrarAB(alimento));