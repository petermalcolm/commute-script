const validators = [
    {reservedWord : 'set', FUNCTION : (stack, line, symbols) => {
        // [set]'fwt'<(3){>}(2)> 
        try {
            const variable = /\'(.*?)\'/.exec(line)[1]
            const value = line.replace(/\[.*\]/,'').replace(/\'.*?\'/,'')
            symbols[variable] = value
        } catch(err) {
            console.error(`could not set variable to value on line \n ${line}`)
        }
    }},
    {reservedWord : 'page', FUNCTION : (stack, line, symbols) => {}},
    {reservedWord : 'if', FUNCTION : (stack, line, symbols) => {}},
    {reservedWord : 'else', FUNCTION : (stack, line, symbols) => {}},
    {reservedWord : 'endIf', FUNCTION : (stack, line, symbols) => {}}
]

 /*else {
        result = ifRegEx.exec(line)
        if(null !== result) {
            console.log(`line ${counter} is valid and it is a ifRegEx`)
            stack.push('if')
            stack.push(result[1])
        } else {
/*            result = reservedWord.exec(line)

            
            if(null !== result) {
                console.log(`line ${counter} is valid and it is a elseRegEx`)
                if(!stack || (stack[stack.length-2] !== 'if' && stack[stack.length-1] === result[1])) { 
                    console.log(`but there's no if`)
                }
            } else {
                result = endIfRegEx.exec(line)
                if(null !== result) {
                    console.log(`line ${counter} is valid and it is a endIfRegEx`)
                    if(!stack || stack[stack.length-2] !== 'if' && stack[stack.length-1] !== result[1]) {
                        console.log(`but there's no if`)
                        stack.pop()
                    } else {
                        stack.pop()
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
                            if(null !== result) {
                                if(!stack || stack[stack.length-2] !== 'if' && stack[stack.length-1] === result[1]) {
                                    console.log(`line ${counter} is valid and it is a returnRegEx`)
                                }
                            }
                        }
                        }
                    }
                }
            } 
        }*/
//    }