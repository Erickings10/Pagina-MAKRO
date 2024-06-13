document.getElementById("CambioTema").addEventListener("click", function() {
    document.body.classList.toggle("tema-oscuro");
    document.body.classList.toggle("tema-claro");
});
window.onload = function(){
    if(!document.body.classList.contains("tema-claro") && 
        !document.body.classList.contains("tema-oscuro")){
        document.body.classList.add("tema-claro");
    }
};
