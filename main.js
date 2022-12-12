let nombre = prompt("Ingrese su nombre")

let apellido = prompt("Ingrese su apellido")

alert (`Hola ${nombre} ${apellido}`)


let numero = prompt ("Ingrese su edad")


if (numero <= 18){
    alert("No puede pasar, es menor de edad") 
 }
else if (numero > 10){
    alert ("edad permitida")
}


const productos = [
    {nombre: "harina", precio: 50},
    {nombre: "galletas", precio: 110},
    {nombre: "gaseosa", precio: 160},
    {nombre: "leche", precio: 120},
    {nombre: "pizza", precio: 250},
];

let carrito = []

let seleccion = prompt ("Desea comprar algun producto")

while(seleccion != "si" && seleccion != "no"){
    alert("Porfavor ingrese si o no")
    seleccion = prompt ("Desea comprar algo si o no")
}

if(seleccion == "si"){
    alert("a continuacion nuestros productos")
    let todosLosProductos = productos.map(
        (producto) => producto.nombre + " " + producto.precio + "$");
    alert(todosLosProductos.join (" - "))
} else if (seleccion == "no"){
    alert("Gracias por venir, hasta pronto")
}

while (seleccion != "no") {
    let prodcuto = prompt("puedes agregar un producto a tu carrito :)")
    let precio = 0 

    if(prodcuto == "harina" || prodcuto == "galletas" || prodcuto == "gaseosa" || prodcuto == "leche" || prodcuto == "pizza"){
        switch(prodcuto){
        case "harina":
            precio = 50;
            break; 
        case "galletas":
            precio = 110;
            break; 
        case "gaseosa":
            precio = 160;
            break; 
        case "leche":
            precio = 120;
            break; 
        case "pizza":
            precio = 250;
            break; 
        default:
            break;
        }
    let unidades = parseInt(prompt("cuantas unidades quiere llevar"))

    carrito.push({productos, unidades, precio})
 }
    else {
        alert("no tenemos ese producto")
    }

    seleccion = prompt("desea seguir comprando")
    
    while (seleccion == "no"){
        alert("gracias por la compra, hasta pronto")
        carrito.forEach((carritoFinal) => {
            console.log(`productos: ${carritoFinal.producto}, unidades: ${carritoFinal.unidades}
            total a pagar ${carritoFinal.unidades * carritoFinal.precio}`)
        })
        break;
    }
}


const total = carrito.reduce((acc, el) => acc + el.precio * el.unidades, 0)
console.log (`el total a pagar es: ${total}`)
alert (`el total a pagar es ${total}`)