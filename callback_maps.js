
function map(input, myfunc)
{
  var output = [];

  input.forEach(function(element)
  {
    output.push(myfunc(element));
  });

  console.log(output);

}

var words = ["ground", "control", "to", "major", "tom"];

console.log(map(words, function(word) {return word.length;}));

console.log(map(words, function(word) {return word.toUpperCase();}));

console.log(map(words, function(word) {return word.split('').reverse().join('');}));