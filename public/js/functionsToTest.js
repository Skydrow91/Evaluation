//Retourne un objet, prend en compte si l'argument n'as pas été donné

const returnAnObject = (...args) => {
  let response = {};
  if (args.length) {
    let index = 0;
    args.forEach(arg => {
      response[index] = arg;
      index++;
    })
  } else {
    response = 'No argument was given to the function.';
  };
  return response;
};

//Multiple tout par deux et retourne la réponse, prend en compte l'erreur si l'argument n'est pas un nombre.

const multiplyAllByTwo = (arrayOfNumbers) => {
  let response;
  if (arrayOfNumbers.constructor.prototype === new Array().constructor.prototype) {
    response = arrayOfNumbers.map((val => val * 2));
    console.log('arrayTimesTwo: ', arrayTimesTwo);
  } else {
    response = 'The argument is not an Array of numbers';
  };
  return response;
};