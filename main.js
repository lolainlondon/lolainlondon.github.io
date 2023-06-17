//Define arrays that contain quote segments
let beginningQuote = ['Never forget to', 'You should always', 'Take time to', 'It can help to']
let middleQuote = ['be at one with nature', 'appreciate little joys', 'listen to your inner child', 'breathe deeply']
let endQuote = ['when searching for your path', 'even during large sorrows', 'at the start of a steep climb', 'in crowded places']

//Define randomizer
const selectQuote = arr => {
  const quoteIndex = Math.floor(Math.random()*4)
  {return arr[quoteIndex]}
};
function allQuotes {
let beginning = selectQuote(beginningQuote);
let middle = selectQuote(middleQuote);
let end = selectQuote(endQuote);}

document.getElementById('beginning').innerHTML = beginning;
document.getElementById('middle').innerHTML = middle;
document.getElementById('end').innerHTML = end;

garfield.onclick(allQuotes)