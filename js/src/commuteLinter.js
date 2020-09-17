let multiLine = `[set]'myAge'(8)
tyvurtgfc
[end]'qwert'|qwer| 
er257e7u36rs
[bad-word]
[set]'votingAge'(18)
[set]'canVote'<'myAge'{!<}'votingAge'>
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
let pageRegEx = /\[page\.(write|button)\]\"[^\"]*\"/
let endIfRegEx = /\[end\](\'[^\']+\')/
let ifRegEx = /\[if\](\'[^\']+\')(<.+>)/
let setRegEx = /^\[set\](\'\w+\')(.+)$/
let elseRegEx = /\[else\]/
let boolean = /<(\d|\'\w+\')\{[=<>]\}(\d|\'\w+\')>/
let functionRegEx = /^\[function\](\'[^\']*\')(\{[^\}]*)\}$/
let returnRegEx = /\[return\](.+)/
let reservedWord = /\[(.+)\]/
let stack = []
let result = []
while(counter < lines.length) {
    line = lines[counter]
    result = reservedWord.exec(line)
    if(null !== result) {
        console.log(`line ${counter} is valid and it is a reserved word ${result[1]}`)
        const validator = validators.filter((v) => {
            return result[1] === v.reservedWord
        })
        if(validator.length === 0) {
            console.log('bad word')
        }
    }
    counter += 1   
}
