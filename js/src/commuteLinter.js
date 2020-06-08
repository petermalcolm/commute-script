let multiLine = `[set]'myAge'(8)
[set]'votingAge'(18)`;
document.getElementById('lines').innerHTML = multiLine;
let lines = multiLine.split("\n")
console.log(lines)
let counter = 0
let line = ''
let ifRegEx = /\[if\]\'\w+\'<.+>/
let setRegEx = /^\[set\]\'\w+\'(\(\d+\)|<(\d|\'\w+\')\{!?[=<>]\}(\d|\'\w+\')>|\"[^\"]*\")$/
let elseRegEx = /\[else\]/
let boleyen = /<(\d|\'\w+\')\{[=<>]\}(\d|\'\w+\')>/
let stack = []
let result = []
while(counter < lines.length) {
    line = lines[counter]
    result = setRegEx.exec(line)
    if(null !== result) {
        console.log(`line ${counter} is valad and it is a setRegEx`)
        
    } else {
        result = ifRegEx.exec(line)
        if(null !== result) {
            console.log(`line ${counter} is valad and it is a ifRegEx`)
            stack.push('if')
        } else {
            result = elseRegEx.exec(line)
            if(null !== result) {
                console.log(`line ${counter} is valad and it is a elseRegEx`)
            } else {
                
            }
        }
    }
    counter += 1
    
}