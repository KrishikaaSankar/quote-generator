function generate(){
    const quotes={
        "-Victor Hugo" : '"People do not lack strength, they lack will."' , 
        "-Eleanor Roosevelt" : '"Do one thing everyday that scares you."' ,
        "-Thomas A. Edison" : '"Genius is one percent inspiration and ninety-nine percent perspiration."' ,
        "-William James" : '"The art of being wise is the art of knowing what to overlook."' , 
        "-Bill Cosby" : '"Decide that you want it more than you are afraid of it!"' ,
        "-Wayne Dyer" : '"How people react is their karma; how you react is yours.'
    };
    var authors = Object.keys(quotes);
    var author = authors[Math.floor(Math.random()*authors.length)];
    var quote = quotes[author];
    document.getElementById("quote").innerHTML = quote;
    document.getElementById("author").innerHTML = author;
}