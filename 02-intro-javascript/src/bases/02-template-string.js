const nameUser = "Hola";
const lastname = "Mundo";
const completeName = `
${nameUser} 
${lastname}
${1 + 2}`;

console.log(completeName);

function getSaludo(){
    return "Holaaa mmm";
}

console.log(`Este es un texto: ${getSaludo()}`);
