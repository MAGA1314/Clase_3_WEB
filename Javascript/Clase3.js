let nuevoUsuario;
let user = "Miguel";

console.log(user);
console.log();

//Operador ternario

user === "Pedro"? console.log("erdadero"): console.log("Falso");

//const es parecido a constante
const pi = 3.1416;
//trato de cambiar el valor da error
// pi = 26

//metodos propios del lenguaje
let PI_Dos;
PI_Dos = Math.pi;
user.includes("P");
console.log(user.length);

//metodos o funciones
//arrow function
const saludarUsuario=() =>{
    return "Hola Juan";
}
const saludarUsuariosaludarUser = user =>{
    return "Hola", user;
}
const sumarDatos = (numeroOne, numeroTwo) =>{
    return numeroOne+numeroTwo;
}
console.log(sumarDatos(1.0, '2'));

//instancia de una funcion hace lo mismo
let tres = saludarUsuario;
console.log(tres("Pedro"));

//ciclos igual 
for(let i = 0; i < 10; i++){
    console.log("Numero",i)
}

//Funciones (forma anterior)
const wave = function(){
}

/*
Funciones(arrow function)
1) sin parametros
2) 1 parametro
3) 2 o mas parametros

Declarar variables con let y const
5 

*/