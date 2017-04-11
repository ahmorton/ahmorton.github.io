var grammarObj = {
	"S": ["#Noun# is #Adjective# #Emoji#"],
	"Noun": ["death", "life", "your life", "love", "time", "existence"],
	"Adjective": ["meaningless", "coming", "futile"],
	"Emoji": [":)", ";)", ":P", "XD", "(:", ":')", ":(", ":D", "D:"]

}
var grammar = tracery.createGrammar(grammarObj)

$('h1,h2').each(function(){
	var t = grammar.flatten("#S#");
	$(this).text(t)
})