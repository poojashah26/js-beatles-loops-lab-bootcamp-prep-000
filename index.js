<<<<<<< HEAD
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  for (let i = 0; i < musicians.length; i++) 
  {
    var string = `${musicians[i]} plays ${instruments[i]}`;
    array.push(string);
  }
  return array
}

function johnLennonFacts(facts) {
  var array = [];
  let i = 0;
  while (i < facts.length) {
    array.push(`${facts[i]}!!!`);
    i++;
  }
  return array
}

function iLoveTheBeatles(number) {
  var array = [];
  do {
    array.push("I love the Beatles!");
    number++;
  } while (number < 15);
  return array
}
=======
// add solution here
function theBeatlesPlay(musician, instrument) {
  return `${musician} plays ${instrument}`
}

var musicians = ["John Lennon", "Paul McCartney", "George Harrison", "Ringo Starr"]
var instruments = ["Guitar", "Base Guitar", "Lead Guitar", "Drums"]
>>>>>>> 2b14040b8e8b9ddcf8bcf7274c9056cd068ad123
