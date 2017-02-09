
quotes = [ 'The human heart is a strange vessel. Love and hatred can exist side by side.','Mothers may still want their sons to grow up to be President, but according to a famous Gallup poll of some years ago, some 73 percent do not want them to become politicians in the process.','Dwelling on the negative simply contributes to its power.','You may be deceived if you trust too much, but you will live in torment if you do not trust enough.','Todays scientists have substituted mathematics for experiments, and they wander off through equation after equation, and eventually build a structure which has no relation to reality.']

// var randomQuote = quotes[Math.floor(Math.random() * quotes.length)]

// console.log(randomQuote)

// console.log(addNewItem)

// $('#button').click(function() {
// 	var randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
// 	$('#container').append(randomQuote);
// });



//----------------

var text = $('#container');

function randIndex(){
 return Math.floor(Math.random() * quotes.length)
}

text.click(function(){
  $(this).html(quotes[randIndex()]);
})