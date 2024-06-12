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

/*
document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    document.body.classList.toggle('light-theme');
});

// Configuración inicial del tema
window.onload = function() {
    if (!document.body.classList.contains('light-theme') && 
        !document.body.classList.contains('dark-theme')) {
        document.body.classList.add('light-theme');
    }
};
*/