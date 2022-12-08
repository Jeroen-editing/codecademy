/*
// typof and combinig 
var tekst = 'I am number: ';
let nr = 3;
console.log(typeof tekst, typeof nr);
let both = `${tekst} ${nr}`;
console.log(typeof both, both);


// using \', so string doesn\'t close
let season = 'summer';

if (season === 'spring') {
  console.log('It\'s spring! The trees are budding!');
} else if (season === 'winter') {
  console.log('It\'s winter! Everything is covered in snow.');
} else {
  console.log('Invalid season.');
}


// using a function with new arguments (in the 2nd code)
function sayThanks(name) {
  console.log('Thank you for your purchase ' + name + '! We appreciate your business.');
}
sayThanks('Cole');


let company = 'La Boutique';
sayThanks(company);


//default parameters
function makeShoppingList(item1 = 'milk', item2 = 'bread', item3 = 'eggs'){
  console.log(`Remember to buy ${item1}`);
  console.log(`Remember to buy ${item2}`);
  console.log(`Remember to buy ${item3}`);
  console.log('----------------------')
}

makeShoppingList();
makeShoppingList('beer');
makeShoppingList('milk', 'bread', 'beer');


// function doesn't excecute without 'return' or when it's not called
function monitorCount (rows, columns) {
    let monitors = rows * columns;
    return monitors;
}

const numOfMonitors = monitorCount(5, 4)
console.log(numOfMonitors)


// helper functions
function monitorCount (rows, columns) {
    return rows * columns;
}

function costOfMonitors (rows, columns) {
    return monitorCount * 2000;
}

const totalCost = costOfMonitors(5, 4);
console.log(totalCost);


// function expressions
const plantNeedsWater = function(day){
    if(day === 'Wednesday') {
        return true
    } else {
        return false
    }
};

plantNeedsWater('Tuesday');
console.log(plantNeedsWater());


// Arrow functions (= new function syntax)
const plantNeedsWater = (day) => {
    if(day === 'Wednesday') {
        return true
    } else {
        return false
    }
};


// concise body arrow function
const plantNeedsWater = (day) => {
    return day === 'Wednesday' ? true : false
};
// or
const plantNeedsWater = day => day === 'Wednesday';
console.log(plantNeedsWater('Friday'));     // outcome is 'false'


// scopes
const city = 'New York City';

function logCitySkyline() {
  let skyscraper = 'Empire State Building';
  return 'The stars over the ' + skyscraper + ' in ' + city;
}

console.log(logCitySkyline())


// global scope
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky () {
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + 
        galaxy;
};

console.log(callMyNightSky());


// block scope
function logVisibleLightWaves() {
    const lightWaves = 'Moonlight';
    console.log(lightWaves);
};

console.log(logVisibleLightWaves());
console.log(lightWaves); // ReferenceError lightWaves is not defined


// scope pollution !!! --> avoid to much global var.
const satellite = 'The Moon';
const galaxy = 'The Milky Way';
const stars = 'North Star';

function callMyNightSky () {
    stars = 'Sirius';
    return 'Night Sky: ' + satellite + ', ' + stars + ', and ' + 
        galaxy;
};

console.log(callMyNightSky());
console.log(stars);


// practice good scoping
function logVisibleLightWaves() {
    let lightWaves = 'Moonlight';
    let region = 'The Artic';
    if (region === 'The Artic') {
        let lightWaves = 'Northern Lights';
        console.log(lightWaves);
    }
    console.log(lightWaves);
};

logVisibleLightWaves();
console.log(logVisibleLightWaves());


// arrays
const hobbies = ['editing', 'coding', 'cyclocross'];
console.log(hobbies);


// accessing elements
const famousSayings = ['Fortune favors the brave.', 'A joke is a very serious thing.', 'Where there is love there is life.'];
const listItem = famousSayings[0];
console.log(listItem);
console.log(famousSayings[2]);
console.log(famousSayings[3]);  // 'undifined' [3] =4th element doesn't excist


// update elements
let groceryList = ['bread', 'tomatoes', 'milk'];
console.log(groceryList);
groceryList[1] = 'avocados';
console.log(groceryList);


// arrays with let and const
let condiments = ['Ketchup', 'Mustard', 'Soy Sauce', 'Sriracha'];

const utensils = ['Fork', 'Knife', 'Chopsticks', 'Spork'];

condiments[0] = 'Mayo';
console.log(condiments);

condiments = ['Mayo'];
console.log(condiments);

utensils[3] = 'Spoon';
console.log(utensils);

// utensils = ['Spoon'];
//  console.log(utensils);  ---> doesn't work for a const


// the .length property from string also works fro arrays (method?)
const objectives = ['Learn a new languages', 'Read 52 books', 'Run a marathon'];

console.log(objectives.length);


// .push method = add's items at the end
const chores = ['wash dishes', 'do laundry', 'take out trash'];

chores.push('mop the kitchen', 'clean up the sittingroom');
console.log(chores);


// .pop method = removes last item
const chores = ['wash dishes', 'do laundry', 'take out trash', 'cook dinner', 'mop floor'];

const removed = chores.pop();
console.log(chores);    // output: ['wash dishes', 'do laundry', 'take out trash', 'cook dinner']
console.log(removed); // output: cook dinner


// .join(), .slice(), .splice(), .shift(), .unshift(), and .concat()
const groceryList = ['orange juice', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains'];

groceryList.shift();  // removes first item
console.log(groceryList);  // output: ['bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']

groceryList.unshift('popcorn');  // adds new item first
console.log(groceryList);  // output: [ 'popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains' ]

// groceryList.slice(1, 4); removes items after 1 argument or between 2 arguments
console.log(groceryList.slice(1, 4));  // output: [ 'bananas', 'coffee beans', 'brown rice' ]
console.log(groceryList); // output: ['popcorn', 'bananas', 'coffee beans', 'brown rice', 'pasta', 'coconut oil', 'plantains']  --->  .slice is non-mutating

const pastaIndex = groceryList.indexOf('pasta');
console.log(pastaIndex);


// arrays in functions (method of an array, called in a function, mutates the array also outside the function)
const concept = ['arrays', 'can', 'be', 'mutated'];

function changeArr(arr){
  arr[3] = 'MUTATED';
}

changeArr(concept);
console.log(concept);  // output: ['arrays', 'can', 'be', 'MUTATED']

function removeElement (newArr) {
    newArr.pop()
}
removeElement(concept);
console.log(concept);  // output: ['arrays', 'can', 'be']


// nested arrays
const numberClusters = [[1, 2], [3, 4], [5, 6]];
const target = numberClusters[2][0];
console.log(target);  // output: 6


// loops  ex why we need looops
let vacationSpots = ['Balazuc', 'Portugal', 'Ardennes'];

console.log(vacationSpots[0]);
console.log(vacationSpots[1]);
console.log(vacationSpots[2]);  // better if we can use a loop to do this things


// the for loop
for (let members =5; members < 11; members++)   {
    console.log(members);
}


// loping in reverse
for (let counter = 3; counter >= 0; counter--){
  console.log(counter);
}


// looping through arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];

for (let i = 0; i < vacationSpots.length; i++)  {
    console.log('I would love to visit ' + vacationSpots[i]);
};
// my extra ex. you can combine it with 2 arrays
const vacationSpots = ['Bali', 'Paris', 'Tulum'];
const holidayWishes = ['I would love to visit ', 'But I also would like to go to ', 'And next time I willgo to ']

for (let i = 0; i < vacationSpots.length; i++)  {
    console.log(holidayWishes[i] + vacationSpots[i]);
};


// nested loops
//example
const myArray = [6, 19, 20];
const yourArray = [19, 81, 2];
for (let i = 0; i < myArray.length; i++) {
  for (let j = 0; j < yourArray.length; j++) {
    if (myArray[i] === yourArray[j]) {
      console.log('Both loops have the number: ' + yourArray[j])
    }
  }
};
//  ex
let bobsFollowers = ['James', 'Suzanne', 'Sam', 'Jack'];
let tinasFollowers = ['Sam', 'Suzanne', 'John'];
let mutualFollowers =[];

for (let i = 0; i < bobsFollowers.length; i++) {
    for (let j = 0; j < tinasFollowers.length; j++) {
        if (bobsFollowers[i] === tinasFollowers[j]) {
            mutualFollowers.push(bobsFollowers[i]);
        }
    }
}       // DONT FORGET !! mutualFollowers.push(bobsFollowers[i])


// while loop
const cards = ['diamond', 'spade', 'heart', 'club'];

let currentCard;
while (currentCard != 'spade')  {
    currentCard = cards[Math.floor(Math.random() * 4)];
    console.log(currentCard);
}


// do... while
let cupsOfSugarNeeded = 4;
let cupsAdded = 0;

do {
    cupsAdded = cupsAdded + 1;
    // console.log(cupsAdded);  output: 1 2 3 4 4
}   while (cupsAdded < cupsOfSugarNeeded);

console.log(cupsAdded); // withou first consol.log output: 4


// break keyword
const rapperArray = ["Lil' Kim", "Jay-Z", "Notorious B.I.G.", "Tupac"];

for (let i = 0; i < rapperArray.length; i++) {
    console.log(rapperArray[i]);
}   // prints all array itmes
    // if there's a single quote character in your string, you can use double
    //   quotes around the string to make sure it prints !!!
for (let i = 0; i < rapperArray.length; i++) {
    if (i > 2) {
        break;
    }
    console.log(rapperArray[i]);
}   console.log("And if you don't know, now you know.");
    // stops after index [2]


// loop project
// functions as data
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

const is2p2 = checkThatTwoPlusTwoEqualsFourAMillionTimes;
is2p2();
console.log(is2p2.name); // to check the name where the var references to

// functions as prameters
const checkThatTwoPlusTwoEqualsFourAMillionTimes = () => {
  for(let i = 1; i <= 1000000; i++) {
    if ( (2 + 2) != 4) {
      console.log('Something has gone very wrong :( ');
    }
  }
};

console.log(checkThatTwoPlusTwoEqualsFourAMillionTimes); // output: syntaxerror

const addTwo = num => num + 2;

console.log(addTwo); // output: syntaxerror

const timeFuncRuntime = funcParameter => {
  let t1 = Date.now();
  funcParameter();
  let t2 = Date.now();
  return t2 - t1;
};

console.log(timeFuncRuntime()); // output: syntaxerror

const time2p2 = timeFuncRuntime(checkThatTwoPlusTwoEqualsFourAMillionTimes);

console.log(time2p2);

const checkConsistentOutput = (func, val) => {
    let firstTry = func(val);
    let secondTry = func(val);
    if (firstTry === secondTry) {
        return firstTry;
        }   else {
                return 'This function returned inconsistent results';
        }   
};

let x = checkConsistentOutput(addTwo, 2);
console.log(x);  // output: 4


// introduction to iterators (methods)
// examples
// 1
const artists = ['Picasso', 'Kahlo', 'Matisse', 'Utamaro'];

artists.forEach(artist => {
  console.log(artist + ' is one of my favorite artists.');
});

// 2
const numbers = [1, 2, 3, 4, 5];

const squareNumbers = numbers.map(number => {
  return number * number;
});

console.log(squareNumbers);

// 3
const things = ['desk', 'chair', 5, 'backpack', 3.14, 100];

const onlyNumbers = things.filter(thing => {
  return typeof thing === 'number';
});

console.log(onlyNumbers);


// .forEach Method
const fruits = ['mango', 'papaya', 'pineapple', 'apple'];

fruits.forEach(fruitSorts => console.log('I want to eat a ' + fruitSorts));


// .map Method
const animals = ['Hen', 'elephant', 'llama', 'leopard', 'ostrich', 'Whale', 'octopus', 'rabbit', 'lion', 'dog'];

const secretMessage = animals.map(animal => animal[0]);

console.log(secretMessage.join(''));                // output: HelloWorld
console.log('"' + (secretMessage.join('')) + '!"');  // output: "HelloWorld!"

const bigNumbers = [100, 200, 300, 400, 500];

const smallNumbers = bigNumbers.map (number => number / 100);

console.log(smallNumbers)


// .filter Method
const randomNumbers = [375, 200, 3.14, 7, 13, 852];

const smallNumbers = randomNumbers.filter(num => {
  return num < 250;
})

console.log(smallNumbers);


const favoriteWords = ['nostalgia', 'hyperbole', 'fervent', 'esoteric', 'serene'];

const longFavoriteWords = favoriteWords.filter(words => {
  return words.length > 7;
})

console.log(longFavoriteWords);


// .findIndex Method
const animals = ['hippo', 'tiger', 'lion', 'seal', 'cheetah', 'monkey', 'salamander', 'elephant'];

const foundAnimal = animals.findIndex(animal => { 
    return animal === 'elephant'
});

console.log(foundAnimal);

const startsWithS = animals.findIndex(animal => {
    return animal[0] === 's'
});

console.log(startsWithS);


// .reduce Method
const newNumbers = [1, 3, 5, 7];

const newSum = newNumbers.reduce((accumulator, currentValue) => {
    console.log('The value of accumulator; ', accumulator);
    console.log('The value of currentValue; ', currentValue);
    return accumulator + currentValue;
}, 10);

console.log(newSum);


// iterator documentation - different iterating methods
const words = ['unique', 'uncanny', 'pique', 'oxymoron', 'guise'];

//  .some
console.log(words.some((word) => {
  return word.length < 6;
}));

//  .filter
const interestingWords = words.filter((word) => {
  return word.length > 5
});

//  .every
console.log(interestingWords.every((word) => {
	return word.length > 5
}));


//  choosing the right iterator
const cities = ['Orlando', 'Dubai', 'Edinburgh', 'Chennai', 'Accra', 'Denver', 'Eskisehir', 'Medellin', 'Yokohama'];

cities.forEach(city => console.log('Have you visited ' + city + '?'));

const longCities = cities.filter(city => city.length > 7);  // rturns a new array

const word = cities.reduce((acc, currVal) => { 
  return acc + currVal[0]
}, "C");                                        // returns a single value

console.log(word)


const nums = [1, 50, 75, 200, 350, 525, 1000];

const smallerNums = nums.map(num => num - 5);   // to return a new array
console.log(smallerNums);

console.log(nums.every(num => num < 0));  // returns boolean (false or true)


// Objects
// creatin new object
let fasterShip = {
    'Fuel Type': 'Turbo Fuel',
    color: 'silver'
}

// accessing properties
let spaceship = {
  homePlanet: 'Earth',
  color: 'silver',
  'Fuel Type': 'Turbo Fuel',
  numCrew: 5,
  flightPath: ['Venus', 'Mars', 'Saturn']
};

let crewCount = spaceship.numCrew;

let planetArray = spaceship.flightPath;

// bracket notation
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  'Active Mission' : true,
  homePlanet : 'Earth', 
  numCrew: 5
 };

let propName =  'Active Mission';

let isActive = spaceship['Active Mission'];

console.log(spaceship[propName]);

console.log(spaceship['Active Mission']);

console.log(isActive);

// property assignment
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth',
  color: 'silver',
  'Secret Mission' : 'Discover life outside of Earth.'
};

spaceship.color = 'glorious gold';

spaceship.numEngines = 6;

delete spaceship.['Secret Mission'];


// Methods
let retreatMessage = 'We no longer wish to conquer your planet. It is full of dogs, which we do not care for.';

let alienShip = {
  retreat() {
    console.log(retreatMessage)
  },
  takeOff() {
    console.log('Spim... Borp... Glix... Blastoff!')
  }
};

alienShip.retreat();

alienShip.takeOff();


// Nested objects
let spaceship = {
  passengers: [{name: 'Space Dog'}],
  telescope: {
    yearBuilt: 2018,
    model: "91031-XLT",
    focalLength: 2032 
  },
  crew: {
    captain: { 
      name: 'Sandra', 
      degree: 'Computer Engineering', 
      encourageTeam() { console.log('We got this!') },
     'favorite foods': ['cookies', 'cakes', 'candy', 'spinach'] }
  },
  engine: {
    model: "Nimbus2000"
  },
  nanoelectronics: {
    computer: {
      terabytes: 100,
      monitors: "HD"
    },
    backup: {
      battery: "Lithium",
      terabytes: 50
    }
  }
}; 

let capFave = spaceship.crew.captain['favorite foods'][0];

let firstPassenger = spaceship.passengers[0];

console.log(capFave, firstPassenger);


// pass by reference
let spaceship = {
  'Fuel Type' : 'Turbo Fuel',
  homePlanet : 'Earth'
};

let greenEnergy = obj => {
    obj['Fuel Type'] = 'avocado oil';
    
let remotelyDisable = obj => {
    obj.disabled = true
}

greenEnergy(spaceship);
    
remotelyDisable(spaceship);
    
console.log(spaceship);
    
    
// looping true objects
let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        degree: 'Conservation Science', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 
    

for (let crewRoles in spaceship.crew) {
    console.log(`${crewRoles}: 
    ${spaceship.crew[crewRoles].name}`)
};
    
//  for (let crewMember in spaceship.crew) {
//    console.log(`${crewMember}: ${spaceship.crew[crewMember].name}`)
//   };                                                                     

for (let crewDegrees in spaceship.crew) {
    console.log(`${spaceship.crew[crewDegrees].name}:
    ${spaceship.crew[crewDegrees].degree}`)
};
    
//  for (let crewMember in spaceship.crew) {
//   console.log(`${spaceship.crew[crewMember].name}: 
//  ${spaceship.crew[crewMember].degree}`)
//    };
*/
    
    
