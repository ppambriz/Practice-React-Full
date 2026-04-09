_FUNCIONES_

**Definir funciones**
//Entre parenticis se pone el parametro o parametros que vana recibir.
//Funcion normal
function greet(name: string) {
retunr `Hola ${ name }`
}

//Funcion flecha
const getUser = () => {
return {
uid: "ABC-123",
username: "El_papi23",
};
};

//Declaracion simplificada con flecha

//Declaracion simplificada con flecha con mas datos, encerrar entre parentisis para que lo tome como uno solo.
const getUser2 = () => ({
uid: "ABC-123",
username: "El_papi23",
});
const greet = (name: string) => `Hola ${name}`;//Se tiene que definir el tipo de retorno

**Llamar a la funcion**
const message = greet('Goku');//Se le enmvia el para metro que pide la funcion del tipo string.

**Definir el tipo del valor de retorno**
function greet(name: string): string {
return `Hola ${name}`
}
