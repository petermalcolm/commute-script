// |var|'me'(0)
let test1 = `<3{=}3>`; // valid, true
let test2 = `<2{<}0>`; // valid, false
let test3 = `<2{}0>`; // not valid

const booleanComparisons = /<(\d+|\'\w+\')\{\!?[>=<]\}(\d+|\'\w+\')>/; //  ep. <2{=}2>
const resevedWord = /\[(var|while|end|page\.write)\]/
const string = /\"\w+\"/
const parenthases = /\(\w+\)/ 
let symbols = {}
const names = /\'\w+\'/
symbols['a']


