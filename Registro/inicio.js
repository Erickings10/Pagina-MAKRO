document.addEventListener('DOMContentLoaded',function(){
    const inputs = document.querySelectorAll('input');
    const form = document.getElementById('Form');
    const btnIngresar = document.getElementById('btn_Ingresar');
    const alerta = document.getElementById('alerta');

    form.addEventListener('submit', function(event){
        event.preventDefault();
        if(validarForm()){
            alerta.classList.add('alerta-activa');
            setTimeout(() => {
                alerta.classList.remove('alerta-activa')
            }, 2000);
        }
    });

    function validarForm(){
        let valid = true;
        inputs.forEach(input => {
            if(!input.value.trim()){
                valid = false;
                input.classList.add('error');
                input.addEventListener('input',()=>{
                    if(input.value.trim()){
                        input.classList.remove('error');
                    }else{
                        input.classList.add('error')
                    }
                });
            }
        });
        if(!valid){
            alert('Complete los campos');
        }
        return valid;
    }
})