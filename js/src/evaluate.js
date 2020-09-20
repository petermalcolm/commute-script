const ERROR_FLAG = `[error]`

const makeTree = (expr, symbols) => {
    return varsToValues(expr, symbols)
}

const varsToValues = (expr, symbols) => {
    // Loop through expression, replace symbols from symbol table (stop at 100)
    for(let i = 0; i < 100 && containsVars(expr); i++) {
        try {
            const firstVar = /\'(.*?)\'/.exec(expr)
            expr = expr.replace(firstVar[0],symbols[firstVar[1]])
        } catch(err) {
            console.error(`sometings wrong with a var name \n ${expr}`)
            return ERROR_FLAG
        }
    }
    console.log(expr)
    return expr
}

const evalTree = (tree) => {
    return tree
}

const containsVars = (str) => {
    return str.replace(/\".*?\"/g,'').indexOf(`'`) !== -1
}


(() => {
    console.assert(containsVars(`'you'`) === true,`'you'`)
    console.assert(containsVars(`"'you'"`) === false,`"'you'"`)
})()


const evaluate = (expr, symbols) => {
    return evalTree(makeTree(expr, symbols))
}

// Finally, test the evaluate function
(() => {

    const symbols = {
        myAge: "(8)",
        votingAge: "(18)"
    }

    console.assert(evaluate(`<(4){=}(4)>`,symbols) === true,`<(4){=}(4)>`)
    console.assert(evaluate(`<(2){=}(4)>`,symbols) === false,`<(2){=}(4)>`)// =
    console.assert(evaluate(`<(2){!=}(4)>`,symbols) === true,`<(4){!=}(4)>`)
    console.assert(evaluate(`<(4){!=}(4)>`,symbols) === false,`<(2){!=}(4)>`)// !=
    console.assert(evaluate(`<(2){<}(4)>`,symbols) === true,`<(2){<}(4)>`)
    console.assert(evaluate(`<(4){<}(4)>`,symbols) === false,`<(4){<}(4)>`)
    console.assert(evaluate(`<(6){<}(4)>`,symbols) === false,`<(6){<}(4)>`)// <
    console.assert(evaluate(`<(2){>}(4)>`,symbols) === false,`<(2){>}(4)>`)
    console.assert(evaluate(`<(4){>}(4)>`,symbols) === false,`<(4){>}(4)>`)
    console.assert(evaluate(`<(6){>}(4)>`,symbols) === true,`<(6){>}(4)>`)// >
    console.assert(evaluate(`'myAge'`,symbols) === `(8)`,`'myAge'`)
    console.assert(evaluate(`<'myAge'{!<}'votingAge'>`,symbols) === `<(8){!<}(18)>`,`<'myAge'{!<}'votingAge'>`)
})()