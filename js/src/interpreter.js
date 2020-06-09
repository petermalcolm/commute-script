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
let setRegEx = /^\[set\]\'\w+\'(.+)$/
let elseRegEx = /\[else\]/
let boolean = /<(\d|\'\w+\')\{[=<>]\}(\d|\'\w+\')>/
let stack = []
let result = []
while(counter < lines.length) {
    result = null
    result = setRegEx.exec(line)
    if(null !== result) {
        
    }
    counter ++
}