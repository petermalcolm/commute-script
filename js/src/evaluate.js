const ERROR_FLAG = `[error]`

const evaluate = (expr, symbols) => {
    return evalTree(makeTree(expr, symbols))   
}
const makeTree = (expr, symbols) => {
    return varsToValues(expr, symbols)
}

const varsToValues = (expr, symbols) => {
    // Loop through expression, replace symbols from symbol table
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
    return -123456789
}

const containsVars = (str) => {
    return str.replace(/\".*?\"/g,'').indexOf(`'`) !== -1
}


(() => {
    console.assert(containsVars(`'you'`) === true,`'you'`)
    console.assert(containsVars(`"'you'"`) === false,`"'you'"`)
})()

const placeholder = 0;

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

})()