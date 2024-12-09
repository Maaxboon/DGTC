/*Greetings Abroad
A bunch of Northcoders are planning their holidays, and are hoping to use this code to help them practice greetings in the language of the country they are visiting.

The code you write should assign a value to greeting that is correct depending on the country that is being visited and the time of day.

It is morning if the time is 0 or more, but less than 12. If the time is 12 or more, but less than 24, it is evening. If time is any other value, greeting should always be null, whatever the language.

If country is Spain or Mexico, greeting should be buenos dias in the morning and buenas noches in the evening. If country is France, greeting should be bon matin in the morning and bon soir in the evening. If country is any other value, greeting should always be null, whatever the time (we don't have many languages in our dictionary yet...)

Just a reminder: you can use country and time in expressions just like any other variable. There are lots of ways you could solve this challenge! Use any tools you've learned so far.

starter code: 
function sayHello(country, time) {
    let greeting;
    // Don't change code below this line
    return greeting;
}
 */

// Ternary Statement
function sayHello(country, time) {
  let greeting;
  greeting =
    country === "Spain" || country === "Mexico"
      ? time >= 0 && time < 12
        ? "buenos dias"
        : time >= 12 && time < 24
        ? "buenas noches"
        : null
      : country === "France"
      ? time >= 0 && time < 12
        ? "bon matin"
        : time >= 12 && time < 24
        ? "bon soir"
        : null
      : null;
  return greeting;
}

/*Switch statement code
function sayHello(country, time) {
    let country = 'Spain';
    let greeting;

    switch (country) {
        case 'Spain':
        case 'Mexico':
            isMorning = true;
            break;
            default:
            console.log('Spain in the morning buenos dias')

    }

    // Don't change code below this line
    return greeting;
} 


if else statement code
function sayHello(country, time) {
    let greeting;
    if (country === 'Spain' || 'Mexico' && 'morning') {
        console.log('buenos dias')
    }
    else if (country === 'Spain' || 'Mexico' && 'evening') {
        console.log('buenas noches')
    } else if (country === 'France' && 'morning') {
        console.log('bon matin')
    } else if (country === 'France' && 'morning') {
        console.log('bon soir')
    } else {
        console.log('null')
    }
    // Don't change code below this line
    return greeting;
}



*/
