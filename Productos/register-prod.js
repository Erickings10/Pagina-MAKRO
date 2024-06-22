document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('input, textarea, select');
    const form = document.getElementById('product-form');
    const btnActualizar = document.getElementById('btn-actualizar');
    const btnCancelar = document.getElementById('btn-cancelar');
    const alerta = document.getElementById('alerta');
    const alertaActualizacion = document.getElementById('alerta-actualizacion');

    // EVENT LISTENER BOTONES
    btnActualizar.addEventListener('click', function () {
        if (validateForm()) {
            alertaActualizacion.classList.add('alerta-activa'); 
            setTimeout(() => {
                alertaActualizacion.classList.remove('alerta-activa'); 
            }, 1000);
        }
    });

    btnCancelar.addEventListener('click', function () {
        form.reset(); 
        inputs.forEach(input => {
            input.classList.remove('error'); 
        });
    });

    form.addEventListener('submit', function (event) {
        event.preventDefault(); 
        if (validateForm()) {
            alerta.classList.add('alerta-activa'); 
            setTimeout(() => {
                alerta.classList.remove('alerta-activa'); 
            }, 1000);
        }
    });




    // VALIDACION
    function validateForm() {
        let valid = true;
        inputs.forEach(input => {
            if (!input.value.trim()) {
                valid = false;
                input.classList.add('error'); 
                input.addEventListener('input', () => {
                    if (input.value.trim()) {
                        input.classList.remove('error'); 
                    } else {
                        input.classList.add('error'); 
                    }
                });
            }
        });

        if (!valid) {
            alert('Por favor, complete todos los campos.'); 
        }

        return valid;
    }
});
