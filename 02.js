let keyboard = "abcdefghijklmnopqrstuvwxyz";
const countPrintTime = (keyboard, word) => {

    let time = 0;

    const searchForNext = (letter) => {
        while (keyboard[i] !== letter) {
            if (keyboard[i] < letter) {
                i++;
                time +=1;
            } else {
                i--;
                time += 1;
            }
        };
        return keyboard[i];        
    }

    let i = 0,
        k = 0;
    while (k !== word.length) {

       let foundedLetter = searchForNext(word[k]);
       //console.log('foundedLetter: ', foundedLetter);
       if(foundedLetter) {
           k++;
       } else {
           return 'nothing matched'
       };       
    };


    return time;
};

countPrintTime(keyboard, 'word')