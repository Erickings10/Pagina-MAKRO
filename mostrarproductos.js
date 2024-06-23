const lista=document.querySelector("[data-productos]")

function mostrarAB(){
    const producto=document.createElement("li");
    producto.innerHTML=`
    <li>
        <p> hola </p>    
    </li>
    `
    return producto
}

lista.addEventListener("click",mostrarP())