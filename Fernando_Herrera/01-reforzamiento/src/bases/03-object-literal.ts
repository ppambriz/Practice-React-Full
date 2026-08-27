// const iroman = {
//   firstName: "Tony",
//   lastName: "Stark",
//   age: 45,
// };

// console.log(iroman);

// iroman.firstName = "Peter";
// iroman.lastName = "Parker";

// console.log(iroman);


interface Person{
    firstName: string;
    lastName: string;
    age: number;
    address?: Address
}

interface Address{
    postalCode: string;
    city: string
}


const ironman : Person = {
    firstName: 'Tony',
    lastName: 'Stark',
    age: 45,
    address: {
        postalCode: "",
        city: "New York"
    }
}

const spiderman : Person = {
    firstName: 'Peter',
    lastName: 'Parker',
    age: 22,
}

console.log(ironman, spiderman);