let multiLine = `[set]'myAge'|is actually 9, but we will say it is|(8)
tyvurtgfc
[end]'qwert'|qwer|
[set]"cucumber"(3)  
er257e7u36rs
[bad-word]
[set]|I love peanut butter|'votingAge'(18)
[set]|acoally cucumbers|'canVote'<'myAge'{!<}'votingAge'>
[if]'canIVote?'<'canVote'{=}<true>>
[page.write]|whd|"I can vote!"
[else]
[page.write]"I cant Vote"
[end]'canIVote?'`;
document.getElementById('lines').innerHTML = multiLine.replace(/</g,'&lt;')
let lines = multiLine.split("\n")
console.log(lines)
let counter = 0
let line = ''
const pageRegEx = /\[page\.(write|button)\]\"[^\"]*\"/
const endIfRegEx = /\[end\](\'[^\']+\')/
const ifRegEx = /\[if\](\'[^\']+\')(<.+>)/
const setRegEx = /^\[set\](\'\w+\')(.+)$/
const functionRegEx = /^\[function\](\'[^\']*\')(\{[^\}]*)\}$/
const elseRegEx = /\[else\]/
const boolean = /<(\d|\'\w+\')\{[=<>]\}(\d|\'\w+\')>/
const returnRegEx = /\[return\](.+)/
const reservedWordRegex = /\[(.+)\]/
let stack = []
let result = []
let symbolTable = {}
while(counter < lines.length) {
    line = lines[counter]
    result = reservedWordRegex.exec(line)
    if(null !== result) {
        console.log(`line ${counter} is valid and it is a reserved word ${result[1]}`)
        const validator = validators.filter((v) => {
            return result[1] === v.reservedWord
        }) 
        if(validator.length === 0) {
            console.log('bad word')
        } else {
            // execute the validator function with line (stripped of comments)
            validator[0].FUNCTION(stack, line.replace(/\|.*?\|/g,''), symbolTable)
        }
    }
    counter += 1   
}
