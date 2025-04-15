const jsonString = `{
"firstname" : "John",
"lastname" : "Doe",
"phone": {
"phone" : {
"type" : "cell",
"number" : 1234567890
},
"email" : "peter.doe@example.com",
"address" : {
"street" : "SampleStreet",
"number":99,
"code":12345,
"city":"Sample City"
}
}`;

const person = JSON.parse(jsonString);
console.log(person.firstname); // "John"
console.log(person.lastname); // "Doe"
console.log(person.phone.type); // "cell"
console.log(person.phone.number); // "1234567890"
console.log(person.email); // "john.doe@exapmle.com"
console.log(person.address.street); // "Sample Street"
console.log(person.address.number); // "99"
console.log(person.address.code); // "12345"
console.log(person.address.city); // "Sample City"
