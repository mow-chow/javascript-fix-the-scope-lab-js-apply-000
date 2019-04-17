var animal = "dog"

function myAnimal(string) {
  return animal
}

function yourAnimal() {
  var animal = "cat"
  // How can we make sure that this function
  // and the above function both pass?
  // P.S.: You can't just hard-code 'cat' below
  return animal
}
//animal = "dog" is global variables so function yourAnimal would use it unless a new variable was identified within its scope

  const two = 2
function add2(n) {

  return n + parseInt(two)
}
//
var funkyFunction = function() {
  return function() {
    return "FUNKY!"
  }
}

// We want to set theFunk equal to "FUNKY!" using our funkyFunction.
// NOTE: you only need to modify the code below this line.
var theFunk = funkyFunction()()
//FUNKY! is returned by a function within a function 
