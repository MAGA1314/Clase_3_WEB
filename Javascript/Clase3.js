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


//--------------------------------------------------> Primer Seguimiento
// 1) sin parametros
const funcionSinParametros = () => {
    console.log("Esta es una función sin parámetros");
  }; 
  funcionSinParametros();
// 2) 1 parametro
const funcionConParametro = parametro => {
    console.log("Esta es una funcion  de un", parametro);
}
  funcionConParametro("PARAMETRO");
// 3) 2 o mas parametros
const funcionVariosParametros = (parametro1, parametro2, parametro3, parametro4) =>{
    console.log(parametro1, parametro2, parametro3, parametro4)
}
funcionVariosParametros("¡", "Hola", "Mundo", "!")
 
// Declarar 5 variables con let y const
// Declaración de variable con let (mutable)
let variable1 = "Esta variable puede ser modificada";
console.log(variable1);
variable1 = "Se modificó la variable";
console.log(variable1);

let variable2 = "¿Como va todo?";
console.log(variable2);
variable2 = "¿Como estas?";
console.log(variable2)

let variable3 = "Buenas noches";
console.log(variable3);
// variable3 = ("Buenos dias");
// console.log(variable3)

// Declaración de variable con const (inmutable)
const variableInmutable1 = "Esta variable no puede ser modificada";
console.log(variableInmutable1);

const persona = {
    Nombre: "Miguel",
    Apellido: "Garcia",
    Telefono: 321
}
console.log(persona);
// Esto generará un error, ya que no se puede reasignar el objeto completo
// persona = { Nombre: "Maria", Apellido: "Zapata", Telefono: 123 };
// Pero se pueden modificar las propiedades del objeto
persona.Nombre = "Maria";
persona.Apellido = "Zapata";
persona.Telefono = 123;
console.log(persona);


const mensaje = "Hola, mundo";
console.log(mensaje);
// Se Puede trabajar con la cadena de diferentes maneras
const mensajeModificado = mensaje.toUpperCase();
console.log(mensajeModificado);

const numeros = [1, 2, 3, 4, 5];
console.log(numeros);
// Esto generará un error, ya que no se puede reasignar el array completo
// numeros = [6, 7, 8, 9, 10];
// Pero se puede modificar los elementos del array
numeros[0] = 6;
numeros[1] = 7;
console.log(numeros);
