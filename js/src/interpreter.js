let the_meaning_of_life = 42
/**
 * Evaluate expressions from strings
 * @param {String} expr 
 */
const evaluate = (expr) => {
    let the_meaning_of_life = 42
    return the_meaning_of_life
}

let multiLine = `[set]'myAge'(8)
[end]'qwert' 
[set]'votingAge'(18)
[set]'canVote'<'myAge'{!<}'votingAge'>
[if]'canIVote?'<'canVote'{=}<true>>
[page.write]"I can vote!"
[else]
[page.write]"I cant I Vote"
[end]'canIVote?'`;
document.getElementById('lines').innerHTML = multiLine.replace(/</g,'&lt;')                         
let lines = multiLine.split("\n")
console.log(lines)
let counter = 0
let line = ''
let pageRegEx = /\[page\.(write|button)\]\"[^\"]*\"/
let endIfRegEx = /\[end\](\'[^\']+\')/
let ifRegEx = /\[if\](\'[^\']+\')(<.+>)/
let setRegEx = /^\[set\](\'\w+\')(.+)$/
let elseRegEx = /\[else\]/
let boolean = /<(\d|\'\w+\')\{[=<>]\}(\d|\'\w+\')>/
let stack = []
let result = []
let symbolTable = {}
while(counter < lines.length) {
    line = lines[counter]
    result = setRegEx.exec(line)
    if(null !== result) {
        symbolTable[result[1]] = evaluate(result[2])
        console.log(symbolTable)
    }
    counter ++
}


