var ingresar = document.getElementById("botones")
ingresar.addEventListener("click", calculoController);
var Buscar = document.getElementById("buscar2")
Buscar.addEventListener("click", calculoController2);


function calculoController(event) {
    event.preventDefault();

    // Recibir datos de caja de texto
    let numeroIngresado = parseInt(document.querySelector("#txtNumero").value);
    let numeroIngresadoInput = document.querySelector("#txtNumero");

    // Validar si la caja de texto está vacía
    if (numeroIngresadoInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;  // Detener la ejecución si está vacía
    }

   

    numeroTDA(numeroIngresado);
}
function calculoController2(event) {
    event.preventDefault();

    // Recibir datos de caja de texto
    let buscarValor = parseInt(document.querySelector("#buscar").value);
    let buscarValorInput = document.querySelector("#buscar");

    // Validar si la caja de texto está vacía
    if (buscarValorInput.value.trim() == "") {
        alert("Ingresa un valor en la caja de texto");
        return;  // Detener la ejecución si está vacía
    }
    

   

    searchElement(buscarValor);
}
let array = [];


const numeroTDA = (numeroIngresado) => {
    const length = numeroIngresado;
    array = [];

    for (let i = 0; i < length; i++) {
        const element = parseInt(prompt('Ingrese el elemento #' + (i + 1)));
        array.push(element);
    }

    array.sort(function(a, b) {
        return a - b;
    });
 
     // Mostrar el input para buscar el elemento
     document.getElementById('buscar').style.display = 'block';
     document.getElementById('buscar2').style.display = 'block';
     document.getElementById('icono').style.display = 'block';

    
   
}
function searchElement(buscarValor) {
    const target = buscarValor;
    const index = binarySearch(target);
    const outputDiv = document.getElementById('resultado2');
    const resultadoDiv = document.getElementById('resultado');
    resultadoDiv.innerHTML = ` [${array.join(', ')}]`;

    if (index !== -1) {
        outputDiv.textContent = `El elemento ${target} se encuentra en la posición ${index}.`;
    } else {
        outputDiv.textContent = `El elemento ${target} no se encuentra en el array.`;
    }
}

function binarySearch(target) {
    let left = 0;
    let right = array.length - 1;

    while (left <= right) {
        const mid = Math.floor((left + right) / 2);

        if (array[mid] === target) {
            return mid;
        } else if (array[mid] < target) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return -1;
}




