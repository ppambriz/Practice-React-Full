// function greet(name: string): string {
//     return `Hola ${name}`
// }

// const greet2 = (name: string) : string =>{
//     return `Hola ${name}`;
// }

// const message = greet('Pepe');
// const message2 = greet2('Pepe2')

// console.log(message, message2);

const getUser = () => {
  return {
    uid: "ABC-123",
    username: "El_papi23",
  };
};

const getUser2 = () => ({
  uid: "ABC-123",
  username: "El_papi23",
});

const greet = (name: string) => `Hola ${name}`;

const user = getUser();

console.log(user);
