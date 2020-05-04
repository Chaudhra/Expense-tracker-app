// Object destructuring
const person = {
    name:'andrew',
    location:{
        city:'To',
        temp:'30'
    }
};

// With desctructuring you can rip apart an object and pull various properties into their own variables
// const name = person.name   <--- THis would work, but you'd have to do this for each property, not scalable
// Instead, use destructuring:
const {name='default value',age} = person //creates two variables, name and age, from person object

//desctructure of nested object, in this case the object is person.location
// We can also re-name the object property by using temp: <new_name>. But then we can only reference property by new name.
const {city, temp:temperature} =  person.location; 
if (city && temperature){
    console.log(`Its ${temperature} in ${city}`);
}


// Array  destructuring
// Allows us to pull items off of an array


const address = ['1299 s juniper street','TOronto','LLL999'];

const [street, ccity, zip='default value'] = address
console.log(`You are in ${ccity} on street ${street}`)