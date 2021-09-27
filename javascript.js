const cuentas = [{
        nombre: "Kris",
        amount: 200,
    },
    {
        nombre: "Shir",
        amount: 200,
    },
    {
        nombre: "Maui",
        amount: 200,
    }
]


function login(form) {
    if (form.u.value == "senseis") {
        if (form.c.value == "12345") {
            location = "principal.html"
        } else {
            alert("error en password")
        }
    } else {
        alert("error en usuario")
    }
}


function validarCantidadAIngresar(cantidad, cantidadAnterior, valueToMove) {

    if (cantidad >= 999) {
        alert("La cantidad exede el valor maximo de cuentas personales");
        return document.getElementById(valueToMove).value = cantidadAnterior;
    } else if (cantidad <= 0) {
        alert("La cantidad exede el valor minimo de cuentas personales");
        return document.getElementById(valueToMove).value = cantidadAnterior;
    } else {
        alert("La cantidad agregada con exito");
        return document.getElementById(valueToMove).value = cantidad;
    }
}

function funcion() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C1').value);
    var cantidadUpdated = (cantidadToUpdate + cantidadOriginal)
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C1');
}

function funcion1() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C2').value);
    var cantidadUpdated = (cantidadToUpdate + cantidadOriginal);
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C2');
}

function funcion2() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C3').value);
    var cantidadUpdated = (cantidadToUpdate + cantidadOriginal);
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C3');
}

function funcion3() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C1').value);
    var cantidadUpdated = (cantidadOriginal - cantidadToUpdate);
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C1');
}

function funcion4() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C2').value);
    var cantidadUpdated = (cantidadOriginal - cantidadToUpdate);
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C2');
}

function funcion5() {
    var cantidadToUpdate = parseInt(document.getElementById('cantidad').value);
    var cantidadOriginal = parseInt(document.getElementById('C3').value);
    var cantidadUpdated = (cantidadOriginal - cantidadToUpdate);
    validarCantidadAIngresar(cantidadUpdated, cantidadOriginal, 'C3');
}