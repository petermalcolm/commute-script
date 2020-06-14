let multiLine = `[set]'myAge'(8)
tyvurtgfc
[end]'qwert' 
er257e7u36rs
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
let functionRegEx = /^\[function\](\'[^\']*\')(\{[^\}]*)\}$/
let returnRegEx = /\[return\](.+)/
let stack = []
let result = []
while(counter < lines.length) {
    line = lines[counter]
    result = setRegEx.exec(line)
    if(null !== result) {
        console.log(`line ${counter} is valid and it is a setRegEx`)
    } else {
        result = ifRegEx.exec(line)
        if(null !== result) {
            console.log(`line ${counter} is valid and it is a ifRegEx`)
            stack.push('if')
            stack.push(result[1])
        } else {
            result = elseRegEx.exec(line)
            if(null !== result) {
                console.log(`line ${counter} is valid and it is a elseRegEx`)
                if(!stack || stack[stack.length-2] !== 'if' && stack[stack.length-1] === result[1]) { 
                    console.log(`but there's no if`)
                }
            } else {
                result = endIfRegEx.exec(line)
                if(null !== result) {
                    console.log(`line ${counter} is valid and it is a endIfRegEx`)
                    if(!stack || stack[stack.length-2] !== 'if' && stack[stack.length-1] === result[1]) {
                        console.log(`but there's no if`)
                        stack.pop()
                    } else {
                        
                    }
                } else {
                    result = functionRegEx.exec(line)
                    if(null !== result) {
                    console.log(`line ${counter} is valid and it is a functionRegEx`)
                    stack.push('function')
                    stack.push(result[1])
                    } else {
                        result = pageRegEx.exec(line)
                        if(null !== result) {
                            console.log(`line ${counter} is valid and it is a pageRegEx`)
                        } else {
                            result = returnRegEx.exec(line)
                        if(null !== result) {
                            if(!stack || stack[stack.length-2] !== 'if' && stack[stack.length-1] === result[1]) {
                            console.log(`line ${counter} is valid and it is a returnRegEx`)
                            }
                        } else {
                             
                        } 
                        }
                    }
                }
            }
        }
    }
    counter += 1   
}
