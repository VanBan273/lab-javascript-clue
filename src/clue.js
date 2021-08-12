// ITERATION 1

// Suspects Array

const suspectsArray = [
  { firstName: 'Iván', lastName: 'Oyola', occupation: 'developer', age: 30, description:"hace cosas",color:"Black"},
  { firstName: 'Adam', lastName: 'Romero', occupation: 'chef', age: 25, description:"parece que hace cosas", color:"green",},
  { firstName: 'Elena', lastName: 'Rodriguez', occupation: 'actress', age:27, description:"hace algunas cosas", color:"pink,"},
  { firstName: 'Yara', lastName: 'Tamayo', occupation: 'lawyer',age: 22 ,description:"hace alguna cosilla", color:"yellow"},
  { firstName: 'Jesus', lastName: 'Olea', occupation: 'Entrepreneur',age: 21 ,description:"lo hace todo",color:"red"},
  { firstName: 'Andrea', lastName: 'Lopez', occupation: 'teacher',age :26 ,description:"no hace nada", color:"blue"},
],

// Rooms Array

const roomsArray = ["Living room", "Study","Dining room", "Conservatory", "Library", "Billiard room",
"Lounge", "Ballroom", "Kitchen","Hall", "A spa", "Observatory", "Theater", "Guest house", "A patio"],

// Weapons Array

const weaponsArray = [ {name:"Rope",weight:"2 kg",hurtScale:5},
{name:"Knife",weight:"1 kg",hurtScale:8},
{name:"Candlestick",weight:"3 kg",hurtScale:6},
{name:"Dumbbell",weight:"4 kg",hurtScale:8},
{name:"Poison",weight:"0.5 kg",hurtScale:10},
{name:"Axe",weight:"3 kg",hurtScale:9},
{name:"Bat",weight:"2 kg",hurtScale:6},
{name:"Trophy",weight:"3 kg",hurtScale:8},
{name:"Pistol",weight:"2.5 kg",hurtScale:10}];
  

// ITERATION 2

function selectRandom(arr) {
    const selector = Math.floor(Math.random() * arr.length);
    return arr[selector]
  }

  function pickMystery() {
    let myMystery = {
     suspect:{}, weapon:{}, room:{} 
    } 
      myMystery.suspect = selectRandom(suspectsArray);
      myMystery.weapon = selectRandom(weaponsArray);
      myMystery.room = selectRandom(roomsArray);
      return myMystery
  }


// ITERATION 3

function revealMystery(obj) {
    const firstName = obj.suspect.firstName;
    const lastName = obj.suspect.lastName;
    const weapon = obj.weapon.name;
    const room = obj.room.name;
    return ` ${firstName} ${lastName} killed Mr. Boddy using the ${weapon} in the ${room}!`
  }



// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = {
    suspectsArray,
    roomsArray,
    weaponsArray,
    pickMystery,
    revealMystery,
    selectRandom
  };
}