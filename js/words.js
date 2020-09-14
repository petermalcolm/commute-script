const makeRandomWord = () => {
    let cosenents = ['th','b','c','d','sh','f','g','h','i','j',
    'ch','l','m','n','th','p','r','s','t','v','w','y','z','zh']
    let cosenentWord = ''
    let vowalWord = ''
    let vowals = ['ā','a','ē','e','ī','i','ō','o','oo','u']
    let number = 0

    number = (Math.random()*4-0)
    if(number === 1) {
        while(counter<(Math.random()*4-1)) {
            cosenentWord = cosenents[Math.random()*cosenents.length-0]
            vowalWord = cosenents[Math.random()*cosenents.length-0]
            
        }
    }

    let i = 0;
    for(i = 0; i < 5; i++ ) {
        console.log('yo ' + i +  '!')
    }
    console.log(cosenentWord)
    console.log(vowalWord)
}