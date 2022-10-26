const precioEmpanada = 180;
const precioMilanesa = 900;
const precioPizza = 800;
const precioPastas = 750;
const precioPostre = 450;
let vuelto;

function restar(num1,num2) {
    return num1 - num2;
}


   
for (let index = 0; index < 4; index++) {
    const PRODUCTO = prompt(`Ingrese por favor el numero de lo que quiera consumir
1- Empanadas
2- Milanesas
3- Pizza
4- Pastas
5- Postre`);
const dinero = prompt(`Con cuanto dinero abona?`);

    if (PRODUCTO == 1) {
        console.log(restar(dinero,precioEmpanada), ` es su vuelto`);
    } else if (PRODUCTO == 2) {
        console.log(restar(dinero,precioMilanesa), ` es su vuelto`);
    }else if (PRODUCTO == 3){
        console.log(restar(dinero,precioPizza), ` es su vuelto`);
    }else if (PRODUCTO == 4){
        console.log(restar(dinero,precioPastas), ` es su vuelto`);
    }else if (PRODUCTO == 5){
        console.log(restar(dinero,precioPostre), ` es su vuelto`);
    }else{
        console.log(`no entiendo su respuesta`)
    }
    
}