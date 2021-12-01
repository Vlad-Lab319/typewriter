const sentence = "hello there from lighthouse labs";

const typeWriter = (sentence, letterDelay) => {
 sentence.split("").map((letter, index) => {
    
    setTimeout(() => {

      (index < sentence.length - 1) ? process.stdout.write(letter) : console.log(letter);
      
    }, letterDelay * (index + 1))


});
};


typeWriter(sentence, 100);

